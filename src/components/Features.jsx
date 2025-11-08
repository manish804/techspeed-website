export default function Features() {
    const features = [
        'Scalable Back Office Support Teams',
        'AI Powered Data Mining and Entry',
        'Top Ranked Outsourcing Provider',
    ]

    return (
        <section className="relative bg-[#2D1B3D] py-16 overflow-hidden">
            {/* Decorative wave pattern background - matching the image */}
            <div className="absolute inset-0 opacity-[0.08]">
                <svg className="w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="none">
                    {/* Wavy lines pattern */}
                    <path d="M0,100 Q360,60 720,100 T1440,100" fill="none" stroke="#A855F7" strokeWidth="1.5" opacity="0.6" />
                    <path d="M0,130 Q360,90 720,130 T1440,130" fill="none" stroke="#A855F7" strokeWidth="1.5" opacity="0.5" />
                    <path d="M0,160 Q360,120 720,160 T1440,160" fill="none" stroke="#A855F7" strokeWidth="1.5" opacity="0.4" />
                    <path d="M0,190 Q360,150 720,190 T1440,190" fill="none" stroke="#A855F7" strokeWidth="1.5" opacity="0.3" />
                    <path d="M0,220 Q360,180 720,220 T1440,220" fill="none" stroke="#A855F7" strokeWidth="1.5" opacity="0.2" />
                    <path d="M0,250 Q360,210 720,250 T1440,250" fill="none" stroke="#A855F7" strokeWidth="1.5" opacity="0.15" />
                </svg>
            </div>

            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                <div className="max-w-md space-y-5">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 text-white">
                            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                                <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-base font-normal leading-relaxed" style={{ fontFamily: 'Inter' }}>
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Purple gradient blob on the right side */}
            <div className="absolute bottom-0 right-0 w-[450px] h-[400px] opacity-40">
                <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#A855F7] to-transparent rounded-tl-[100%]"></div>
            </div>
        </section>
    )
}
