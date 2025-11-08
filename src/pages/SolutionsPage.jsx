import { Link } from 'react-router-dom'
import { AIIcon, DataIcon, CustomerIcon } from '@/components/Icons'

export default function SolutionsPage() {
    const solutions = [
        {
            id: 'ai-driven',
            title: 'AI Driven Processing',
            description: 'We use AI tools to improve your process efficiency and accuracy.',
            Icon: AIIcon,
            features: [
                'AI Data Extraction',
                'AI Assisted Data Processing',
                'AI & ML Optimization'
            ],
            benefits: [
                'Improved process efficiency',
                'Higher accuracy rates',
                'Faster turnaround times',
                'Cost-effective solutions'
            ]
        },
        {
            id: 'data-services',
            title: 'Data Services',
            description: 'We deliver quick, affordable, and accurate data mining, entry, and tagging services.',
            Icon: DataIcon,
            features: [
                'Data Entry',
                'Data Mining',
                'Data Processing'
            ],
            benefits: [
                '99.95% - 100% accuracy',
                'Quick turnaround',
                'Affordable pricing',
                'Secure data handling'
            ]
        },
        {
            id: 'customer-experience',
            title: 'Customer Experience',
            description: 'We free up your time by providing well-trained, full service, scalable, back office teams.',
            Icon: CustomerIcon,
            features: [
                'Back Office Support',
                'Service Desk & Chat Support',
                'Content Moderation'
            ],
            benefits: [
                'Scalable teams',
                '24/7 availability',
                'Well-trained professionals',
                'Full service support'
            ]
        }
    ]

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#F5F3FF] to-white py-24">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                            Our Solutions
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Our dedicated team seamlessly integrates with your business so you can scale with confidence.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#2D1B3D] text-white font-medium hover:opacity-90 transition-opacity"
                        >
                            Get Started
                            <span className="text-lg">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="space-y-24">
                        {solutions.map((solution, index) => (
                            <div
                                key={solution.id}
                                id={solution.id}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="mb-6 text-[#A855F7]">
                                        <solution.Icon className="w-16 h-16" />
                                    </div>
                                    <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                                        {solution.title}
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-8">
                                        {solution.description}
                                    </p>
                                    <div className="mb-8">
                                        <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                                            Key Features
                                        </h3>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {solution.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-2">
                                                    <span className="text-[#A855F7] mt-1">✓</span>
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="bg-[#F5F3FF] rounded-2xl p-8">
                                        <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Space Grotesk' }}>
                                            Benefits
                                        </h3>
                                        <ul className="space-y-4">
                                            {solution.benefits.map((benefit) => (
                                                <li key={benefit} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A855F7] text-white flex items-center justify-center text-sm">
                                                        ✓
                                                    </span>
                                                    <span className="text-gray-700 text-lg">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            to="/contact"
                                            className="mt-8 inline-flex items-center gap-2 text-[#A855F7] font-semibold hover:gap-3 transition-all"
                                        >
                                            Learn More
                                            <span>→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#2D1B3D] text-white">
                <div className="max-w-[1400px] mx-auto px-8 text-center">
                    <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                        Let's discuss how our solutions can help your business grow
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#BFFF0B] text-[#0A0A0A] font-semibold hover:opacity-90 transition-opacity"
                    >
                        Contact Us Today
                        <span>→</span>
                    </Link>
                </div>
            </section>
        </div>
    )
}
