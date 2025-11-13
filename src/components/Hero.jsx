import { useState, useEffect } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useParallax } from '@/hooks/useParallax'
import { useMagneticHover } from '@/hooks/useMagneticHover'

export default function Hero() {
    const [textRef, isTextVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
    const [buttonRef, isButtonVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
    const [featuresRef, isFeaturesVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
    const [graphicRef, isGraphicVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
    const [scrollHintRef, isScrollHintVisible] = useScrollAnimation({ threshold: 0.5, triggerOnce: false })
    
    // Typewriter effect state
    const [displayedText, setDisplayedText] = useState('')
    const [typewriterComplete, setTypewriterComplete] = useState(false)
    
    // Parallax for graphics
    const parallaxOffset = useParallax(0.15)
    
    // Typewriter effect
    useEffect(() => {
        if (!isTextVisible) return
        
        const line1 = 'All-in-One'
        const line2 = 'Outsourcing'
        let currentLine = 1
        let currentIndex = 0
        const typingSpeed = 80
        
        const typeInterval = setInterval(() => {
            if (currentLine === 1) {
                if (currentIndex < line1.length) {
                    setDisplayedText(line1.slice(0, currentIndex + 1))
                    currentIndex++
                } else {
                    setDisplayedText(line1 + '\n')
                    currentLine = 2
                    currentIndex = 0
                }
            } else if (currentLine === 2) {
                if (currentIndex < line2.length) {
                    setDisplayedText(line1 + '\n' + line2.slice(0, currentIndex + 1))
                    currentIndex++
                } else {
                    setDisplayedText(line1 + '\n' + line2)
                    clearInterval(typeInterval)
                    setTypewriterComplete(true)
                }
            }
        }, typingSpeed)
        
        return () => clearInterval(typeInterval)
    }, [isTextVisible])
    
    // Handle scroll to next section
    const scrollToNext = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }
    
    // Magnetic Button Component
    function MagneticButton() {
        const magneticRef = useMagneticHover({ strength: 0.2 })
        
        return (
            <button 
                ref={magneticRef}
                className="magnetic-button btn-enhanced flex items-center gap-3 px-7 py-3.5 rounded-lg bg-[#2D1B3D] text-white text-sm font-medium mb-12 relative overflow-hidden"
                onClick={(e) => {
                    // Simple ripple effect
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
                }}
            >
                <span className="relative z-10">Get Free Estimate</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#BFFF0B] text-[#0A0A0A] text-base font-bold leading-none relative z-10">
                    →
                </span>
            </button>
        )
    }

    return (
        <section className="relative min-h-screen bg-[#F5F3FF] pt-24 overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 animated-gradient opacity-50"></div>
            
            {/* Floating Geometric Shapes */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-[#A855F7] opacity-10 rounded-full floating-shape blur-xl"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-[#BFFF0B] opacity-10 rounded-full floating-shape blur-xl" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#A855F7] opacity-5 rounded-full floating-shape blur-2xl" style={{ animationDelay: '2s' }}></div>
            
            {/* Dot Pattern Overlay */}
            <div className="absolute inset-0 dot-pattern"></div>
            
            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start py-16">
                    {/* Left: Text Content */}
                    <div className="relative z-10 pt-8">
                        <div 
                            ref={textRef}
                            className={`scroll-animate ${isTextVisible ? 'visible' : ''}`}
                        >
                            <h1 
                                className="text-[5.5rem] lg:text-[6.5rem] font-normal mb-4 leading-[0.9] relative whitespace-pre-line" 
                                style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A', fontWeight: 400 }}
                            >
                                <span className="inline-block relative">
                                    {displayedText || '\u00A0'}
                                    {!typewriterComplete && (
                                        <span className="inline-block w-1 h-[1.2em] bg-[#A855F7] ml-1 animate-pulse align-bottom" style={{ verticalAlign: 'baseline' }}></span>
                                    )}
                                </span>
                            </h1>
                            <p 
                                className={`text-base text-[#0A0A0A] mb-8 max-w-lg font-normal transition-opacity duration-500 ${typewriterComplete ? 'opacity-100' : 'opacity-0'}`}
                                style={{ transitionDelay: typewriterComplete ? '0.3s' : '0s' }}
                            >
                                Human-powered, AI-enhanced outsourcing services
                            </p>
                        </div>
                        <div 
                            ref={buttonRef}
                            className={`scroll-animate ${isButtonVisible ? 'visible' : ''}`}
                            style={{ transitionDelay: '0.1s' }}
                        >
                            <MagneticButton />
                        </div>
                        
                        {/* Features List */}
                        <div 
                            ref={featuresRef}
                            className={`scroll-animate ${isFeaturesVisible ? 'visible' : ''} space-y-4`}
                            style={{ transitionDelay: '0.2s' }}
                        >
                            <div className="flex items-start gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                                <span className="text-[#A855F7] text-xl mt-0.5">•</span>
                                <span className="text-base text-[#0A0A0A] font-normal" style={{ fontFamily: 'Inter' }}>
                                    Scalable Back Office Support Teams
                                </span>
                            </div>
                            <div className="flex items-start gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                                <span className="text-[#A855F7] text-xl mt-0.5">•</span>
                                <span className="text-base text-[#0A0A0A] font-normal" style={{ fontFamily: 'Inter' }}>
                                    AI Powered Data Mining and Entry
                                </span>
                            </div>
                            <div className="flex items-start gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                                <span className="text-[#A855F7] text-xl mt-0.5">•</span>
                                <span className="text-base text-[#0A0A0A] font-normal" style={{ fontFamily: 'Inter' }}>
                                    Top Ranked Outsourcing Provider
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: 3D Isometric Cylinders - Enhanced with sequential reveal */}
                    <div 
                        ref={graphicRef}
                        className={`relative h-[650px] w-full scroll-animate-scale ${isGraphicVisible ? 'visible' : ''}`}
                        style={{ transform: `translateY(${parallaxOffset}px)` }}
                    >
                        {/* Top-right cylinder with filled end */}
                        <div 
                            className={`absolute top-8 right-0 w-[280px] h-[200px] animate-float transition-all duration-700 ${isGraphicVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                            style={{ 
                                transform: `perspective(1000px) rotateX(8deg) rotateY(-12deg) translateY(${parallaxOffset * 0.3}px)`,
                                animationDelay: '0s',
                                transitionDelay: '0.1s'
                            }}
                        >
                            <svg viewBox="0 0 280 200" className="w-full h-full">
                                {/* Main cylinder body */}
                                <ellipse cx="140" cy="50" rx="110" ry="28" fill="none" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <line x1="30" y1="50" x2="30" y2="150" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <line x1="250" y1="50" x2="250" y2="150" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <ellipse cx="140" cy="150" rx="110" ry="28" fill="none" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                {/* Filled circular end cap */}
                                <ellipse cx="250" cy="100" rx="28" ry="50" fill="#A855F7" opacity="0.85" />
                            </svg>
                        </div>

                        {/* Middle-left cylinder with filled end */}
                        <div 
                            className={`absolute top-[180px] left-[-20px] w-[260px] h-[190px] animate-float transition-all duration-700 ${isGraphicVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                            style={{ 
                                transform: `perspective(1000px) rotateX(8deg) rotateY(-12deg) translateY(${parallaxOffset * 0.4}px)`,
                                animationDelay: '1s',
                                transitionDelay: '0.3s'
                            }}
                        >
                            <svg viewBox="0 0 260 190" className="w-full h-full">
                                <ellipse cx="130" cy="45" rx="100" ry="26" fill="none" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <line x1="30" y1="45" x2="30" y2="145" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <line x1="230" y1="45" x2="230" y2="145" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <ellipse cx="130" cy="145" rx="100" ry="26" fill="none" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <ellipse cx="230" cy="95" rx="26" ry="50" fill="#A855F7" opacity="0.85" />
                            </svg>
                        </div>

                        {/* Bottom-right large cylinder with filled end */}
                        <div 
                            className={`absolute bottom-[-20px] right-[40px] w-[300px] h-[210px] animate-float transition-all duration-700 ${isGraphicVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                            style={{ 
                                transform: `perspective(1000px) rotateX(8deg) rotateY(-12deg) translateY(${parallaxOffset * 0.2}px)`,
                                animationDelay: '0.5s',
                                transitionDelay: '0.2s'
                            }}
                        >
                            <svg viewBox="0 0 300 210" className="w-full h-full">
                                <ellipse cx="150" cy="50" rx="120" ry="30" fill="none" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <line x1="30" y1="50" x2="30" y2="160" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <line x1="270" y1="50" x2="270" y2="160" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <ellipse cx="150" cy="160" rx="120" ry="30" fill="none" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <ellipse cx="270" cy="105" rx="30" ry="55" fill="#A855F7" opacity="0.85" />
                            </svg>
                        </div>

                        {/* Center-bottom cylinder with filled end */}
                        <div 
                            className={`absolute bottom-[80px] left-[120px] w-[240px] h-[180px] animate-float transition-all duration-700 ${isGraphicVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                            style={{ 
                                transform: `perspective(1000px) rotateX(8deg) rotateY(-12deg) translateY(${parallaxOffset * 0.35}px)`,
                                animationDelay: '1.5s',
                                transitionDelay: '0.4s'
                            }}
                        >
                            <svg viewBox="0 0 240 180" className="w-full h-full">
                                <ellipse cx="120" cy="45" rx="95" ry="24" fill="none" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <line x1="25" y1="45" x2="25" y2="135" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <line x1="215" y1="45" x2="215" y2="135" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <ellipse cx="120" cy="135" rx="95" ry="24" fill="none" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <ellipse cx="215" cy="90" rx="24" ry="45" fill="#A855F7" opacity="0.85" />
                            </svg>
                        </div>

                        {/* Small center cylinder outline only */}
                        <div 
                            className={`absolute top-[240px] left-[180px] w-[200px] h-[150px] animate-float transition-all duration-700 ${isGraphicVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                            style={{ 
                                transform: `perspective(1000px) rotateX(8deg) rotateY(-12deg) translateY(${parallaxOffset * 0.25}px)`,
                                animationDelay: '2s',
                                transitionDelay: '0.5s'
                            }}
                        >
                            <svg viewBox="0 0 200 150" className="w-full h-full">
                                <ellipse cx="100" cy="40" rx="80" ry="20" fill="none" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <line x1="20" y1="40" x2="20" y2="110" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <line x1="180" y1="40" x2="180" y2="110" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <ellipse cx="100" cy="110" rx="80" ry="20" fill="none" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Scroll Hint Animation */}
            <div 
                ref={scrollHintRef}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
                onClick={scrollToNext}
                style={{ 
                    opacity: isScrollHintVisible ? 1 : 0,
                    transition: 'opacity 0.5s ease-out'
                }}
            >
                <div className="flex flex-col items-center gap-2 animate-bounce-arrow">
                    <span className="text-sm text-[#0A0A0A]/60 font-medium" style={{ fontFamily: 'Inter' }}>
                        Scroll to explore
                    </span>
                    <svg 
                        className="w-6 h-6 text-[#A855F7]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    )
}
