import { Link } from 'react-router-dom'

export default function SecuritySection() {
    return (
        <section className="relative bg-[#F5F3FF] py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-normal mb-6 text-[#0A0A0A] leading-tight" style={{ fontFamily: 'Space Grotesk' }}>
                            Security Protocols
                        </h2>
                        <p className="text-lg text-[#0A0A0A]/80 mb-8 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                            In Suryonex's 20+ year history, we have never lost a document, mismanaged an electronic data file, or had a breach of confidentiality. Our process includes:
                        </p>
                        <ul className="space-y-3 mb-10" style={{ fontFamily: 'Inter' }}>
                            <li className="flex items-start gap-3 text-[#0A0A0A]/80">
                                <span className="text-[#BFFF0B] mt-1">✓</span>
                                <span>Local support</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#0A0A0A]/80">
                                <span className="text-[#BFFF0B] mt-1">✓</span>
                                <span>Workstation Monitoring</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#0A0A0A]/80">
                                <span className="text-[#BFFF0B] mt-1">✓</span>
                                <span>Secure Data Transferal</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#0A0A0A]/80">
                                <span className="text-[#BFFF0B] mt-1">✓</span>
                                <span>Proprietary security solutions</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#0A0A0A]/80">
                                <span className="text-[#BFFF0B] mt-1">✓</span>
                                <span>VPNs, SSLs, PGP encryptions and Password Protected Data Access</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#0A0A0A]/80">
                                <span className="text-[#BFFF0B] mt-1">✓</span>
                                <span>Best-in-class data archiving and destruction procedures</span>
                            </li>
                        </ul>
                        <Link
                            to="/about#faq"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2D1B3D] text-white text-sm font-medium hover:opacity-90 transition-opacity"
                            style={{ fontFamily: 'Inter' }}
                        >
                            FAQs
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#BFFF0B] text-[#0A0A0A] text-sm font-bold leading-none">
                                →
                            </span>
                        </Link>
                    </div>

                    {/* Right: Isometric White Cube with Purple Padlock */}
                    <div className="relative h-[500px] flex items-center justify-center">
                        <svg viewBox="0 0 400 500" className="w-full h-full">
                            {/* Isometric cube base */}
                            <g transform="translate(200, 300)">
                                {/* Top face */}
                                <polygon
                                    points="-80,-80 80,-80 120,0 40,0"
                                    fill="white"
                                    stroke="#A855F7"
                                    strokeWidth="3"
                                />
                                {/* Right face */}
                                <polygon
                                    points="120,0 40,0 40,120 120,120"
                                    fill="white"
                                    stroke="#A855F7"
                                    strokeWidth="3"
                                />
                                {/* Left face */}
                                <polygon
                                    points="-80,-80 40,0 40,120 -80,40"
                                    fill="white"
                                    stroke="#A855F7"
                                    strokeWidth="3"
                                />
                                {/* Purple S shape inside */}
                                <path
                                    d="M -40 20 Q 0 0 40 20 T 80 20"
                                    fill="none"
                                    stroke="#A855F7"
                                    strokeWidth="4"
                                    opacity="0.6"
                                />
                                {/* Padlock handle on top */}
                                <g transform="translate(0, -100)">
                                    {/* Lock body */}
                                    <rect x="-20" y="0" width="40" height="50" rx="5" fill="#A855F7" stroke="#2D1B3D" strokeWidth="2" />
                                    {/* Lock shackle */}
                                    <path
                                        d="M -20 0 Q -20 -30 0 -30 Q 20 -30 20 0"
                                        fill="none"
                                        stroke="#A855F7"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </g>
                            </g>
                            {/* Purple shadow */}
                            <ellipse cx="200" cy="420" rx="100" ry="20" fill="#A855F7" opacity="0.3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

