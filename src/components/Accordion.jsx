import { useState, useRef, useEffect } from 'react'

export default function Accordion({ title, children, defaultOpen = false, className = '' }) {
    const [isOpen, setIsOpen] = useState(defaultOpen)
    const contentRef = useRef(null)

    useEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px'
                contentRef.current.style.opacity = '1'
            } else {
                contentRef.current.style.maxHeight = '0px'
                contentRef.current.style.opacity = '0'
            }
        }
    }, [isOpen])

    return (
        <div className={`border border-gray-200 rounded-lg overflow-hidden ${className}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-left" style={{ fontFamily: 'Space Grotesk' }}>
                    {title}
                </span>
                <svg
                    className={`w-5 h-5 text-[#A855F7] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                ref={contentRef}
                className="accordion-content"
                style={{
                    maxHeight: isOpen ? '1000px' : '0',
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out'
                }}
            >
                <div className="px-6 pb-4 text-gray-600" style={{ fontFamily: 'Inter' }}>
                    {children}
                </div>
            </div>
        </div>
    )
}

