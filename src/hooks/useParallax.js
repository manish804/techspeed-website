import { useState, useEffect } from 'react'

/**
 * Custom hook for parallax scrolling effects
 * @param {number} speed - Parallax speed multiplier (0.1-1.0 recommended)
 * @returns {number} - Offset value to apply as transform
 */
export function useParallax(speed = 0.3) {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) {
            return
        }

        const handleScroll = () => {
            setOffset(window.pageYOffset * speed)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [speed])

    return offset
}

