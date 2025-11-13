import { useParams, Link } from 'react-router-dom'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function BlogPostPage() {
    const { slug } = useParams()
    const [articleRef, articleVisible] = useScrollAnimation({ threshold: 0.12, triggerOnce: true })

    return (
        <div className="pt-20">
            <article className="py-24 bg-white">
                <div className="max-w-[800px] mx-auto px-8">
                    <Link to="/blog" className="text-[#A855F7] hover:underline mb-8 inline-block">
                        ← Back to Blog
                    </Link>
                    <div className="text-sm text-[#A855F7] font-semibold mb-4">Industry Insights</div>
                    <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>
                        Blog Post Title {slug}
                    </h1>
                    <div className="flex items-center gap-4 text-gray-600 mb-12">
                        <span>Jan 15, 2024</span>
                        <span>•</span>
                        <span>5 min read</span>
                    </div>
                    <div ref={articleRef} className={`prose prose-lg max-w-none scroll-animate ${articleVisible ? 'visible' : ''}`}>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            This is a sample blog post. In a real implementation, you would fetch the actual content based on the slug parameter.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </article>
        </div>
    )
}
