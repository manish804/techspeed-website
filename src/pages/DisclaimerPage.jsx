export default function DisclaimerPage() {
    return (
        <div className="pt-20">
            <section className="bg-gradient-to-br from-[#F5F3FF] to-white py-24">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                            Disclaimer
                        </h1>
                        <p className="text-xl text-gray-600 mb-12">
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <div className="space-y-8 text-gray-700 leading-relaxed">
                            <section>
                                <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                                    General Information
                                </h2>
                                <p>
                                    The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, TechSpeed excludes all representations, warranties, and conditions relating to our website and the use of this website.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                                    Service Availability
                                </h2>
                                <p>
                                    While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                                    Limitation of Liability
                                </h2>
                                <p>
                                    In no event will TechSpeed be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                                    External Links
                                </h2>
                                <p>
                                    Our website may contain links to external websites. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                                    Contact Us
                                </h2>
                                <p>
                                    If you have questions about this Disclaimer, please contact us at:
                                </p>
                                <p className="mt-4">
                                    <strong>Email:</strong> info@techspeed.com<br />
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

