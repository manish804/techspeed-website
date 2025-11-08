import { cn } from '@/lib/utils'

export default function Testimonial() {
    return (
        <section className="py-24" style={{ background: 'var(--bg)' }}>
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Frame */}
                    <div className="scroll-reveal">
                        <div
                            className="relative rounded-2xl overflow-hidden"
                            style={{
                                boxShadow: 'var(--shadow-card)',
                                animation: 'float 6s ease-in-out infinite',
                            }}
                        >
                            <div
                                className="aspect-square bg-gradient-to-br flex items-center justify-center"
                                style={{
                                    background: `linear-gradient(135deg, var(--primary), var(--accent))`,
                                }}
                            >
                                <div className="text-white text-8xl">👤</div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="scroll-reveal" style={{ transitionDelay: '80ms' }}>
                        <div className="text-6xl mb-6" style={{ color: 'var(--primary)' }}>
                            "
                        </div>
                        <blockquote className="text-2xl lg:text-3xl font-semibold mb-6 leading-relaxed">
                            TechSpeed transformed our operations with their exceptional outsourcing services. The team is responsive, skilled, and truly understands our needs.
                        </blockquote>
                        <div>
                            <p className="font-semibold text-lg">Sarah Johnson</p>
                            <p className="text-[var(--text-muted)]">CEO, Innovation Corp</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
        </section>
    )
}
