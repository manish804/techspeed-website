import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isActive = (path) => location.pathname === path

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-[#F5F3FF]'
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
                        <div className="flex flex-col items-center leading-none">
                            <span className="text-[32px] font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A', lineHeight: '1' }}>
                                TS
                            </span>
                            <span className="text-[8px] font-semibold tracking-[0.15em] mt-[-2px]" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                                SURYONEX
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-9">
                        <Link
                            to="/solutions"
                            className={`text-[13px] font-normal transition-all ${isActive('/solutions') ? 'text-[#A855F7] font-medium' : 'text-[#0A0A0A] hover:text-[#A855F7]'
                                }`}
                            style={{ fontFamily: 'Inter' }}
                        >
                            Solutions
                        </Link>
                        <Link
                            to="/workforce"
                            className={`text-[13px] font-normal transition-all ${isActive('/workforce') ? 'text-[#A855F7] font-medium' : 'text-[#0A0A0A] hover:text-[#A855F7]'
                                }`}
                            style={{ fontFamily: 'Inter' }}
                        >
                            Workforce
                        </Link>
                        <Link
                            to="/about"
                            className={`text-[13px] font-normal transition-all ${isActive('/about') ? 'text-[#A855F7] font-medium' : 'text-[#0A0A0A] hover:text-[#A855F7]'
                                }`}
                            style={{ fontFamily: 'Inter' }}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/success-stories"
                            className={`text-[13px] font-normal transition-all ${isActive('/success-stories') ? 'text-[#A855F7] font-medium' : 'text-[#0A0A0A] hover:text-[#A855F7]'
                                }`}
                            style={{ fontFamily: 'Inter' }}
                        >
                            Success Stories
                        </Link>
                        <Link
                            to="/contact"
                            className={`text-[13px] font-normal transition-all ${isActive('/contact') ? 'text-[#A855F7] font-medium' : 'text-[#0A0A0A] hover:text-[#A855F7]'
                                }`}
                            style={{ fontFamily: 'Inter' }}
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            to="/contact"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#BFFF0B] text-[#0A0A0A] text-[13px] font-normal hover:opacity-90 transition-opacity"
                            style={{ fontFamily: 'Inter' }}
                        >
                            Get a Quote
                        </Link>
                        <Link
                            to="/contact"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2D1B3D] text-white text-[13px] font-normal hover:opacity-90 transition-opacity"
                            style={{ fontFamily: 'Inter' }}
                        >
                            Get Started
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#BFFF0B] text-[#0A0A0A] text-sm font-bold leading-none">
                                →
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-[#0A0A0A] transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-[#0A0A0A] transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-[#0A0A0A] transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col gap-4">
                            <Link to="/solutions" className="text-sm text-[#0A0A0A] hover:text-[#A855F7]" onClick={() => setMobileMenuOpen(false)}>
                                Solutions
                            </Link>
                            <Link to="/workforce" className="text-sm text-[#0A0A0A] hover:text-[#A855F7]" onClick={() => setMobileMenuOpen(false)}>
                                Workforce
                            </Link>
                            <Link to="/about" className="text-sm text-[#0A0A0A] hover:text-[#A855F7]" onClick={() => setMobileMenuOpen(false)}>
                                About Us
                            </Link>
                            <Link to="/success-stories" className="text-sm text-[#0A0A0A] hover:text-[#A855F7]" onClick={() => setMobileMenuOpen(false)}>
                                Success Stories
                            </Link>
                            <Link to="/contact" className="text-sm text-[#0A0A0A] hover:text-[#A855F7]" onClick={() => setMobileMenuOpen(false)}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
