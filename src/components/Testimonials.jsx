import { Link } from 'react-router-dom'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useMagneticHover } from '@/hooks/useMagneticHover'

export default function Testimonials() {
    const [headingRef, isHeadingVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    const [cardRef, isCardVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    const buttonRef = useMagneticHover({ strength: 0.15 })

    return (
        <section className="relative py-24 bg-[#F5F3FF] overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 animated-gradient opacity-25"></div>
            
            {/* Decorative L-shaped elements */}
            <div className="absolute top-20 left-10 w-16 h-16 border-l-4 border-t-4 border-[#A855F7] opacity-30 animate-pulse-slow floating-shape"></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 border-r-4 border-b-4 border-[#A855F7] opacity-30 animate-pulse-slow floating-shape" style={{ animationDelay: '1s' }}></div>
            
            {/* Floating Shapes */}
            <div className="absolute top-40 right-20 w-24 h-24 bg-[#BFFF0B] opacity-10 rounded-full floating-shape blur-xl" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-40 left-20 w-32 h-32 bg-[#A855F7] opacity-5 rounded-full floating-shape blur-2xl" style={{ animationDelay: '3s' }}></div>

            <div className="max-w-[1400px] mx-auto px-8">
                <div 
                    ref={headingRef}
                    className={`text-center mb-16 scroll-animate ${isHeadingVisible ? 'visible' : ''}`}
                >
                    <h2 className="text-5xl font-semibold mb-4" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                        From our Partners
                    </h2>
                </div>

                {/* Testimonial Card with Video Thumbnail */}
                <div className="max-w-5xl mx-auto">
                    <div 
                        ref={cardRef}
                        className={`bg-white rounded-2xl p-8 lg:p-12 shadow-lg card-hover-lift card-elevated rounded-transition scroll-animate-scale ${isCardVisible ? 'visible' : ''}`}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Left: Testimonial Text */}
                            <div>
                                <p 
                                    className={`text-lg text-[#0A0A0A] mb-6 leading-relaxed transition-opacity duration-700 ${isCardVisible ? 'opacity-100' : 'opacity-0'}`}
                                    style={{ 
                                        fontFamily: 'Inter',
                                        transform: isCardVisible ? 'translateY(0)' : 'translateY(20px)',
                                        transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s'
                                    }}
                                >
                                    "I would not work with any other service provider. The best part of working with Suryonex is they provide you with flexibility. My advice for anyone considering Suryonex is pretty straightforward. Do it."
                                </p>
                                <div 
                                    className="mb-4 transition-opacity duration-700"
                                    style={{
                                        opacity: isCardVisible ? 1 : 0,
                                        transform: isCardVisible ? 'translateY(0)' : 'translateY(20px)',
                                        transition: 'opacity 0.7s ease-out 0.4s, transform 0.7s ease-out 0.4s'
                                    }}
                                >
                                    <p className="font-semibold text-[#0A0A0A] text-lg" style={{ fontFamily: 'Space Grotesk' }}>
                                        Rajiv Chegu
                                    </p>
                                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                                        Strategy and New Business
                                    </p>
                                </div>
                            </div>

                            {/* Right: Video Thumbnail */}
                            <div 
                                className="relative group transition-opacity duration-700"
                                style={{
                                    opacity: isCardVisible ? 1 : 0,
                                    transform: isCardVisible ? 'translateX(0) scale(1)' : 'translateX(30px) scale(0.95)',
                                    transition: 'opacity 0.7s ease-out 0.3s, transform 0.7s ease-out 0.3s'
                                }}
                            >
                                <div className="relative w-full aspect-video rounded-lg bg-gradient-to-br from-[#A855F7] to-[#8B5CF6] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                    {/* Placeholder for video thumbnail - purple background with play button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-full bg-[#BFFF0B] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
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
                            ref={buttonRef}
                            to="/success-stories"
                            className="magnetic-button btn-enhanced ripple-effect inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2D1B3D] text-white text-sm font-medium"
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
