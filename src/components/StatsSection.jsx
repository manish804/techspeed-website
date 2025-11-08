export default function StatsSection() {
    const stats = [
        {
            value: '99.95%',
            subValue: '- 100%',
            label: 'Increased data quality with 99.95% - 100% accuracy.',
            color: '#FF6B35'
        },
        {
            value: '80%',
            label: 'Savings - Up to 80% in cost savings as compared to in-house service.',
            color: '#FF6B35'
        },
        {
            value: '24/7',
            label: 'Operations - Fast turnaround with a 24/7, 3-shift operation.',
            color: '#FF6B35'
        }
    ]

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Orange line grid pattern background */}
            <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="none">
                    {/* Grid lines */}
                    {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400].map((x) => (
                        <line
                            key={`v-${x}`}
                            x1={x}
                            y1={0}
                            x2={x}
                            y2={400}
                            stroke="#FF6B35"
                            strokeWidth="1"
                        />
                    ))}
                    {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((y) => (
                        <line
                            key={`h-${y}`}
                            x1={0}
                            y1={y}
                            x2={1440}
                            y2={y}
                            stroke="#FF6B35"
                            strokeWidth="1"
                        />
                    ))}
                </svg>
            </div>

            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="mb-4">
                                <span className="text-6xl lg:text-7xl font-bold" style={{ fontFamily: 'Space Grotesk', color: stat.color }}>
                                    {stat.value}
                                </span>
                                {stat.subValue && (
                                    <span className="text-4xl lg:text-5xl font-bold ml-2" style={{ fontFamily: 'Space Grotesk', color: stat.color }}>
                                        {stat.subValue}
                                    </span>
                                )}
                            </div>
                            <p className="text-lg text-[#0A0A0A] leading-relaxed" style={{ fontFamily: 'Inter' }}>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

