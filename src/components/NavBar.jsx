import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useMagneticHover } from '@/hooks/useMagneticHover'

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isActive = (path) => location.pathname === path
    
    // NavButton Component with magnetic effect
    function NavButton({ to, variant = 'primary', children }) {
        const magneticRef = useMagneticHover({ strength: 0.1 })
        
        const baseClasses = "magnetic-button btn-enhanced ripple-effect flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-normal"
        const variantClasses = variant === 'primary' 
            ? "bg-[#BFFF0B] text-[#0A0A0A]"
            : "bg-[#2D1B3D] text-white"
        
        return (
            <Link
                ref={magneticRef}
                to={to}
                className={`${baseClasses} ${variantClasses}`}
                style={{ fontFamily: 'Inter' }}
            >
                {children}
                {variant === 'secondary' && (
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#BFFF0B] text-[#0A0A0A] text-sm font-bold leading-none">
                        →
                    </span>
                )}
            </Link>
        )
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'shadow-lg' 
                    : ''
            }`}
            style={scrolled ? {
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                background: 'rgba(255, 255, 255, 0.85)',
                borderBottom: '1px solid rgba(168, 85, 247, 0.1)'
            } : {
                background: 'rgba(245, 243, 255, 0.8)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)'
            }}
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
                            className={`text-[13px] font-normal transition-all duration-200 relative group ${isActive('/solutions') ? 'text-[#A855F7] font-medium' : 'text-[#0A0A0A] hover:text-[#A855F7]'
                                }`}
                            style={{ fontFamily: 'Inter' }}
                        >
                            Solutions
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#A855F7] transition-all duration-200 group-hover:w-full ${isActive('/solutions') ? 'w-full' : ''}`}></span>
                        </Link>
                        <Link
                            to="/workforce"
                            className={`text-[13px] font-normal transition-all duration-200 relative group ${isActive('/workforce') ? 'text-[#A855F7] font-medium' : 'text-[#0A0A0A] hover:text-[#A855F7]'
                                }`}
                            style={{ fontFamily: 'Inter' }}
                        >
                            Workforce
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#A855F7] transition-all duration-200 group-hover:w-full ${isActive('/workforce') ? 'w-full' : ''}`}></span>
                        </Link>
                        <Link
                            to="/about"
                            className={`text-[13px] font-normal transition-all duration-200 relative group ${isActive('/about') ? 'text-[#A855F7] font-medium' : 'text-[#0A0A0A] hover:text-[#A855F7]'
                                }`}
                            style={{ fontFamily: 'Inter' }}
                        >
                            About Us
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#A855F7] transition-all duration-200 group-hover:w-full ${isActive('/about') ? 'w-full' : ''}`}></span>
                        </Link>
                        <Link
                            to="/success-stories"
                            className={`text-[13px] font-normal transition-all duration-200 relative group ${isActive('/success-stories') ? 'text-[#A855F7] font-medium' : 'text-[#0A0A0A] hover:text-[#A855F7]'
                                }`}
                            style={{ fontFamily: 'Inter' }}
                        >
                            Success Stories
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#A855F7] transition-all duration-200 group-hover:w-full ${isActive('/success-stories') ? 'w-full' : ''}`}></span>
                        </Link>
                        <Link
                            to="/contact"
                            className={`text-[13px] font-normal transition-all duration-200 relative group ${isActive('/contact') ? 'text-[#A855F7] font-medium' : 'text-[#0A0A0A] hover:text-[#A855F7]'
                                }`}
                            style={{ fontFamily: 'Inter' }}
                        >
                            Contact Us
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#A855F7] transition-all duration-200 group-hover:w-full ${isActive('/contact') ? 'w-full' : ''}`}></span>
                        </Link>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <NavButton to="/contact" variant="primary">
                            Get a Quote
                        </NavButton>
                        <NavButton to="/contact" variant="secondary">
                            Get Started
                        </NavButton>
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
                <div 
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
                        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="py-4 border-t border-gray-200">
                        <div className="flex flex-col gap-4">
                            <Link 
                                to="/solutions" 
                                className={`text-sm text-[#0A0A0A] hover:text-[#A855F7] transition-all duration-200 transform hover:translate-x-2 hover:scale-105 ${isActive('/solutions') ? 'text-[#A855F7] font-medium' : ''}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Solutions
                            </Link>
                            <Link 
                                to="/workforce" 
                                className={`text-sm text-[#0A0A0A] hover:text-[#A855F7] transition-all duration-200 transform hover:translate-x-2 hover:scale-105 ${isActive('/workforce') ? 'text-[#A855F7] font-medium' : ''}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Workforce
                            </Link>
                            <Link 
                                to="/about" 
                                className={`text-sm text-[#0A0A0A] hover:text-[#A855F7] transition-all duration-200 transform hover:translate-x-2 hover:scale-105 ${isActive('/about') ? 'text-[#A855F7] font-medium' : ''}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link 
                                to="/success-stories" 
                                className={`text-sm text-[#0A0A0A] hover:text-[#A855F7] transition-all duration-200 transform hover:translate-x-2 hover:scale-105 ${isActive('/success-stories') ? 'text-[#A855F7] font-medium' : ''}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Success Stories
                            </Link>
                            <Link 
                                to="/contact" 
                                className={`text-sm text-[#0A0A0A] hover:text-[#A855F7] transition-all duration-200 transform hover:translate-x-2 hover:scale-105 ${isActive('/contact') ? 'text-[#A855F7] font-medium' : ''}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
