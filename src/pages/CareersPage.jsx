import { Link } from 'react-router-dom'
import { MoneyIcon, HealthIcon, VacationIcon, BookIcon, HomeIcon, TargetIcon, BuildingIcon, LocationIcon, ClockIcon } from '@/components/Icons'
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation'
import { useParallax } from '@/hooks/useParallax'

export default function CareersPage() {
    const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.12, triggerOnce: true })
    const { getItemRef: getBenefitRef, getItemStyle: getBenefitStyle } = useStaggeredAnimation(120)
    const { getItemRef: getPositionRef, getItemStyle: getPositionStyle } = useStaggeredAnimation(100)
    const parallaxOffset = useParallax(0.1)
    const positions = [
        { title: 'Customer Service Representative', department: 'Operations', location: 'Remote', type: 'Full-time' },
        { title: 'Data Entry Specialist', department: 'Data Services', location: 'Remote', type: 'Full-time' },
        { title: 'Technical Support Engineer', department: 'Technical', location: 'Hybrid', type: 'Full-time' },
        { title: 'Virtual Assistant', department: 'Operations', location: 'Remote', type: 'Part-time' },
        { title: 'Content Moderator', department: 'Content', location: 'Remote', type: 'Full-time' },
        { title: 'Team Lead - Customer Service', department: 'Operations', location: 'On-site', type: 'Full-time' }
    ]

    const benefits = [
        { Icon: MoneyIcon, title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
        { Icon: HealthIcon, title: 'Health Insurance', description: 'Comprehensive health coverage' },
        { Icon: VacationIcon, title: 'Paid Time Off', description: 'Generous vacation and sick leave' },
        { Icon: BookIcon, title: 'Learning & Development', description: 'Continuous training opportunities' },
        { Icon: HomeIcon, title: 'Remote Work', description: 'Flexible work arrangements' },
        { Icon: TargetIcon, title: 'Career Growth', description: 'Clear advancement paths' }
    ]

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#F5F3FF] to-white py-24 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full bg-[#A855F7]/10 blur-2xl" style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}></div>
                <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                    <div ref={heroRef} className={`max-w-3xl mx-auto text-center scroll-animate ${heroVisible ? 'visible' : ''}`}>
                        <h1 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                            Join Our Team
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Build your career with a global leader in outsourcing services. We're always looking for talented individuals to join our growing team.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                            Why Work With Us
                        </h2>
                        <p className="text-lg text-gray-600">
                            We offer more than just a job - we offer a career
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={benefit.title} ref={getBenefitRef(index)} style={getBenefitStyle(index)} className="bg-[#F5F3FF] rounded-2xl p-8 card-elevated card-hover-lift rounded-transition">
                                <div className="mb-4 text-[#A855F7]">
                                    <benefit.Icon className="w-16 h-16" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Space Grotesk' }}>
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-24 bg-[#F5F3FF]">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                            Open Positions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Find your next opportunity with Suryonex
                        </p>
                    </div>
                    <div className="space-y-4">
                        {positions.map((position, index) => (
                            <div key={position.title} ref={getPositionRef(index)} style={getPositionStyle(index)} className="bg-white rounded-xl p-6 card-elevated rounded-transition flex items-center justify-between">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Space Grotesk' }}>
                                        {position.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                        <span className="flex items-center gap-1">
                                            <BuildingIcon className="w-4 h-4 text-[#A855F7]" /> {position.department}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <LocationIcon className="w-4 h-4 text-[#A855F7]" /> {position.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <ClockIcon className="w-4 h-4 text-[#A855F7]" /> {position.type}
                                        </span>
                                    </div>
                                </div>
                                <Link
                                    to={`/contact?position=${encodeURIComponent(position.title)}`}
                                    className="magnetic-button btn-enhanced ripple-effect px-6 py-3 bg-[#2D1B3D] text-white rounded-lg font-semibold whitespace-nowrap hover:bg-[#3d2550] transition-colors"
                                >
                                    Apply Now →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
