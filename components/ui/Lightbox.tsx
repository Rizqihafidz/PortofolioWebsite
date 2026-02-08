'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import MaterialIcon from '@/components/ui/MaterialIcon'
import type { GalleryItem } from '@/types'

interface Props {
    images: GalleryItem[]
    initialIndex: number
    onClose: () => void
}

export default function Lightbox({ images, initialIndex, onClose }: Props) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex)
    const [zoom, setZoom] = useState(1)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

    const currentImage = images[currentIndex]

    const goNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
        setZoom(1)
        setPosition({ x: 0, y: 0 })
    }, [images.length])

    const goPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        setZoom(1)
        setPosition({ x: 0, y: 0 })
    }, [images.length])

    const zoomIn = useCallback(() => {
        setZoom((prev) => Math.min(prev + 0.5, 4))
    }, [])

    const zoomOut = useCallback(() => {
        setZoom((prev) => {
            const newZoom = Math.max(prev - 0.5, 1)
            if (newZoom === 1) setPosition({ x: 0, y: 0 })
            return newZoom
        })
    }, [])

    const resetZoom = useCallback(() => {
        setZoom(1)
        setPosition({ x: 0, y: 0 })
    }, [])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'Escape':
                    onClose()
                    break
                case 'ArrowLeft':
                    goPrev()
                    break
                case 'ArrowRight':
                    goNext()
                    break
                case '+':
                case '=':
                    zoomIn()
                    break
                case '-':
                    zoomOut()
                    break
                case '0':
                    resetZoom()
                    break
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [onClose, goNext, goPrev, zoomIn, zoomOut, resetZoom])

    // Mouse wheel zoom
    const handleWheel = useCallback(
        (e: React.WheelEvent) => {
            e.preventDefault()
            if (e.deltaY < 0) {
                zoomIn()
            } else {
                zoomOut()
            }
        },
        [zoomIn, zoomOut]
    )

    // Drag to pan
    const handleMouseDown = useCallback(
        (e: React.MouseEvent) => {
            if (zoom > 1) {
                setIsDragging(true)
                setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
            }
        },
        [zoom, position]
    )

    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            if (isDragging && zoom > 1) {
                setPosition({
                    x: e.clientX - dragStart.x,
                    y: e.clientY - dragStart.y,
                })
            }
        },
        [isDragging, zoom, dragStart]
    )

    const handleMouseUp = useCallback(() => {
        setIsDragging(false)
    }, [])

    return (
        <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose()
            }}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close lightbox"
            >
                <MaterialIcon name="close" className="text-2xl" />
            </button>

            {/* Navigation buttons */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={goPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Previous image"
                    >
                        <MaterialIcon name="chevron_left" className="text-3xl" />
                    </button>
                    <button
                        onClick={goNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Next image"
                    >
                        <MaterialIcon name="chevron_right" className="text-3xl" />
                    </button>
                </>
            )}

            {/* Zoom controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                <button
                    onClick={zoomOut}
                    disabled={zoom <= 1}
                    className="p-2 rounded-full hover:bg-white/20 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Zoom out"
                >
                    <MaterialIcon name="zoom_out" className="text-xl" />
                </button>
                <span className="text-white text-sm font-medium min-w-[3rem] text-center">
                    {Math.round(zoom * 100)}%
                </span>
                <button
                    onClick={zoomIn}
                    disabled={zoom >= 4}
                    className="p-2 rounded-full hover:bg-white/20 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Zoom in"
                >
                    <MaterialIcon name="zoom_in" className="text-xl" />
                </button>
                <div className="w-px h-5 bg-white/30 mx-1" />
                <button
                    onClick={resetZoom}
                    className="p-2 rounded-full hover:bg-white/20 text-white transition-colors"
                    aria-label="Reset zoom"
                >
                    <MaterialIcon name="fit_screen" className="text-xl" />
                </button>
            </div>

            {/* Image counter */}
            {images.length > 1 && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
                    {currentIndex + 1} / {images.length}
                </div>
            )}

            {/* Image container */}
            <div
                className={`relative w-full h-full flex items-center justify-center p-16 ${zoom > 1 ? 'cursor-grab' : ''
                    } ${isDragging ? 'cursor-grabbing' : ''}`}
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <div
                    className="relative max-w-full max-h-full transition-transform duration-200"
                    style={{
                        transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                    }}
                >
                    <Image
                        src={currentImage.src}
                        alt={currentImage.caption}
                        width={1920}
                        height={1080}
                        className="max-w-full max-h-[80vh] object-contain select-none"
                        draggable={false}
                        priority
                    />
                </div>
            </div>

            {/* Caption */}
            {currentImage.caption && (
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white text-center max-w-lg">
                    <p className="text-sm font-medium">{currentImage.caption}</p>
                </div>
            )}
        </div>
    )
}
