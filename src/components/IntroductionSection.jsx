import { Link } from 'react-router-dom'

export default function IntroductionSection() {
    return (
        <section className="relative bg-[#2D1B3D] py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Abstract S Shape Graphic */}
                    <div className="relative h-[500px] flex items-center justify-center">
                        <svg viewBox="0 0 400 500" className="w-full h-full">
                            {/* Abstract S shape with 3D pipe-like appearance */}
                            <path
                                d="M 100 50 Q 150 100 200 150 T 300 200 Q 250 250 200 300 T 100 400"
                                fill="none"
                                stroke="#FF6B35"
                                strokeWidth="8"
                                opacity="0.9"
                            />
                            <path
                                d="M 120 70 Q 170 120 220 170 T 320 220 Q 270 270 220 320 T 120 420"
                                fill="none"
                                stroke="#FF6B35"
                                strokeWidth="6"
                                opacity="0.7"
                            />
                            <path
                                d="M 80 30 Q 130 80 180 130 T 280 180 Q 230 230 180 280 T 80 380"
                                fill="none"
                                stroke="#FF6B35"
                                strokeWidth="6"
                                opacity="0.7"
                            />
                            {/* Additional depth lines */}
                            <line x1="100" y1="50" x2="120" y2="70" stroke="#FF6B35" strokeWidth="3" opacity="0.6" />
                            <line x1="200" y1="150" x2="220" y2="170" stroke="#FF6B35" strokeWidth="3" opacity="0.6" />
                            <line x1="300" y1="200" x2="320" y2="220" stroke="#FF6B35" strokeWidth="3" opacity="0.6" />
                            <line x1="200" y1="300" x2="220" y2="320" stroke="#FF6B35" strokeWidth="3" opacity="0.6" />
                            <line x1="100" y1="400" x2="120" y2="420" stroke="#FF6B35" strokeWidth="3" opacity="0.6" />
                        </svg>
                    </div>

                    {/* Right: Content */}
                    <div className="relative z-10">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BFFF0B] mb-6">
                            <span className="text-[#0A0A0A] text-sm font-semibold" style={{ fontFamily: 'Inter' }}>
                                What makes us your best choice?
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl font-normal mb-6 text-white leading-tight" style={{ fontFamily: 'Space Grotesk' }}>
                            Seamlessly Scale Your Team :-)
                        </h2>

                        {/* Main Text */}
                        <p className="text-lg text-white/80 mb-6 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                            Suryonex, a leader in data processing solutions since 2002, offers a complete suite of outsourcing solutions.
                        </p>
                        <p className="text-lg text-white/80 mb-8 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                            We are the first BPO that combines AI technology with fully integrated human support to help firms of all sizes work faster, smarter, and cheaper leveraging US-based project management and global production teams.
                        </p>
                        <p className="text-lg text-white/80 mb-10 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                            Our goal is to keep your costs low, quality high, and customers satisfied.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2D1B3D] border-2 border-white text-white text-sm font-medium hover:bg-white hover:text-[#2D1B3D] transition-all"
                                style={{ fontFamily: 'Inter' }}
                            >
                                Build your team now
                                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#BFFF0B] text-[#0A0A0A] text-sm font-bold leading-none">
                                    →
                                </span>
                            </Link>
                            <Link
                                to="/success-stories"
                                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#2D1B3D] text-sm font-medium hover:opacity-90 transition-opacity"
                                style={{ fontFamily: 'Inter' }}
                            >
                                Success Stories
                                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#BFFF0B] text-[#0A0A0A] text-sm font-bold leading-none">
                                    →
                                </span>
                            </Link>
                        </div>

                        {/* Team/Client Profile Images Strip */}
                        <div className="mt-12 flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div
                                        key={i}
                                        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A855F7] to-[#8B5CF6] border-2 border-white flex items-center justify-center text-white font-semibold text-sm"
                                        style={{ fontFamily: 'Inter' }}
                                    >
                                        {String.fromCharCode(64 + i)}
                                    </div>
                                ))}
                            </div>
                            <p className="text-white/60 text-sm" style={{ fontFamily: 'Inter' }}>
                                Trusted by leading companies worldwide
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

