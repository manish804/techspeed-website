export default function Hero() {
    return (
        <section className="relative min-h-screen bg-[#F5F3FF] pt-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start py-16">
                    {/* Left: Text Content */}
                    <div className="relative z-10 pt-8">
                        <h1 className="text-[5.5rem] lg:text-[6.5rem] font-normal mb-4 leading-[0.9]" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A', fontWeight: 400 }}>
                            All-in-One
                            <br />
                            Outsourcing
                        </h1>
                        <p className="text-base text-[#0A0A0A] mb-8 max-w-lg font-normal">
                            Human-powered, AI-enhanced outsourcing services
                        </p>
                        <button className="flex items-center gap-3 px-7 py-3.5 rounded-lg bg-[#2D1B3D] text-white text-sm font-medium hover:opacity-90 transition-opacity mb-12">
                            Get Free Estimate
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#BFFF0B] text-[#0A0A0A] text-base font-bold leading-none">
                                →
                            </span>
                        </button>
                        
                        {/* Features List */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-[#A855F7] text-xl mt-0.5">•</span>
                                <span className="text-base text-[#0A0A0A] font-normal" style={{ fontFamily: 'Inter' }}>
                                    Scalable Back Office Support Teams
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#A855F7] text-xl mt-0.5">•</span>
                                <span className="text-base text-[#0A0A0A] font-normal" style={{ fontFamily: 'Inter' }}>
                                    AI Powered Data Mining and Entry
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#A855F7] text-xl mt-0.5">•</span>
                                <span className="text-base text-[#0A0A0A] font-normal" style={{ fontFamily: 'Inter' }}>
                                    Top Ranked Outsourcing Provider
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: 3D Isometric Cylinders - Exact recreation */}
                    <div className="relative h-[650px] w-full">
                        {/* Top-right cylinder with filled end */}
                        <div className="absolute top-8 right-0 w-[280px] h-[200px]" style={{ transform: 'perspective(1000px) rotateX(8deg) rotateY(-12deg)' }}>
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
                        <div className="absolute top-[180px] left-[-20px] w-[260px] h-[190px]" style={{ transform: 'perspective(1000px) rotateX(8deg) rotateY(-12deg)' }}>
                            <svg viewBox="0 0 260 190" className="w-full h-full">
                                <ellipse cx="130" cy="45" rx="100" ry="26" fill="none" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <line x1="30" y1="45" x2="30" y2="145" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <line x1="230" y1="45" x2="230" y2="145" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <ellipse cx="130" cy="145" rx="100" ry="26" fill="none" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <ellipse cx="230" cy="95" rx="26" ry="50" fill="#A855F7" opacity="0.85" />
                            </svg>
                        </div>

                        {/* Bottom-right large cylinder with filled end */}
                        <div className="absolute bottom-[-20px] right-[40px] w-[300px] h-[210px]" style={{ transform: 'perspective(1000px) rotateX(8deg) rotateY(-12deg)' }}>
                            <svg viewBox="0 0 300 210" className="w-full h-full">
                                <ellipse cx="150" cy="50" rx="120" ry="30" fill="none" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <line x1="30" y1="50" x2="30" y2="160" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <line x1="270" y1="50" x2="270" y2="160" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <ellipse cx="150" cy="160" rx="120" ry="30" fill="none" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <ellipse cx="270" cy="105" rx="30" ry="55" fill="#A855F7" opacity="0.85" />
                            </svg>
                        </div>

                        {/* Center-bottom cylinder with filled end */}
                        <div className="absolute bottom-[80px] left-[120px] w-[240px] h-[180px]" style={{ transform: 'perspective(1000px) rotateX(8deg) rotateY(-12deg)' }}>
                            <svg viewBox="0 0 240 180" className="w-full h-full">
                                <ellipse cx="120" cy="45" rx="95" ry="24" fill="none" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <line x1="25" y1="45" x2="25" y2="135" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <line x1="215" y1="45" x2="215" y2="135" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <ellipse cx="120" cy="135" rx="95" ry="24" fill="none" stroke="#B794F6" strokeWidth="2.5" opacity="0.7" />
                                <ellipse cx="215" cy="90" rx="24" ry="45" fill="#A855F7" opacity="0.85" />
                            </svg>
                        </div>

                        {/* Small center cylinder outline only */}
                        <div className="absolute top-[240px] left-[180px] w-[200px] h-[150px]" style={{ transform: 'perspective(1000px) rotateX(8deg) rotateY(-12deg)' }}>
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
        </section>
    )
}
