import { useState } from 'react'
import { submitNewsletter } from '@/lib/supabase'

export default function NewsletterSignup({ variant = 'default' }) {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('idle')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email) return

        setStatus('loading')
        setMessage('')

        try {
            await submitNewsletter(email, 'footer')
            setStatus('success')
            setMessage('Thanks for subscribing!')
            setEmail('')
            setTimeout(() => {
                setStatus('idle')
                setMessage('')
            }, 5000)
        } catch (err) {
            setStatus('error')
            setMessage(err.message || 'Failed to subscribe. Please try again.')
        }
    }

    if (variant === 'footer') {
        return (
            <div className="w-full">
                <h4 className="font-semibold mb-4 text-lg text-white" style={{ fontFamily: 'Space Grotesk' }}>
                    Stay Updated
                </h4>
                <p className="text-white/60 text-sm mb-4" style={{ fontFamily: 'Inter' }}>
                    Get the latest outsourcing insights delivered to your inbox.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <div className="flex gap-2">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            disabled={status === 'loading'}
                            className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#BFFF0B] focus:ring-1 focus:ring-[#BFFF0B] transition-all disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="px-4 py-2.5 rounded-lg bg-[#BFFF0B] text-[#0A0A0A] text-sm font-semibold hover:bg-[#d4ff4d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {status === 'loading' ? (
                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                            ) : (
                                'Subscribe'
                            )}
                        </button>
                    </div>
                    {message && (
                        <p className={`text-sm ${status === 'success' ? 'text-[#BFFF0B]' : 'text-red-400'}`}>
                            {message}
                        </p>
                    )}
                </form>
            </div>
        )
    }

    return (
        <div className="bg-[#F5F3FF] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk' }}>
                Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 mb-6">
                Get industry insights, tips, and updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={status === 'loading'}
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 outline-none transition-all disabled:opacity-50"
                />
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-6 py-3 rounded-lg bg-[#2D1B3D] text-white font-semibold hover:bg-[#3d2550] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {status === 'loading' ? (
                        <>
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Subscribing...
                        </>
                    ) : (
                        'Subscribe'
                    )}
                </button>
            </form>
            {message && (
                <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {message}
                </p>
            )}
        </div>
    )
}
