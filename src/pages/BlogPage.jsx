import { Link } from 'react-router-dom'
import { PencilIcon } from '@/components/Icons'
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation'
import { useParallax } from '@/hooks/useParallax'

export default function BlogPage() {
    const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.12, triggerOnce: true })
    const { getItemRef, getItemStyle } = useStaggeredAnimation(120)
    const parallaxOffset = useParallax(0.1)
    const posts = [
        { id: 1, title: 'The Future of Outsourcing in 2024', category: 'Industry Insights', date: 'Jan 15, 2024', readTime: '5 min' },
        { id: 2, title: 'How AI is Transforming Customer Service', category: 'Technology', date: 'Jan 12, 2024', readTime: '7 min' },
        { id: 3, title: '10 Ways to Optimize Your Back Office', category: 'Business Tips', date: 'Jan 10, 2024', readTime: '6 min' },
        { id: 4, title: 'Data Security in Outsourcing', category: 'Security', date: 'Jan 8, 2024', readTime: '8 min' },
        { id: 5, title: 'Building Effective Remote Teams', category: 'Management', date: 'Jan 5, 2024', readTime: '5 min' },
        { id: 6, title: 'Cost Savings Through Outsourcing', category: 'Business Tips', date: 'Jan 3, 2024', readTime: '6 min' }
    ]

    return (
        <div className="pt-20">
            <section className="bg-gradient-to-br from-[#F5F3FF] to-white py-24 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full bg-[#A855F7]/10 blur-2xl" style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}></div>
                <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                    <div ref={heroRef} className={`scroll-animate ${heroVisible ? 'visible' : ''}`}>
                        <h1 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>Blog</h1>
                        <p className="text-xl text-gray-600">Insights, tips, and industry news</p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <Link key={post.id} to={`/blog/${post.id}`} className="group" ref={getItemRef(index)} style={getItemStyle(index)}>
                                <div className="bg-[#F5F3FF] rounded-2xl overflow-hidden card-elevated rounded-transition">
                                    <div className="h-48 bg-gradient-to-br from-[#A855F7] to-[#2D1B3D] flex items-center justify-center">
                                        <PencilIcon className="w-20 h-20 text-white" />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-sm text-[#A855F7] font-semibold mb-2">{post.category}</div>
                                        <h3 className="text-xl font-semibold mb-2 group-hover:text-[#A855F7] transition-colors" style={{ fontFamily: 'Space Grotesk' }}>
                                            {post.title}
                                        </h3>
                                        <div className="text-sm text-gray-500">{post.readTime} read • {post.date}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
