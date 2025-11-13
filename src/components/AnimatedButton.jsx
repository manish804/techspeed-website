import { forwardRef } from 'react'
import { useMagneticHover } from '@/hooks/useMagneticHover'

/**
 * Animated Button Component with magnetic hover and ripple effects
 */
const AnimatedButton = forwardRef(({ 
    children, 
    className = '', 
    variant = 'primary', 
    magnetic = true,
    magneticStrength = 0.15,
    onClick,
    ...props 
}, ref) => {
    const magneticRef = useMagneticHover({ strength: magneticStrength, enabled: magnetic })
    const buttonRef = ref || magneticRef
    
    const handleClick = (e) => {
        // Ripple effect
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const button = e.currentTarget
            const ripple = document.createElement('span')
            const rect = button.getBoundingClientRect()
            const size = Math.max(rect.width, rect.height)
            const x = e.clientX - rect.left - size / 2
            const y = e.clientY - rect.top - size / 2
            
            ripple.style.width = ripple.style.height = `${size}px`
            ripple.style.left = `${x}px`
            ripple.style.top = `${y}px`
            ripple.style.position = 'absolute'
            ripple.style.borderRadius = '50%'
            ripple.style.background = 'rgba(255, 255, 255, 0.5)'
            ripple.style.transform = 'scale(0)'
            ripple.style.animation = 'ripple 0.6s ease-out'
            ripple.style.pointerEvents = 'none'
            ripple.style.zIndex = '0'
            
            button.appendChild(ripple)
            setTimeout(() => ripple.remove(), 600)
        }
        
        if (onClick) onClick(e)
    }
    
    const baseClasses = "magnetic-button btn-enhanced relative overflow-hidden group transition-all duration-300"
    const variantClasses = {
        primary: "bg-[#2D1B3D] text-white",
        secondary: "bg-[#BFFF0B] text-[#0A0A0A]",
        outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2D1B3D]",
        ghost: "bg-white text-[#2D1B3D] hover:bg-[#F5F3FF]"
    }
    
    return (
        <button
            ref={buttonRef}
            className={`${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`}
            onClick={handleClick}
            {...props}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    )
})

AnimatedButton.displayName = 'AnimatedButton'

export default AnimatedButton

