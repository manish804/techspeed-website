import { Link } from 'react-router-dom'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useMagneticHover } from '@/hooks/useMagneticHover'

export default function CTA() {
    const [contentRef, isContentVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    const [graphicRef, isGraphicVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    const button1Ref = useMagneticHover({ strength: 0.15 })
    const button2Ref = useMagneticHover({ strength: 0.15 })

    return (
        <section className="relative py-24 bg-[#2D1B3D] overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 animated-gradient-purple opacity-30"></div>
            
            {/* Floating Shapes */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-[#FF6B35] opacity-5 rounded-full floating-shape blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#BFFF0B] opacity-5 rounded-full floating-shape blur-xl" style={{ animationDelay: '2s' }}></div>
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 grid-pattern opacity-20"></div>
            
            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div 
                        ref={contentRef}
                        className={`relative z-10 scroll-animate-left ${isContentVisible ? 'visible' : ''}`}
                    >
                        <h2 className="text-4xl lg:text-5xl font-normal mb-6 text-white leading-tight" style={{ fontFamily: 'Space Grotesk' }}>
                            Smart outsourcing using a perfect blend of people and technology.
                        </h2>
                        <p className="text-lg text-white/80 mb-10 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                            100% on-time delivery guaranteed. You need it quick, fast, yesterday. We understand. Tell us your data entry outsourcing objectives and we will build a data solution customized to your needs.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                ref={button1Ref}
                                to="/contact"
                                className="magnetic-button btn-enhanced ripple-effect inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#BFFF0B] text-[#0A0A0A] text-sm font-medium"
                                style={{ fontFamily: 'Inter' }}
                            >
                                Get Started
                                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#2D1B3D] text-[#BFFF0B] text-sm font-bold leading-none">
                                    →
                                </span>
                            </Link>
                            <a
                                ref={button2Ref}
                                href="tel:503-927-0027"
                                className="magnetic-button btn-enhanced ripple-effect inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#2D1B3D] text-sm font-medium"
                                style={{ fontFamily: 'Inter' }}
                            >
                                Give us a Call 503-927-0027
                                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#BFFF0B] text-[#0A0A0A] text-sm font-bold leading-none">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Abstract Semi-circular Pattern */}
                    <div 
                        ref={graphicRef}
                        className={`relative h-[400px] flex items-center justify-center scroll-animate-right ${isGraphicVisible ? 'visible' : ''}`}
                    >
                        <svg viewBox="0 0 400 400" className="w-full h-full">
                            {/* Concentric orange semi-circles */}
                            {[80, 100, 120, 140, 160, 180].map((radius, i) => (
                                <path
                                    key={i}
                                    d={`M ${200 - radius} 200 A ${radius} ${radius} 0 0 1 ${200 + radius} 200`}
                                    fill="none"
                                    stroke="#FF6B35"
                                    strokeWidth="3"
                                    opacity={0.8 - (i * 0.1)}
                                />
                            ))}
                            {/* Additional connecting lines */}
                            <line x1="50" y1="200" x2="350" y2="200" stroke="#FF6B35" strokeWidth="2" opacity="0.3" />
                            <line x1="200" y1="50" x2="200" y2="350" stroke="#FF6B35" strokeWidth="2" opacity="0.3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}
