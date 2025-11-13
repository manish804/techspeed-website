import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ClientLogos() {
    const [containerRef, isVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

    const clients = [
        'Ag Flow',
        '1st Merchant Funding',
        'American Red Cross',
        'entrepreneur',
        'Harvard University'
    ]

    return (
        <section className="py-16 bg-white overflow-hidden relative">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 dot-pattern opacity-5"></div>
            
            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                <div 
                    ref={containerRef}
                    className={`flex flex-wrap items-center justify-center gap-8 md:gap-12 scroll-animate ${isVisible ? 'visible' : ''}`}
                >
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="text-gray-400 text-lg font-semibold hover:text-[#A855F7] hover:scale-110 transition-all duration-300"
                            style={{ 
                                fontFamily: 'Inter',
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s, color 0.3s ease-out, scale 0.3s ease-out`
                            }}
                        >
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

