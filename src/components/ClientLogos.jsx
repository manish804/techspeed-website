export default function ClientLogos() {
    const clients = [
        'Ag Flow',
        '1st Merchant Funding',
        'American Red Cross',
        'entrepreneur',
        'Harvard University'
    ]

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="text-gray-400 text-lg font-semibold hover:text-[#A855F7] transition-colors"
                            style={{ fontFamily: 'Inter' }}
                        >
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

