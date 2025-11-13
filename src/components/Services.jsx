import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Services() {
    const [headingRef, isHeadingVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    const [service1Ref, isService1Visible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    const [service2Ref, isService2Visible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    const [service3Ref, isService3Visible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

    const services = [
        {
            title: 'AI Driven Processing',
            description: 'We use AI tools to improve your process efficiency and accuracy.',
            subServices: [
                'AI Data Extraction',
                'AI Assisted Data Processing',
                'AI & ML Optimization'
            ],
            ref: service1Ref,
            isVisible: isService1Visible
        },
        {
            title: 'Data Services',
            description: 'We deliver quick, affordable, and accurate data mining, entry, and tagging services.',
            subServices: [
                'Data Entry',
                'Data Mining',
                'Data Processing'
            ],
            ref: service2Ref,
            isVisible: isService2Visible
        },
        {
            title: 'Customer Experience',
            description: 'We free up your time by providing well-trained, full service, scalable, back office teams.',
            subServices: [
                'Back Office Support',
                'Service Desk & Chat Support',
                'Content Moderation'
            ],
            ref: service3Ref,
            isVisible: isService3Visible
        }
    ]

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 dot-pattern opacity-3"></div>
            
            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                <div 
                    ref={headingRef}
                    className={`text-center mb-16 scroll-animate ${isHeadingVisible ? 'visible' : ''}`}
                >
                    <h2 className="text-5xl font-semibold mb-4" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                        Our dedicated team seamlessly integrates with your business so you can scale with confidence.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={service.ref}
                            className={`p-8 rounded-2xl bg-[#F5F3FF] card-hover-lift card-elevated rounded-transition scroll-animate ${service.isVisible ? 'visible' : ''}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.subServices.map((subService, subIndex) => (
                                    <li 
                                        key={subIndex} 
                                        className="flex items-start gap-2 text-gray-600 text-sm opacity-0 animate-fade-in-up"
                                        style={{ 
                                            animationDelay: service.isVisible ? `${0.3 + (subIndex * 0.1)}s` : '0s',
                                            animationFillMode: 'forwards'
                                        }}
                                    >
                                        <span className="text-[#BFFF0B] mt-1">•</span>
                                        <span>{subService}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
