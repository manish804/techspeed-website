import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { EmailIcon, PhoneIcon, LocationIcon, ChatIcon, MapIcon } from '@/components/Icons'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Accordion from '@/components/Accordion'
import { useMagneticHover } from '@/hooks/useMagneticHover'
import { submitLead } from '@/lib/supabase'

export default function ContactPage() {
    const [searchParams] = useSearchParams()
    const positionParam = searchParams.get('position')

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: positionParam ? `I am interested in applying for the ${positionParam} position.` : ''
    })

    useEffect(() => {
        if (positionParam) {
            setFormData(prev => ({
                ...prev,
                message: `I am interested in applying for the ${positionParam} position.`
            }))
        }
    }, [positionParam])
    const [submitted, setSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(null)
    const [heroRef, isHeroVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    const [formRef, isFormVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    const [infoRef, isInfoVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        try {
            await submitLead({
                ...formData,
                source: 'contact_page'
            })

            const notifyUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/notify-lead`
            fetch(notifyUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    service: formData.service
                })
            }).catch(() => {})

            setSubmitted(true)
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                message: ''
            })
            setTimeout(() => setSubmitted(false), 5000)
        } catch (err) {
            setError('Failed to submit. Please try again or email us directly.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    function MagneticSubmitButton({ submitted, isSubmitting, disabled }) {
        const magneticRef = useMagneticHover({ strength: 0.15 })

        return (
            <button
                ref={magneticRef}
                type="submit"
                disabled={disabled || isSubmitting}
                className={`magnetic-button btn-enhanced ripple-effect w-full sm:w-auto px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                    disabled || isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : submitted
                            ? 'bg-green-600'
                            : 'bg-[#2D1B3D]'
                } text-white`}
            >
                {isSubmitting ? (
                    <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                    </>
                ) : submitted ? (
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
        )
    }
    
    // Contact Info Card Component
    function ContactInfoCard({ icon, title, content, delay = 0, isVisible, action }) {
        const contentArray = Array.isArray(content) ? content : [content]
        
        return (
            <div
                className="flex gap-4 p-4 rounded-lg bg-white card-elevated rounded-transition transition-all duration-300 hover:shadow-xl"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s, box-shadow 0.3s ease-out`
                }}
            >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#A855F7] transition-transform duration-300 hover:scale-110">
                    {icon}
                </div>
                <div className="flex-grow">
                    <h3 className="font-semibold text-lg mb-1" style={{ fontFamily: 'Space Grotesk' }}>
                        {title}
                    </h3>
                    {contentArray.map((item, index) => (
                        <p key={index} className="text-gray-600">
                            {item}
                        </p>
                    ))}
                    {action}
                </div>
            </div>
        )
    }

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#F5F3FF] to-white py-24">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div 
                        ref={heroRef}
                        className={`max-w-3xl mx-auto text-center scroll-animate ${isHeroVisible ? 'visible' : ''}`}
                    >
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
                        <div
                            ref={formRef}
                            className={`scroll-animate-left ${isFormVisible ? 'visible' : ''}`}
                        >
                            <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Space Grotesk' }}>
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="floating-label-input">
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="floating-input"
                                            placeholder=" "
                                        />
                                        <label className="floating-label">
                                            Full Name *
                                        </label>
                                    </div>
                                    <div className="floating-label-input">
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="floating-input"
                                            placeholder=" "
                                        />
                                        <label className="floating-label">
                                            Email Address *
                                        </label>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="floating-label-input">
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="floating-input"
                                            placeholder=" "
                                        />
                                        <label className="floating-label">
                                            Company Name
                                        </label>
                                    </div>
                                    <div className="floating-label-input">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="floating-input"
                                            placeholder=" "
                                        />
                                        <label className="floating-label">
                                            Phone Number
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 outline-none transition-all bg-white"
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

                                <div className="relative">
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

                                {error && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                        {error}
                                    </div>
                                )}

                                {submitted && (
                                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                                        Thank you for reaching out! We'll get back to you within 24 hours.
                                    </div>
                                )}

                                <MagneticSubmitButton submitted={submitted} isSubmitting={isSubmitting} />
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div
                            ref={infoRef}
                            className={`scroll-animate-right ${isInfoVisible ? 'visible' : ''}`}
                        >
                            <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Space Grotesk' }}>
                                Get In Touch
                            </h2>

                            <div className="space-y-6">
                                <ContactInfoCard
                                    icon={<EmailIcon className="w-6 h-6" />}
                                    title="Email Us"
                                    content="info@suryonex.com"
                                    delay={0.1}
                                    isVisible={isInfoVisible}
                                />
                                <ContactInfoCard
                                    icon={<PhoneIcon className="w-6 h-6" />}
                                    title="Call Us"
                                    content={["503-927-0027", "Mon-Fri, 9am-6pm EST"]}
                                    delay={0.2}
                                    isVisible={isInfoVisible}
                                />
                                <ContactInfoCard
                                    icon={<LocationIcon className="w-6 h-6" />}
                                    title="Visit Us"
                                    content={["1300 SW 6th Ave Portland OR 97201", "USA"]}
                                    delay={0.3}
                                    isVisible={isInfoVisible}
                                />
                                <ContactInfoCard
                                    icon={<ChatIcon className="w-6 h-6" />}
                                    title="Live Chat"
                                    content="Available 24/7"
                                    delay={0.4}
                                    isVisible={isInfoVisible}
                                    action={<button className="text-[#A855F7] font-semibold hover:underline mt-1 transition-colors">Start Chat →</button>}
                                />
                            </div>

                            {/* Map Placeholder */}
                            <div 
                                className="mt-12 rounded-2xl overflow-hidden bg-gradient-to-br from-[#F5F3FF] to-[#E9D5FF] h-64 flex items-center justify-center card-elevated rounded-transition relative gradient-overlay"
                                style={{
                                    opacity: isInfoVisible ? 1 : 0,
                                    transform: isInfoVisible ? 'scale(1)' : 'scale(0.95)',
                                    transition: 'opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s'
                                }}
                            >
                                <div className="text-center relative z-10">
                                    <div className="animate-float mb-4">
                                        <MapIcon className="w-16 h-16 mx-auto text-[#A855F7]" />
                                    </div>
                                    <p className="text-gray-600 font-medium">Interactive Map</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#F5F3FF] relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 animated-gradient opacity-20"></div>
                <div className="absolute top-20 right-20 w-40 h-40 bg-[#A855F7] opacity-5 rounded-full floating-shape blur-2xl"></div>
                
                <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 
                                className="text-4xl font-bold mb-4" 
                                style={{ fontFamily: 'Space Grotesk' }}
                            >
                                Frequently Asked Questions
                            </h2>
                            <div className="w-24 h-1 bg-[#A855F7] mx-auto rounded-full"></div>
                        </div>
                        <div className="space-y-4">
                            <Accordion title="What is your typical response time?">
                                We typically respond to all inquiries within 24 hours during business days.
                            </Accordion>
                            <Accordion title="Do you offer custom solutions?">
                                Yes! We tailor our services to meet your specific business needs and requirements.
                            </Accordion>
                            <Accordion title="What industries do you serve?">
                                We work with businesses across various industries including tech, healthcare, finance, e-commerce, and more.
                            </Accordion>
                            <Accordion title="How do you ensure data security?">
                                We follow industry-standard security protocols and are compliant with GDPR, SOC 2, and other major security frameworks.
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
