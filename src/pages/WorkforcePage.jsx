import { Link } from 'react-router-dom'
import { GraduationIcon, TrendingIcon, UsersIcon, StarIcon } from '@/components/Icons'
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation'
import { useParallax } from '@/hooks/useParallax'
import { useRipple } from '@/hooks/useRipple'

export default function WorkforcePage() {
    const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.12, triggerOnce: true })
    const { getItemRef, getItemStyle } = useStaggeredAnimation(120)
    const parallaxOffset = useParallax(0.12)
    const [ctaHeroRef, ctaHeroClick] = useRipple()
    const [ctaMidRef, ctaMidClick] = useRipple()
    const [ctaBottomRef, ctaBottomClick] = useRipple()
    const features = [
        {
            title: 'Credentialed',
            description: '85% of your staff will have a masters and 100% of them a high school degree as a minimum.',
            Icon: GraduationIcon
        },
        {
            title: 'Scalable',
            description: 'Grow your team from 1 to 50 in just 48 hours.',
            Icon: TrendingIcon
        },
        {
            title: 'Dedicated',
            description: 'We have some of the lowest attrition rates in the business. The average tenure of our technicians is 8 years.',
            Icon: UsersIcon
        },
        {
            title: 'Expert Professionals',
            description: 'Our team members seamlessly integrate with your business so you can scale with confidence.',
            Icon: StarIcon
        }
    ]

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#F5F3FF] to-white py-24 relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#A855F7]/10 blur-2xl" style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}></div>
                <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                    <div ref={heroRef} className={`max-w-3xl scroll-animate ${heroVisible ? 'visible' : ''}`}>
                        <h1 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                            Build Your Team
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Build your team with experienced experts. Outsource your non-core activities to us, so you can stay focused on growing your business.
                        </p>
                        <Link
                            ref={ctaHeroRef}
                            onClick={ctaHeroClick}
                            to="/contact"
                            className="magnetic-button btn-enhanced ripple-effect inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#2D1B3D] text-white font-medium"
                        >
                            Get Started
                            <span className="text-lg">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                ref={getItemRef(index)}
                                style={getItemStyle(index)}
                                className="bg-[#F5F3FF] rounded-2xl p-8 card-elevated card-hover-lift rounded-transition"
                            >
                                <div className="mb-4 text-[#A855F7]">
                                    <feature.Icon className="w-16 h-16" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Space Grotesk' }}>
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-24 bg-[#2D1B3D] text-white">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-normal mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk' }}>
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
                            
                            <Link
                                ref={ctaMidRef}
                                onClick={ctaMidClick}
                                to="/contact"
                                className="magnetic-button btn-enhanced ripple-effect inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2D1B3D] border-2 border-white text-white text-sm font-medium"
                                style={{ fontFamily: 'Inter' }}
                            >
                                Build your team now
                                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#BFFF0B] text-[#0A0A0A] text-sm font-bold leading-none">
                                    →
                                </span>
                            </Link>
                        </div>
                        
                        {/* Right: Graphic */}
                        <div className="relative h-[400px] flex items-center justify-center">
                            <svg viewBox="0 0 400 400" className="w-full h-full">
                                {/* Circuit board pattern */}
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
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-8 text-center">
                    <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>
                        Ready to Build Your Team?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Let us build out a project plan for you today
                    </p>
                    <Link
                        ref={ctaBottomRef}
                        onClick={ctaBottomClick}
                        to="/contact"
                        className="magnetic-button btn-enhanced ripple-effect inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#2D1B3D] text-white font-semibold"
                    >
                        Get Started
                        <span>→</span>
                    </Link>
                </div>
            </section>
        </div>
    )
}

