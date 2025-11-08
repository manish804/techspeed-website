import { Link } from 'react-router-dom'

export default function BuildTeamSection() {
    return (
        <section className="relative bg-[#2D1B3D] py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-normal mb-6 text-white leading-tight" style={{ fontFamily: 'Space Grotesk' }}>
                            Build your team with experienced experts.
                        </h2>
                        <p className="text-lg text-white/80 mb-8 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                            Outsource your non-core activities to us, so you can stay focused on growing your business. Our dedicated team members seamlessly integrate with your business so you can scale with confidence. Let us build out a project plan for you today.
                        </p>
                        
                        {/* Bullet Points */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3 text-white">
                                <span className="text-[#BFFF0B] mt-1">•</span>
                                <div>
                                    <span className="font-semibold">Credentialed: </span>
                                    <span>85% of your staff will have a masters and 100% of them a high school degree as a minimum.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-white">
                                <span className="text-[#BFFF0B] mt-1">•</span>
                                <div>
                                    <span className="font-semibold">Grow your team from 1 to 50 in just 48 hours.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-white">
                                <span className="text-[#BFFF0B] mt-1">•</span>
                                <div>
                                    <span className="font-semibold">Dedicated: </span>
                                    <span>We have some of the lowest attrition rates in the business. The average tenure of our technicians is 8 years.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-white">
                                <span className="text-[#BFFF0B] mt-1">•</span>
                                <div>
                                    <span className="font-semibold">Scalable team: </span>
                                    <span>Grow your team from 1 to 50 in just 48 hours.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Lime Green Dots/Lines Circuit Board Pattern */}
                    <div className="relative h-[400px] flex items-center justify-center">
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

