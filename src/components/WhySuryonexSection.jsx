import { Link } from 'react-router-dom'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useMagneticHover } from '@/hooks/useMagneticHover'

export default function WhySuryonexSection() {
    const [contentRef, isContentVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    const [graphicRef, isGraphicVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    const buttonRef = useMagneticHover({ strength: 0.15 })

    return (
        <section className="relative bg-[#2D1B3D] py-24 overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 animated-gradient-purple opacity-20"></div>
            
            {/* Floating Shapes */}
            <div className="absolute top-10 left-10 w-36 h-36 bg-[#FF6B35] opacity-5 rounded-full floating-shape blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#BFFF0B] opacity-5 rounded-full floating-shape blur-xl" style={{ animationDelay: '2s' }}></div>
            
            {/* Dot Pattern Overlay */}
            <div className="absolute inset-0 dot-pattern opacity-10"></div>
            
            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div 
                        ref={contentRef}
                        className={`relative z-10 scroll-animate-left ${isContentVisible ? 'visible' : ''}`}
                    >
                        <h2 className="text-4xl lg:text-5xl font-normal mb-6 text-white leading-tight" style={{ fontFamily: 'Space Grotesk' }}>
                            Why Suryonex is different?
                        </h2>
                        <p className="text-lg text-white/80 mb-8 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                            Suryonex understands that every client has unique needs. We specialize in customizing our AI-driven processing solutions to meet your challenges. Our hybrid outsourcing model leverages onshore project management and offshore production, ensuring you get the best human support and top value for your outsourcing dollar.
                        </p>
                        
                        {/* Bullet Points */}
                        <div className="space-y-4 mb-8">
                            <div 
                                className="flex items-start gap-3 text-white opacity-0 animate-fade-in-up" 
                                style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
                            >
                                <span className="text-[#BFFF0B] mt-1">•</span>
                                <span>Local US-based support</span>
                            </div>
                            <div 
                                className="flex items-start gap-3 text-white opacity-0 animate-fade-in-up" 
                                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
                            >
                                <span className="text-[#BFFF0B] mt-1">•</span>
                                <span>High-quality work</span>
                            </div>
                            <div 
                                className="flex items-start gap-3 text-white opacity-0 animate-fade-in-up" 
                                style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
                            >
                                <span className="text-[#BFFF0B] mt-1">•</span>
                                <span>Cost-effective global teams</span>
                            </div>
                            <div 
                                className="flex items-start gap-3 text-white opacity-0 animate-fade-in-up" 
                                style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
                            >
                                <span className="text-[#BFFF0B] mt-1">•</span>
                                <span>AI-driven processing</span>
                            </div>
                        </div>
                        
                            <Link
                                ref={buttonRef}
                                to="/contact"
                                className="magnetic-button btn-enhanced ripple-effect inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2D1B3D] border-2 border-white text-white text-sm font-medium hover:bg-white hover:text-[#2D1B3D]"
                                style={{ fontFamily: 'Inter' }}
                            >
                                Book a Meeting
                                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#BFFF0B] text-[#0A0A0A] text-sm font-bold leading-none">
                                    →
                                </span>
                            </Link>
                    </div>

                    {/* Right: Lime Green Dots/Lines Pattern */}
                    <div 
                        ref={graphicRef}
                        className={`relative h-[400px] flex items-center justify-center scroll-animate-right ${isGraphicVisible ? 'visible' : ''}`}
                    >
                        <svg viewBox="0 0 400 400" className="w-full h-full">
                            {/* Vertical lines with dots */}
                            {[60, 120, 180, 240, 300, 340].map((x, i) => (
                                <g key={i}>
                                    <line
                                        x1={x}
                                        y1={60}
                                        x2={x}
                                        y2={340}
                                        stroke="#BFFF0B"
                                        strokeWidth="2"
                                        opacity="0.6"
                                    />
                                    {[100, 170, 240, 310].map((y, j) => (
                                        <circle
                                            key={j}
                                            cx={x}
                                            cy={y}
                                            r="4"
                                            fill="#BFFF0B"
                                            opacity="0.8"
                                        />
                                    ))}
                                </g>
                            ))}
                            {/* Horizontal connecting lines */}
                            {[100, 170, 240, 310].map((y, i) => (
                                <line
                                    key={i}
                                    x1={60}
                                    y1={y}
                                    x2={340}
                                    y2={y}
                                    stroke="#BFFF0B"
                                    strokeWidth="1.5"
                                    opacity="0.4"
                                    strokeDasharray="4 4"
                                />
                            ))}
                            {/* Additional curved patterns */}
                            <path
                                d="M 80 120 Q 200 100 320 120"
                                fill="none"
                                stroke="#BFFF0B"
                                strokeWidth="3"
                                opacity="0.5"
                            />
                            <path
                                d="M 80 280 Q 200 300 320 280"
                                fill="none"
                                stroke="#BFFF0B"
                                strokeWidth="3"
                                opacity="0.5"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

