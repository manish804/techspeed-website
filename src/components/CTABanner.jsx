import { cn } from '@/lib/utils'

export default function CTABanner() {
    return (
        <section className="py-24">
            <div className="max-w-[1280px] mx-auto px-6">
                <div
                    className="scroll-reveal rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
                    style={{
                        background: `linear-gradient(135deg, var(--primary), var(--accent))`,
                        boxShadow: 'var(--shadow-card)',
                    }}
                >
                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Join hundreds of companies that trust Suryonex for their outsourcing needs
                        </p>
                        <button
                            className={cn(
                                'px-8 py-4 rounded-lg text-lg font-medium min-h-[44px]',
                                'transition-all duration-sm ease-emphasized inline-flex items-center gap-2',
                                'hover:-translate-y-0.5 hover:scale-[1.03] hover:brightness-105',
                                'active:scale-98',
                                'focus:outline-2 focus:outline-offset-3 focus:outline-white',
                                'group'
                            )}
                            style={{
                                background: 'var(--highlight)',
                                color: 'var(--bg-dark)',
                                transitionDuration: 'var(--duration-sm)',
                                transitionTimingFunction: 'var(--ease-emphasized)',
                            }}
                        >
                            Get Started Today
                            <span
                                className="inline-block transition-transform duration-sm group-hover:translate-x-1"
                                style={{
                                    transitionDuration: 'var(--duration-sm)',
                                }}
                            >
                                →
                            </span>
                        </button>
                    </div>

                    {/* Decorative elements */}
                    <div
                        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20"
                        style={{ background: 'var(--highlight)', filter: 'blur(80px)' }}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-20"
                        style={{ background: 'var(--accent)', filter: 'blur(80px)' }}
                    />
                </div>
            </div>
        </section>
    )
}
