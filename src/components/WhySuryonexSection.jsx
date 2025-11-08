import { Link } from 'react-router-dom'

export default function WhySuryonexSection() {
    return (
        <section className="relative bg-[#2D1B3D] py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-normal mb-6 text-white leading-tight" style={{ fontFamily: 'Space Grotesk' }}>
                            Why Suryonex is different?
                        </h2>
                        <p className="text-lg text-white/80 mb-8 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                            Suryonex understands that every client has unique needs. We specialize in customizing our AI-driven processing solutions to meet your challenges. Our hybrid outsourcing model leverages onshore project management and offshore production, ensuring you get the best human support and top value for your outsourcing dollar.
                        </p>
                        
                        {/* Bullet Points */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3 text-white">
                                <span className="text-[#BFFF0B] mt-1">•</span>
                                <span>Local US-based support</span>
                            </div>
                            <div className="flex items-start gap-3 text-white">
                                <span className="text-[#BFFF0B] mt-1">•</span>
                                <span>High-quality work</span>
                            </div>
                            <div className="flex items-start gap-3 text-white">
                                <span className="text-[#BFFF0B] mt-1">•</span>
                                <span>Cost-effective global teams</span>
                            </div>
                            <div className="flex items-start gap-3 text-white">
                                <span className="text-[#BFFF0B] mt-1">•</span>
                                <span>AI-driven processing</span>
                            </div>
                        </div>
                        
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2D1B3D] border-2 border-white text-white text-sm font-medium hover:bg-white hover:text-[#2D1B3D] transition-all"
                            style={{ fontFamily: 'Inter' }}
                        >
                            Book a Meeting
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#BFFF0B] text-[#0A0A0A] text-sm font-bold leading-none">
                                →
                            </span>
                        </Link>
                    </div>

                    {/* Right: Lime Green Dots/Lines Pattern */}
                    <div className="relative h-[400px] flex items-center justify-center">
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

