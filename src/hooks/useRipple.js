import { useRef, useCallback } from 'react'

/**
 * Custom hook for ripple effect on button clicks
 * @returns {[React.RefObject, Function]} - Ref to attach to element and click handler
 */
export function useRipple() {
    const elementRef = useRef(null)

    const handleClick = useCallback((e) => {
        const element = elementRef.current
        if (!element) return

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) return

        const rect = element.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const ripple = document.createElement('span')
        const size = Math.max(rect.width, rect.height)
        const radius = size / 2

        ripple.style.width = ripple.style.height = `${size}px`
        ripple.style.left = `${x - radius}px`
        ripple.style.top = `${y - radius}px`
        ripple.style.position = 'absolute'
        ripple.style.borderRadius = '50%'
        ripple.style.background = 'rgba(255, 255, 255, 0.6)'
        ripple.style.transform = 'scale(0)'
        ripple.style.animation = 'ripple 0.6s ease-out'
        ripple.style.pointerEvents = 'none'
        ripple.style.zIndex = '0'

        element.style.position = 'relative'
        element.style.overflow = 'hidden'
        element.appendChild(ripple)

        setTimeout(() => {
            ripple.remove()
        }, 600)
    }, [])

    return [elementRef, handleClick]
}

