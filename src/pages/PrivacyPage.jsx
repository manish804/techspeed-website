export default function PrivacyPage() {
    return (
        <div className="pt-20">
            <section className="bg-gradient-to-br from-[#F5F3FF] to-white py-24">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-600 mb-12">
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <div className="space-y-8 text-gray-700 leading-relaxed">
                            <section>
                                <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                                    Introduction
                                </h2>
                                <p>
                                    At Suryonex, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                                    Information We Collect
                                </h2>
                                <p>
                                    We collect information that you provide directly to us, including:
                                </p>
                                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                                    <li>Name and contact information</li>
                                    <li>Company information</li>
                                    <li>Service inquiries and communications</li>
                                    <li>Any other information you choose to provide</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                                    How We Use Your Information
                                </h2>
                                <p>
                                    We use the information we collect to:
                                </p>
                                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                                    <li>Provide, maintain, and improve our services</li>
                                    <li>Respond to your inquiries and requests</li>
                                    <li>Send you technical notices and support messages</li>
                                    <li>Communicate with you about products, services, and events</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                                    Data Security
                                </h2>
                                <p>
                                    We implement appropriate technical and organizational security measures to protect your personal information. In Suryonex's 20+ year history, we have never lost a document, mismanaged an electronic data file, or had a breach of confidentiality.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                                    Contact Us
                                </h2>
                                <p>
                                    If you have questions about this Privacy Policy, please contact us at:
                                </p>
                                <p className="mt-4">
                                    <strong>Email:</strong> privacy@suryonex.com<br />
                                    <strong>Phone:</strong> 503-927-0027<br />
                                    <strong>Address:</strong> 1300 SW 6th Ave Portland OR 97201
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

