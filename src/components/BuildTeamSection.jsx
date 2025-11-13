import { Link } from 'react-router-dom'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useMagneticHover } from '@/hooks/useMagneticHover'

export default function BuildTeamSection() {
    const [contentRef, isContentVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    const [graphicRef, isGraphicVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    const buttonRef = useMagneticHover({ strength: 0.15 })

    return (
        <section className="relative bg-[#2D1B3D] py-24 overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 animated-gradient-purple opacity-20"></div>
            
            {/* Floating Shapes */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-[#BFFF0B] opacity-5 rounded-full floating-shape blur-xl"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#A855F7] opacity-5 rounded-full floating-shape blur-2xl" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 grid-pattern opacity-15"></div>
            
            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div 
                        ref={contentRef}
                        className={`relative z-10 scroll-animate-left ${isContentVisible ? 'visible' : ''}`}
                    >
                        <h2 className="text-4xl lg:text-5xl font-normal mb-6 text-white leading-tight" style={{ fontFamily: 'Space Grotesk' }}>
                            Build your team with experienced experts.
                        </h2>
                        <p className="text-lg text-white/80 mb-8 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                            Outsource your non-core activities to us, so you can stay focused on growing your business. Our dedicated team members seamlessly integrate with your business so you can scale with confidence. Let us build out a project plan for you today.
                        </p>
                        
                        {/* Bullet Points */}
                        <div className="space-y-4 mb-8">
                            <div 
                                className="flex items-start gap-3 text-white opacity-0 animate-fade-in-up" 
                                style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
                            >
                                <span className="text-[#BFFF0B] mt-1">•</span>
                                <div>
                                    <span className="font-semibold">Credentialed: </span>
                                    <span>85% of your staff will have a masters and 100% of them a high school degree as a minimum.</span>
                                </div>
                            </div>
                            <div 
                                className="flex items-start gap-3 text-white opacity-0 animate-fade-in-up" 
                                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
                            >
                                <span className="text-[#BFFF0B] mt-1">•</span>
                                <div>
                                    <span className="font-semibold">Grow your team from 1 to 50 in just 48 hours.</span>
                                </div>
                            </div>
                            <div 
                                className="flex items-start gap-3 text-white opacity-0 animate-fade-in-up" 
                                style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
                            >
                                <span className="text-[#BFFF0B] mt-1">•</span>
                                <div>
                                    <span className="font-semibold">Dedicated: </span>
                                    <span>We have some of the lowest attrition rates in the business. The average tenure of our technicians is 8 years.</span>
                                </div>
                            </div>
                            <div 
                                className="flex items-start gap-3 text-white opacity-0 animate-fade-in-up" 
                                style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
                            >
                                <span className="text-[#BFFF0B] mt-1">•</span>
                                <div>
                                    <span className="font-semibold">Scalable team: </span>
                                    <span>Grow your team from 1 to 50 in just 48 hours.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Lime Green Dots/Lines Circuit Board Pattern */}
                    <div 
                        ref={graphicRef}
                        className={`relative h-[400px] flex items-center justify-center scroll-animate-right ${isGraphicVisible ? 'visible' : ''}`}
                    >
                        <svg viewBox="0 0 400 400" className="w-full h-full">
                            {/* Vertical lines with dots */}
                            {[50, 100, 150, 200, 250, 300, 350].map((x, i) => (
                                <g key={i}>
                                    <line
                                        x1={x}
                                        y1={50}
                                        x2={x}
                                        y2={350}
                                        stroke="#BFFF0B"
                                        strokeWidth="2"
                                        opacity="0.6"
                                    />
                                    {[80, 150, 220, 290].map((y, j) => (
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
                            {[80, 150, 220, 290].map((y, i) => (
                                <line
                                    key={i}
                                    x1={50}
                                    y1={y}
                                    x2={350}
                                    y2={y}
                                    stroke="#BFFF0B"
                                    strokeWidth="1.5"
                                    opacity="0.4"
                                    strokeDasharray="4 4"
                                />
                            ))}
                            {/* Additional organic growth pattern */}
                            <path
                                d="M 100 100 Q 150 120 200 100 T 300 100"
                                fill="none"
                                stroke="#BFFF0B"
                                strokeWidth="3"
                                opacity="0.5"
                            />
                            <path
                                d="M 120 250 Q 170 270 220 250 T 320 250"
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

