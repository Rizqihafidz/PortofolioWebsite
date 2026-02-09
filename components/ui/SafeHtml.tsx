'use client'

import { useEffect, useState } from 'react'
import { sanitizeHtml } from '@/lib/sanitize'

interface Props {
    html: string
    className?: string
}

/**
 * Safely renders HTML content with XSS protection
 * Uses DOMPurify to sanitize content on the client side
 */
export default function SafeHtml({ html, className = '' }: Props) {
    const [sanitized, setSanitized] = useState(html)

    useEffect(() => {
        // Sanitize on client side where DOMPurify is available
        setSanitized(sanitizeHtml(html))
    }, [html])

    return (
        <div
            className={`prose-p:mb-4 prose-p:last:mb-0 ${className}`}
            dangerouslySetInnerHTML={{ __html: sanitized }}
        />
    )
}
