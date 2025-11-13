import { useState, useEffect } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function StatsSection() {
    const [stat1Ref, isStat1Visible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    const [stat2Ref, isStat2Visible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    const [stat3Ref, isStat3Visible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    
    // Number counting animation
    const [countedValue1, setCountedValue1] = useState('0%')
    const [countedValue2, setCountedValue2] = useState('0%')
    
    useEffect(() => {
        if (isStat1Visible) {
            const duration = 2000
            const startValue = 0
            const endValue = 99.95
            const steps = 60
            const increment = (endValue - startValue) / steps
            let currentStep = 0
            
            const timer = setInterval(() => {
                currentStep++
                const currentValue = startValue + (increment * currentStep)
                if (currentStep >= steps) {
                    setCountedValue1('99.95%')
                    clearInterval(timer)
                } else {
                    setCountedValue1(`${currentValue.toFixed(2)}%`)
                }
            }, duration / steps)
            
            return () => clearInterval(timer)
        }
    }, [isStat1Visible])
    
    useEffect(() => {
        if (isStat2Visible) {
            const duration = 2000
            const startValue = 0
            const endValue = 80
            const steps = 60
            const increment = (endValue - startValue) / steps
            let currentStep = 0
            
            const timer = setInterval(() => {
                currentStep++
                const currentValue = startValue + (increment * currentStep)
                if (currentStep >= steps) {
                    setCountedValue2('80%')
                    clearInterval(timer)
                } else {
                    setCountedValue2(`${Math.round(currentValue)}%`)
                }
            }, duration / steps)
            
            return () => clearInterval(timer)
        }
    }, [isStat2Visible])

    const stats = [
        {
            value: '99.95%',
            subValue: '- 100%',
            label: 'Increased data quality with 99.95% - 100% accuracy.',
            color: '#FF6B35',
            ref: stat1Ref,
            isVisible: isStat1Visible
        },
        {
            value: '80%',
            label: 'Savings - Up to 80% in cost savings as compared to in-house service.',
            color: '#FF6B35',
            ref: stat2Ref,
            isVisible: isStat2Visible
        },
        {
            value: '24/7',
            label: 'Operations - Fast turnaround with a 24/7, 3-shift operation.',
            color: '#FF6B35',
            ref: stat3Ref,
            isVisible: isStat3Visible
        }
    ]

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 animated-gradient opacity-10"></div>
            
            {/* Orange line grid pattern background */}
            <div className="absolute inset-0 opacity-20 z-0">
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

            <div className="max-w-[1400px] mx-auto px-8 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            ref={stat.ref}
                            className={`text-center scroll-animate-scale ${stat.isVisible ? 'visible' : ''}`}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="mb-4">
                                <span 
                                    className="text-6xl lg:text-7xl font-bold inline-block" 
                                    style={{ 
                                        fontFamily: 'Space Grotesk', 
                                        color: stat.color,
                                        transform: stat.isVisible ? 'scale(1)' : 'scale(0.5)',
                                        transition: `transform 0.6s ease-out ${index * 0.15}s`
                                    }}
                                >
                                    {index === 0 ? countedValue1 : index === 1 ? countedValue2 : stat.value}
                                </span>
                                {stat.subValue && (
                                    <span 
                                        className="text-4xl lg:text-5xl font-bold ml-2 inline-block" 
                                        style={{ 
                                            fontFamily: 'Space Grotesk', 
                                            color: stat.color,
                                            transform: stat.isVisible ? 'scale(1)' : 'scale(0.5)',
                                            transition: `transform 0.6s ease-out ${index * 0.15}s`,
                                            opacity: index === 0 && countedValue1 === '99.95%' ? 1 : index === 0 ? 0 : 1
                                        }}
                                    >
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

