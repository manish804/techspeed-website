import { Link } from 'react-router-dom'

export default function Testimonials() {
    return (
        <section className="relative py-24 bg-[#F5F3FF] overflow-hidden">
            {/* Decorative L-shaped elements */}
            <div className="absolute top-20 left-10 w-16 h-16 border-l-4 border-t-4 border-[#A855F7] opacity-30"></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 border-r-4 border-b-4 border-[#A855F7] opacity-30"></div>

            <div className="max-w-[1400px] mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-semibold mb-4" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                        From our Partners
                    </h2>
                </div>

                {/* Testimonial Card with Video Thumbnail */}
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Left: Testimonial Text */}
                            <div>
                                <p className="text-lg text-[#0A0A0A] mb-6 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                                    "I would not work with any other service provider. The best part of working with TechSpeed is they provide you with flexibility. My advice for anyone considering TechSpeed is pretty straightforward. Do it."
                                </p>
                                <div className="mb-4">
                                    <p className="font-semibold text-[#0A0A0A] text-lg" style={{ fontFamily: 'Space Grotesk' }}>
                                        Rajiv Chegu
                                    </p>
                                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                                        Strategy and New Business
                                    </p>
                                </div>
                            </div>

                            {/* Right: Video Thumbnail */}
                            <div className="relative">
                                <div className="relative w-full aspect-video rounded-lg bg-gradient-to-br from-[#A855F7] to-[#8B5CF6] overflow-hidden">
                                    {/* Placeholder for video thumbnail - purple background with play button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-full bg-[#BFFF0B] flex items-center justify-center shadow-lg">
                                            <svg className="w-8 h-8 text-[#0A0A0A] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    {/* Person silhouette/avatar representation */}
                                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#2D1B3D]/50 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* View All Testimonials Button */}
                    <div className="text-center mt-10">
                        <Link
                            to="/success-stories"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2D1B3D] text-white text-sm font-medium hover:opacity-90 transition-opacity"
                            style={{ fontFamily: 'Inter' }}
                        >
                            View all Testimonials
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#BFFF0B] text-[#0A0A0A] text-sm font-bold leading-none">
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
