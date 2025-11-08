import { Link } from 'react-router-dom'
import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from '@/components/Icons'

export default function Footer() {
    const footerLinks = {
        Solutions: [
            { name: 'AI Driven Processing', path: '/solutions' },
            { name: 'Data Services', path: '/solutions' },
            { name: 'Customer Experience', path: '/solutions' }
        ],
        Workforce: [
            { name: 'Build Your Team', path: '/workforce' },
            { name: 'Scalable Teams', path: '/workforce' },
            { name: 'Expert Professionals', path: '/workforce' }
        ],
        'About Us': [
            { name: 'About', path: '/about' },
            { name: 'Careers', path: '/careers' },
            { name: 'Success Stories', path: '/success-stories' }
        ],
        'Contact Us': [
            { name: 'Contact', path: '/contact' },
            { name: 'Get a Quote', path: '/contact' },
            { name: 'Get Started', path: '/contact' }
        ]
    }

    return (
        <>
            <footer className="relative bg-[#2D1B3D] text-white pt-20 pb-10">
                <div className="max-w-[1400px] mx-auto px-8">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
                        {/* Logo and Description */}
                        <div className="lg:col-span-2">
                            <Link to="/" className="inline-block">
                                <div className="flex flex-col items-start leading-none mb-6">
                                    <span className="text-5xl font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk', lineHeight: '1' }}>
                                        TS
                                    </span>
                                    <span className="text-xs font-semibold tracking-[0.15em] mt-1" style={{ fontFamily: 'Space Grotesk' }}>
                                        TECHSPEED
                                    </span>
                                </div>
                            </Link>
                            <p className="text-white/60 mb-6 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                                Smart outsourcing using a perfect blend of people and technology.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#A855F7] flex items-center justify-center transition-colors" aria-label="Facebook">
                                    <FacebookIcon className="w-5 h-5" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#A855F7] flex items-center justify-center transition-colors" aria-label="Twitter">
                                    <TwitterIcon className="w-5 h-5" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#A855F7] flex items-center justify-center transition-colors" aria-label="LinkedIn">
                                    <LinkedInIcon className="w-5 h-5" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#A855F7] flex items-center justify-center transition-colors" aria-label="Instagram">
                                    <InstagramIcon className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Footer Links */}
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category}>
                                <h4 className="font-semibold mb-4 text-lg" style={{ fontFamily: 'Space Grotesk' }}>
                                    {category}
                                </h4>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                to={link.path}
                                                className="text-white/60 hover:text-white text-sm transition-colors"
                                                style={{ fontFamily: 'Inter' }}
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-white/10">
                        <div>
                            <h4 className="font-semibold mb-4 text-lg" style={{ fontFamily: 'Space Grotesk' }}>
                                Headquarters - USA
                            </h4>
                            <p className="text-white/60 text-sm mb-2" style={{ fontFamily: 'Inter' }}>
                                1300 SW 6th Ave Portland OR 97201
                            </p>
                            <p className="text-white/60 text-sm" style={{ fontFamily: 'Inter' }}>
                                503-927-0027
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-lg" style={{ fontFamily: 'Space Grotesk' }}>
                                Operations - India
                            </h4>
                            <p className="text-white/60 text-sm" style={{ fontFamily: 'Inter' }}>
                                Aundh IT Park, Office No. B/502, Pragati Nagar, Bopodi, Pune, Maharashtra 411020
                            </p>
                        </div>
                    </div>

                    {/* Partner Logos */}
                    <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
                        <a 
                            href="https://www.designrush.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white/40 hover:text-white text-sm font-semibold transition-colors cursor-pointer"
                            style={{ fontFamily: 'Inter' }}
                            aria-label="DesignRush"
                        >
                            DesignRush
                        </a>
                        <a 
                            href="https://www.goodfirms.co" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white/40 hover:text-white text-sm font-semibold transition-colors cursor-pointer"
                            style={{ fontFamily: 'Inter' }}
                            aria-label="GoodFirms"
                        >
                            GoodFirms
                        </a>
                        <a 
                            href="https://clutch.co" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white/40 hover:text-white text-sm font-semibold transition-colors cursor-pointer"
                            style={{ fontFamily: 'Inter' }}
                            aria-label="Clutch"
                        >
                            Clutch
                        </a>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/60 text-sm" style={{ fontFamily: 'Inter' }}>
                            Copyright 2023 | All Rights Reserved
                        </p>
                        <div className="flex gap-6 text-sm">
                            <Link to="/privacy" className="text-white/60 hover:text-white transition-colors" style={{ fontFamily: 'Inter' }}>
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-white/60 hover:text-white transition-colors" style={{ fontFamily: 'Inter' }}>
                                Disclaimer
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Floating "Start a Project" Button */}
            <Link
                to="/contact"
                className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-[#BFFF0B] text-[#0A0A0A] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                style={{ fontFamily: 'Inter' }}
            >
                <span className="text-xs font-bold text-center leading-tight">Start a<br />Project</span>
            </Link>
        </>
    )
}
