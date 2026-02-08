'use client'

import { useState, useEffect, type RefObject } from 'react'

interface ContainerFitOptions {
  itemCount: number
  cardWidthMobile: number
  cardWidthDesktop: number
  gapMobile: number
  gapDesktop: number
}

export function useContainerFit(
  containerRef: RefObject<HTMLDivElement | null>,
  options: ContainerFitOptions,
): boolean {
  const [fitsInRow, setFitsInRow] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const check = () => {
      const availableWidth = el.clientWidth
      const isMd = window.matchMedia('(min-width: 768px)').matches
      const cardWidth = isMd ? options.cardWidthDesktop : options.cardWidthMobile
      const gap = isMd ? options.gapDesktop : options.gapMobile
      const totalNeeded =
        options.itemCount * cardWidth + (options.itemCount - 1) * gap

      setFitsInRow(availableWidth >= totalNeeded)
    }

    check()

    const observer = new ResizeObserver(check)
    observer.observe(el)

    return () => observer.disconnect()
  }, [
    containerRef,
    options.itemCount,
    options.cardWidthMobile,
    options.cardWidthDesktop,
    options.gapMobile,
    options.gapDesktop,
  ])

  return fitsInRow
}
