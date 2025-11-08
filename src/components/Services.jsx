export default function Services() {
    const services = [
        {
            title: 'AI Driven Processing',
            description: 'We use AI tools to improve your process efficiency and accuracy.',
            subServices: [
                'AI Data Extraction',
                'AI Assisted Data Processing',
                'AI & ML Optimization'
            ]
        },
        {
            title: 'Data Services',
            description: 'We deliver quick, affordable, and accurate data mining, entry, and tagging services.',
            subServices: [
                'Data Entry',
                'Data Mining',
                'Data Processing'
            ]
        },
        {
            title: 'Customer Experience',
            description: 'We free up your time by providing well-trained, full service, scalable, back office teams.',
            subServices: [
                'Back Office Support',
                'Service Desk & Chat Support',
                'Content Moderation'
            ]
        }
    ]

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-semibold mb-4" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                        Our dedicated team seamlessly integrates with your business so you can scale with confidence.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-[#F5F3FF] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.subServices.map((subService, subIndex) => (
                                    <li key={subIndex} className="flex items-start gap-2 text-gray-600 text-sm">
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
