import { useState } from 'react'
import { EmailIcon, PhoneIcon, LocationIcon, ChatIcon, MapIcon } from '@/components/Icons'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Simulate form submission
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#F5F3FF] to-white py-24">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                            Let's Talk About Your Project
                        </h1>
                        <p className="text-xl text-gray-600">
                            Get in touch with our team to discuss how we can help scale your business
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Space Grotesk' }}>
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 outline-none transition-all"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 outline-none transition-all"
                                            placeholder="Your Company"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 outline-none transition-all"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Service Interested In
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 outline-none transition-all"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="back-office">Back Office Support</option>
                                        <option value="data-entry">Data Entry & Mining</option>
                                        <option value="customer-service">Customer Service</option>
                                        <option value="technical">Technical Support</option>
                                        <option value="content">Content Moderation</option>
                                        <option value="virtual">Virtual Assistance</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 outline-none transition-all resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#2D1B3D] text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                >
                                    {submitted ? (
                                        <>
                                            <span>✓</span>
                                            Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <span>→</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Space Grotesk' }}>
                                Get In Touch
                            </h2>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#A855F7]">
                                        <EmailIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1" style={{ fontFamily: 'Space Grotesk' }}>
                                            Email Us
                                        </h3>
                                        <p className="text-gray-600">info@techspeed.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#A855F7]">
                                        <PhoneIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1" style={{ fontFamily: 'Space Grotesk' }}>
                                            Call Us
                                        </h3>
                                        <p className="text-gray-600">503-927-0027</p>
                                        <p className="text-gray-600">Mon-Fri, 9am-6pm EST</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#A855F7]">
                                        <LocationIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1" style={{ fontFamily: 'Space Grotesk' }}>
                                            Visit Us
                                        </h3>
                                        <p className="text-gray-600">1300 SW 6th Ave Portland OR 97201</p>
                                        <p className="text-gray-600">USA</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#A855F7]">
                                        <ChatIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1" style={{ fontFamily: 'Space Grotesk' }}>
                                            Live Chat
                                        </h3>
                                        <p className="text-gray-600">Available 24/7</p>
                                        <button className="text-[#A855F7] font-semibold hover:underline mt-1">
                                            Start Chat →
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-12 rounded-2xl overflow-hidden bg-[#F5F3FF] h-64 flex items-center justify-center">
                                <div className="text-center">
                                    <MapIcon className="w-16 h-16 mx-auto mb-4 text-[#A855F7]" />
                                    <p className="text-gray-600">Interactive Map</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#F5F3FF]">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Space Grotesk' }}>
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: 'What is your typical response time?',
                                    a: 'We typically respond to all inquiries within 24 hours during business days.'
                                },
                                {
                                    q: 'Do you offer custom solutions?',
                                    a: 'Yes! We tailor our services to meet your specific business needs and requirements.'
                                },
                                {
                                    q: 'What industries do you serve?',
                                    a: 'We work with businesses across various industries including tech, healthcare, finance, e-commerce, and more.'
                                },
                                {
                                    q: 'How do you ensure data security?',
                                    a: 'We follow industry-standard security protocols and are compliant with GDPR, SOC 2, and other major security frameworks.'
                                }
                            ].map((faq, index) => (
                                <details key={index} className="bg-white rounded-lg p-6 cursor-pointer group">
                                    <summary className="font-semibold text-lg flex justify-between items-center" style={{ fontFamily: 'Space Grotesk' }}>
                                        {faq.q}
                                        <span className="text-[#A855F7] group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 leading-relaxed">
                                        {faq.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
