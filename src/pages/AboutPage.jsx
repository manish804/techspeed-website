import { Link } from 'react-router-dom'
import { AccuracyIcon, SecurityIcon, AgilityIcon, BusinessPersonIcon, DeveloperIcon, RocketIcon } from '@/components/Icons'
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation'
import { useParallax } from '@/hooks/useParallax'
import { useRipple } from '@/hooks/useRipple'

export default function AboutPage() {
    const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.12, triggerOnce: true })
    const [storyRef, storyVisible] = useScrollAnimation({ threshold: 0.12, triggerOnce: true })
    const [valuesRef, valuesVisible] = useScrollAnimation({ threshold: 0.12, triggerOnce: true })
    const [timelineRef, timelineVisible] = useScrollAnimation({ threshold: 0.12, triggerOnce: true })
    const [teamRef, teamVisible] = useScrollAnimation({ threshold: 0.12, triggerOnce: true })
    const [faqRef, faqVisible] = useScrollAnimation({ threshold: 0.12, triggerOnce: true })
    const [ctaRef, ctaVisible] = useScrollAnimation({ threshold: 0.12, triggerOnce: true })

    const { getItemRef: getValueItemRef, getItemStyle: getValueItemStyle } = useStaggeredAnimation(120)
    const { getItemRef: getMilestoneItemRef, getItemStyle: getMilestoneItemStyle } = useStaggeredAnimation(100)
    const { getItemRef: getTeamItemRef, getItemStyle: getTeamItemStyle } = useStaggeredAnimation(120)
    const parallaxOffset = useParallax(0.1)
    const team = [
        { name: 'Sarah Johnson', role: 'CEO & Founder', Icon: BusinessPersonIcon, bio: '15+ years in outsourcing industry' },
        { name: 'Michael Chen', role: 'CTO', Icon: DeveloperIcon, bio: 'AI & Technology Expert' },
        { name: 'Emily Rodriguez', role: 'COO', Icon: BusinessPersonIcon, bio: 'Operations & Strategy Leader' },
        { name: 'David Kim', role: 'Head of Sales', Icon: BusinessPersonIcon, bio: 'Business Development Pro' }
    ]

    const values = [
        { Icon: AccuracyIcon, title: 'Accuracy', description: 'Our process ensures near-perfect data accuracy through double-key data entry, quality checks, validation routines, and verification checks.' },
        { Icon: SecurityIcon, title: 'Security', description: 'At Suryonex, we take our role as temporary stewards of your data seriously. Our security systems include VPNs, SSLs, and PGP encryption.' },
        { Icon: AgilityIcon, title: 'Agility', description: 'We guarantee 100% on-time delivery for your urgent data entry needs. Simply share your outsourcing objectives and we\'ll build a customized solution.' }
    ]

    const milestones = [
        { year: '2002', event: 'Suryonex Founded', description: 'Started as a minority women-owned technology business' },
        { year: '2005', event: 'First Major Client', description: 'Established long-term partnerships with leading companies' },
        { year: '2010', event: 'Global Expansion', description: 'Opened operations in India to serve global clients' },
        { year: '2015', event: 'AI Integration', description: 'Launched AI-powered data processing solutions' },
        { year: '2020', event: '20+ Years Milestone', description: 'Celebrated two decades of excellence in outsourcing' },
        { year: '2024', event: 'Industry Leader', description: 'Recognized as top-ranked outsourcing provider' }
    ]

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#F5F3FF] to-white py-24 relative overflow-hidden">
                {/* Parallax background accents */}
                <div className="absolute -left-20 top-10 w-48 h-48 rounded-full bg-[#A855F7]/10 blur-2xl" style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}></div>
                <div className="absolute -right-24 -bottom-16 w-64 h-64 rounded-full bg-[#BFFF0B]/10 blur-3xl" style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }}></div>
                <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                    <div ref={heroRef} className={`max-w-3xl scroll-animate ${heroVisible ? 'visible' : ''}`}>
                        <h1 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                            About Suryonex
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            A minority women-owned and operated technology business since 2002.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div ref={storyRef} className={`scroll-animate ${storyVisible ? 'visible' : ''}`}>
                            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>
                                Our Story
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Suryonex, a leader in data processing solutions since 2002, offers a complete suite of outsourcing solutions.
                                </p>
                                <p>
                                    We are the first BPO that combines AI technology with fully integrated human support to help firms of all sizes work faster, smarter, and cheaper leveraging US-based project management and global production teams.
                                </p>
                                <p>
                                    Our goal is to keep your costs low, quality high, and customers satisfied.
                                </p>
                                <p>
                                    In Suryonex's 20+ year history, we have never lost a document, mismanaged an electronic data file, or had a breach of confidentiality.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#F5F3FF] rounded-2xl p-12 flex items-center justify-center h-96 card-elevated rounded-transition scroll-animate-right" style={{ opacity: storyVisible ? 1 : 0, transform: storyVisible ? 'translateX(0)' : 'translateX(30px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
                            <div className="text-center">
                                <div className="mb-4 text-[#A855F7] flex justify-center">
                                    <RocketIcon className="w-24 h-24" />
                                </div>
                                <p className="text-2xl font-semibold" style={{ fontFamily: 'Space Grotesk' }}>
                                    20+ Years of Excellence
                                </p>
                                <p className="text-lg text-gray-600 mt-2">
                                    Since 2002
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-[#F5F3FF]">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div ref={valuesRef} className={`text-center mb-16 scroll-animate ${valuesVisible ? 'visible' : ''}`}>
                        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                            Our Core Values
                        </h2>
                        <p className="text-lg text-gray-600">
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                ref={getValueItemRef(index)}
                                style={getValueItemStyle(index)}
                                className="bg-white rounded-2xl p-8 text-center card-elevated card-hover-lift rounded-transition"
                            >
                                <div className="flex justify-center mb-4 text-[#A855F7]">
                                    <value.Icon className="w-16 h-16" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Space Grotesk' }}>
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div ref={timelineRef} className={`text-center mb-16 scroll-animate ${timelineVisible ? 'visible' : ''}`}>
                        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                            Our Journey
                        </h2>
                        <p className="text-lg text-gray-600">
                            Key milestones in our growth story
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#A855F7] opacity-20"></div>
                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div key={milestone.year} ref={getMilestoneItemRef(index)} style={getMilestoneItemStyle(index)} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                        <div className="inline-block bg-white p-6 rounded-xl shadow-md card-elevated rounded-transition">
                                            <div className="text-3xl font-bold text-[#A855F7] mb-2" style={{ fontFamily: 'Space Grotesk' }}>
                                                {milestone.year}
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Space Grotesk' }}>
                                                {milestone.event}
                                            </h3>
                                            <p className="text-gray-600">{milestone.description}</p>
                                        </div>
                                    </div>
                                    <div className="w-4 h-4 rounded-full bg-[#A855F7] relative z-10"></div>
                                    <div className="flex-1"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-[#F5F3FF]">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div ref={teamRef} className={`text-center mb-16 scroll-animate ${teamVisible ? 'visible' : ''}`}>
                        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                            Meet Our Leadership
                        </h2>
                        <p className="text-lg text-gray-600">
                            The team driving Suryonex forward
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={member.name} ref={getTeamItemRef(index)} style={getTeamItemStyle(index)} className="bg-white rounded-2xl p-8 text-center card-elevated card-hover-lift rounded-transition">
                                <div className="mb-4 text-[#A855F7] flex justify-center">
                                    <member.Icon className="w-16 h-16" />
                                </div>
                                <h3 className="text-xl font-semibold mb-1" style={{ fontFamily: 'Space Grotesk' }}>
                                    {member.name}
                                </h3>
                                <p className="text-[#A855F7] font-medium mb-2">{member.role}</p>
                                <p className="text-sm text-gray-600">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div ref={faqRef} className={`max-w-3xl mx-auto scroll-animate ${faqVisible ? 'visible' : ''}`}>
                        <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Space Grotesk' }}>
                            FAQs
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: 'What services does Suryonex offer?',
                                    a: 'Suryonex offers AI-driven processing, data services, and customer experience solutions including data entry, data mining, back office support, service desk, and content moderation.'
                                },
                                {
                                    q: 'How long has Suryonex been in business?',
                                    a: 'Suryonex has been a leader in data processing solutions since 2002, with over 20 years of experience in the outsourcing industry.'
                                },
                                {
                                    q: 'What makes Suryonex different?',
                                    a: 'We are the first BPO that combines AI technology with fully integrated human support. We leverage US-based project management and global production teams to provide the best value.'
                                },
                                {
                                    q: 'How do you ensure data security?',
                                    a: 'In Suryonex\'s 20+ year history, we have never lost a document, mismanaged an electronic data file, or had a breach of confidentiality. Our security systems include VPNs, SSLs, PGP encryption, and password-protected data access.'
                                },
                                {
                                    q: 'What is your accuracy rate?',
                                    a: 'We maintain 99.95% - 100% accuracy through our double-key data entry, quality checks, validation routines, and verification checks.'
                                },
                                {
                                    q: 'How quickly can you scale a team?',
                                    a: 'We can grow your team from 1 to 50 in just 48 hours, providing scalable solutions that integrate seamlessly with your business.'
                                }
                            ].map((faq, index) => (
                                <details key={index} className="bg-[#F5F3FF] rounded-lg p-6 cursor-pointer group">
                                    <summary className="font-semibold text-lg flex justify-between items-center" style={{ fontFamily: 'Space Grotesk' }}>
                                        {faq.q}
                                        <span className="text-[#A855F7] group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                                        {faq.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#2D1B3D] text-white">
                <div ref={ctaRef} className={`max-w-[1400px] mx-auto px-8 text-center scroll-animate ${ctaVisible ? 'visible' : ''}`}>
                    <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>
                        Join Our Team
                    </h2>
                    <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                        We're always looking for talented individuals to join our growing team
                    </p>
                    <CTAAboutButton />
                </div>
            </section>
        </div>
    )
}

function CTAAboutButton() {
    const [ref, handleClick] = useRipple()
    return (
        <Link
            ref={ref}
            to="/careers"
            onClick={handleClick}
            className="magnetic-button btn-enhanced ripple-effect inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#BFFF0B] text-[#0A0A0A] font-semibold"
        >
            View Open Positions
            <span>→</span>
        </Link>
    )
}
