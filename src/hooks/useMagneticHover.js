import { useRef, useEffect } from 'react'

/**
 * Custom hook for magnetic hover effect on buttons
 * @param {Object} options - Configuration options
 * @param {number} options.strength - Strength of magnetic effect (default: 0.3)
 * @returns {[React.RefObject, Function]} - Ref to attach to element and cleanup function
 */
export function useMagneticHover({ strength = 0.3 } = {}) {
    const elementRef = useRef(null)

    useEffect(() => {
        const element = elementRef.current
        if (!element) return

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) {
            return
        }

        const handleMouseMove = (e) => {
            const rect = element.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2

            element.style.transform = `translate(${x * strength}px, ${y * strength}px)`
        }

        const handleMouseLeave = () => {
            element.style.transform = 'translate(0, 0)'
        }

        element.addEventListener('mousemove', handleMouseMove)
        element.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            element.removeEventListener('mousemove', handleMouseMove)
            element.removeEventListener('mouseleave', handleMouseLeave)
            element.style.transform = 'translate(0, 0)'
        }
    }, [strength])

    return elementRef
}

