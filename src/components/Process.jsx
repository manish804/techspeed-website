export default function Process() {
    const steps = [
        {
            number: '01',
            title: 'Consultation',
            description: 'We understand your business needs and requirements'
        },
        {
            number: '02',
            title: 'Team Building',
            description: 'We assemble the perfect team for your project'
        },
        {
            number: '03',
            title: 'Implementation',
            description: 'Seamless integration with your existing processes'
        },
        {
            number: '04',
            title: 'Optimization',
            description: 'Continuous improvement and scaling as needed'
        }
    ]

    return (
        <section className="py-24 bg-[#F5F3FF]">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-semibold mb-4" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                        How We Work
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our proven process ensures successful outcomes for every project
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="text-7xl font-bold text-[#A855F7] opacity-20 mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                                {step.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-[#A855F7] opacity-30"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
