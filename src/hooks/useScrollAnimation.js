import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook for scroll-triggered animations using Intersection Observer API
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Threshold for intersection (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {[React.RefObject, boolean]} - Ref to attach to element and visibility state
 */
export function useScrollAnimation(options = {}) {
    const {
        threshold = 0.1,
        rootMargin = '0px 0px -50px 0px',
        triggerOnce = true
    } = options

    const [isVisible, setIsVisible] = useState(false)
    const elementRef = useRef(null)

    useEffect(() => {
        const element = elementRef.current
        if (!element) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        if (triggerOnce) {
                            observer.unobserve(element)
                        }
                    } else if (!triggerOnce) {
                        setIsVisible(false)
                    }
                })
            },
            {
                threshold,
                rootMargin
            }
        )

        observer.observe(element)

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [threshold, rootMargin, triggerOnce])

    return [elementRef, isVisible]
}

/**
 * Advanced scroll animation hook with customizable animation types and delays
 * @param {Object} options - Configuration options
 * @param {string} options.animationType - Type of animation (fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn, bounceIn)
 * @param {number} options.delay - Delay in milliseconds before animation starts
 * @param {number} options.duration - Duration of animation in milliseconds
 * @param {number} options.threshold - Threshold for intersection (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {[React.RefObject, boolean, string]} - Ref, visibility state, and animation class
 */
export function useAdvancedScrollAnimation({
    animationType = 'fadeInUp',
    delay = 0,
    duration = 600,
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
} = {}) {
    const [elementRef, isVisible] = useScrollAnimation({ threshold, rootMargin, triggerOnce })
    const [animationClass, setAnimationClass] = useState('')

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setAnimationClass(`animate-${animationType}`)
            }, delay)

            return () => clearTimeout(timer)
        }
    }, [isVisible, animationType, delay])

    return [elementRef, isVisible, animationClass]
}

/**
 * Hook for staggered animations (useful for lists/grids)
 * @param {number} delay - Delay between each item in milliseconds
 * @param {Object} options - Configuration options
 * @returns {Function} - Function to get animation delay for each item
 */
export function useStaggeredAnimation(delay = 100, options = {}) {
    const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options
    const [visibleItems, setVisibleItems] = useState(new Set())
    const itemRefs = useRef(new Map())

    useEffect(() => {
        const observers = []
        const observerOptions = {
            threshold,
            rootMargin
        }

        itemRefs.current.forEach((ref, index) => {
            if (!ref) return

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setVisibleItems((prev) => new Set([...prev, index]))
                            observer.unobserve(entry.target)
                        }
                    })
                },
                observerOptions
            )

            observer.observe(ref)
            observers.push(observer)
        })

        return () => {
            observers.forEach((observer) => observer.disconnect())
        }
    }, [threshold, rootMargin])

    const getItemRef = (index) => (el) => {
        if (el) {
            itemRefs.current.set(index, el)
        }
    }

    const getItemStyle = (index) => {
        const isVisible = visibleItems.has(index)
        const animationDelay = isVisible ? `${index * delay}ms` : '0ms'
        return {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.6s ease-out ${animationDelay}, transform 0.6s ease-out ${animationDelay}`
        }
    }

    return { getItemRef, getItemStyle }
}

