import { Link } from 'react-router-dom'
import { GuideIcon, CodeIcon, DocumentIcon, BookIcon, DownloadIcon, VideoIcon, CalendarIcon, ClockIcon, PencilIcon } from '@/components/Icons'

export default function ResourcesPage() {
    const resources = {
        whitepapers: [
            { title: 'The Future of Outsourcing in 2024', downloads: '2.5k', category: 'Industry Insights' },
            { title: 'AI-Powered Data Processing Guide', downloads: '1.8k', category: 'Technology' },
            { title: 'Cost Optimization Strategies', downloads: '3.2k', category: 'Business' }
        ],
        webinars: [
            { title: 'Scaling Your Business with Outsourcing', date: 'Jan 15, 2024', duration: '45 min' },
            { title: 'AI in Customer Service', date: 'Jan 22, 2024', duration: '60 min' },
            { title: 'Data Security Best Practices', date: 'Feb 5, 2024', duration: '50 min' }
        ],
        guides: [
            { title: 'Getting Started with Suryonex', Icon: GuideIcon, pages: '24 pages' },
            { title: 'API Documentation', Icon: CodeIcon, pages: '156 pages' },
            { title: 'Best Practices Guide', Icon: DocumentIcon, pages: '48 pages' }
        ]
    }

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#F5F3FF] to-white py-24">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                            Resources & Insights
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Explore our collection of whitepapers, webinars, guides, and industry insights to help you make informed decisions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Resource */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="bg-gradient-to-br from-[#A855F7] to-[#2D1B3D] rounded-3xl p-12 text-white">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-block px-4 py-2 bg-[#BFFF0B] text-[#0A0A0A] rounded-full text-sm font-semibold mb-4">
                                    Featured Resource
                                </div>
                                <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                                    Complete Guide to Business Process Outsourcing
                                </h2>
                                <p className="text-white/90 mb-6 text-lg">
                                    A comprehensive 80-page guide covering everything you need to know about modern outsourcing strategies, implementation, and best practices.
                                </p>
                                <button className="px-8 py-4 bg-[#BFFF0B] text-[#0A0A0A] rounded-lg font-semibold hover:opacity-90 transition-opacity">
                                    Download Free Guide →
                                </button>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center h-80">
                                <div className="text-center">
                                    <div className="mb-4 text-white flex justify-center">
                                        <BookIcon className="w-24 h-24" />
                                    </div>
                                    <p className="text-xl font-semibold">80 Pages</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Whitepapers */}
            <section className="py-24 bg-[#F5F3FF]">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                            Whitepapers
                        </h2>
                        <p className="text-lg text-gray-600">
                            In-depth research and analysis on industry trends
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {resources.whitepapers.map((paper) => (
                            <div key={paper.title} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                                <div className="mb-4 text-[#A855F7]">
                                    <DocumentIcon className="w-16 h-16" />
                                </div>
                                <div className="text-sm text-[#A855F7] font-semibold mb-2">{paper.category}</div>
                                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Space Grotesk' }}>
                                    {paper.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                                    <DownloadIcon className="w-4 h-4 text-[#A855F7]" />
                                    <span>{paper.downloads} downloads</span>
                                </div>
                                <button className="text-[#A855F7] font-semibold hover:underline">
                                    Download PDF →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Webinars */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                            Upcoming Webinars
                        </h2>
                        <p className="text-lg text-gray-600">
                            Join our live sessions with industry experts
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {resources.webinars.map((webinar) => (
                            <div key={webinar.title} className="bg-[#F5F3FF] rounded-2xl p-8 hover:shadow-lg transition-shadow">
                                <div className="mb-4 text-[#A855F7]">
                                    <VideoIcon className="w-16 h-16" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Space Grotesk' }}>
                                    {webinar.title}
                                </h3>
                                <div className="space-y-2 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-2">
                                        <CalendarIcon className="w-4 h-4 text-[#A855F7]" />
                                        <span>{webinar.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="w-4 h-4 text-[#A855F7]" />
                                        <span>{webinar.duration}</span>
                                    </div>
                                </div>
                                <button className="w-full py-3 bg-[#2D1B3D] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                                    Register Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guides & Documentation */}
            <section className="py-24 bg-[#F5F3FF]">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                            Guides & Documentation
                        </h2>
                        <p className="text-lg text-gray-600">
                            Everything you need to get started and succeed
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {resources.guides.map((guide) => (
                            <div key={guide.title} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                                <div className="mb-4 text-[#A855F7]">
                                    <guide.Icon className="w-16 h-16" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Space Grotesk' }}>
                                    {guide.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">{guide.pages}</p>
                                <button className="text-[#A855F7] font-semibold hover:underline">
                                    View Guide →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Preview */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="flex justify-between items-center mb-12">
                        <div>
                            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                                Latest from Our Blog
                            </h2>
                            <p className="text-lg text-gray-600">
                                Stay updated with industry news and insights
                            </p>
                        </div>
                        <Link
                            to="/blog"
                            className="text-[#A855F7] font-semibold hover:underline"
                        >
                            View All Posts →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <Link
                                key={i}
                                to={`/blog/post-${i}`}
                                className="group"
                            >
                                <div className="bg-[#F5F3FF] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="h-48 bg-gradient-to-br from-[#A855F7] to-[#2D1B3D] flex items-center justify-center">
                                        <PencilIcon className="w-20 h-20 text-white" />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-sm text-[#A855F7] font-semibold mb-2">Industry Insights</div>
                                        <h3 className="text-xl font-semibold mb-2 group-hover:text-[#A855F7] transition-colors" style={{ fontFamily: 'Space Grotesk' }}>
                                            Blog Post Title {i}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            A brief description of the blog post content goes here...
                                        </p>
                                        <div className="text-sm text-gray-500">5 min read • Jan {i}, 2024</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-24 bg-[#2D1B3D] text-white">
                <div className="max-w-[1400px] mx-auto px-8 text-center">
                    <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>
                        Stay Informed
                    </h2>
                    <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter for the latest resources, insights, and industry updates
                    </p>
                    <div className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-lg text-gray-900 outline-none"
                        />
                        <button className="px-8 py-4 bg-[#BFFF0B] text-[#0A0A0A] rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                            Subscribe →
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
