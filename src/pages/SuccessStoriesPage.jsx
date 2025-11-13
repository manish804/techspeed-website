import { UserIcon, BriefcaseIcon, SuitIcon, GraduationIcon, ChartIcon, TrendingIcon } from '@/components/Icons'
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation'
import { useParallax } from '@/hooks/useParallax'

export default function SuccessStoriesPage() {
    const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.12, triggerOnce: true })
    const { getItemRef, getItemStyle } = useStaggeredAnimation(120)
    const parallaxOffset = useParallax(0.1)
    const stories = [
        {
            company: 'Rajiv Chegu',
            industry: 'Strategy and New Business',
            challenge: '',
            solution: '',
            results: [],
            testimonial: 'I would not work with any other service provider. The best part of working with Suryonex is they provide you with flexibility. My advice for anyone considering Suryonex is pretty straightforward. Do it.',
            author: 'Rajiv Chegu',
            Icon: UserIcon
        },
        {
            company: 'Wacom Technology Services Corp.',
            industry: 'Technology Services',
            challenge: '',
            solution: '',
            results: [],
            testimonial: 'We have been using Suryonex since 2005 for our data processing. They have consistently delivered data in a quick and thorough manner I honestly cannot think of a single incident where our information was late or delivered with errors. Working with them has been an easy and seamless transaction. I would happily recommend Suryonex to any company in need of data services.',
            author: 'Elizabeth Gilmore',
            Icon: BriefcaseIcon
        },
        {
            company: 'Brian Kent',
            industry: 'COO',
            challenge: '',
            solution: '',
            results: [],
            testimonial: "I'm honestly not sure how I first found Suryonex, probably a Google search many years ago. All I can say is that Suryonex has been a blessing. I give them clear instructions on what I need, and they do the rest, quickly, efficiently and accurately. And if I'm not sure how to accomplish the goal, they come in with suggestions on how to achieve my goal.",
            author: 'Brian Kent, COO',
            Icon: SuitIcon
        },
        {
            company: 'Harvard University',
            industry: 'Education',
            challenge: '',
            solution: '',
            results: [],
            testimonial: 'We have worked with Suryonex since 2007 and they have greatly increased our efficiency in communicating with prospective students. In the past, it would take months for us to input, but with Suryonex\'s help, we can get student data into our system much faster.',
            author: 'Kelly Groves, Associate Director of IP',
            Icon: GraduationIcon
        },
        {
            company: 'Denise Burns',
            industry: 'Founding Partner',
            challenge: '',
            solution: '',
            results: [],
            testimonial: 'Suryonex deftly grasped the core requirements and efficiently delivers a research reports of the utmost caliber to fulfill the stated need. Using a strategic and established workflow, they maintain a rapid pace and deliver well within the budget.',
            author: 'Denise Burns, Founding Partner',
            Icon: ChartIcon
        },
        {
            company: 'JDXpert',
            industry: 'Data Management',
            challenge: '',
            solution: '',
            results: [],
            testimonial: 'Suryonex swiftly got us through a busy season when we were backed up on data entry projects. They went above and beyond to exceed our expectations for sooner-than-expected delivery. Their QA is spot-on and very thorough. Suryonex has been so great to work with!',
            author: 'Diane Ernstsson, Manager at JDXpert',
            Icon: TrendingIcon
        }
    ]

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#F5F3FF] to-white py-24 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full bg-[#A855F7]/10 blur-2xl" style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}></div>
                <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                    <div ref={heroRef} className={`max-w-3xl scroll-animate ${heroVisible ? 'visible' : ''}`}>
                        <h1 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk', color: '#0A0A0A' }}>
                            Success Stories
                        </h1>
                        <p className="text-xl text-gray-600">
                            See how we've helped businesses like yours achieve their goals through our outsourcing solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-[#2D1B3D] text-white">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk' }}>500+</div>
                            <div className="text-white/80">Happy Clients</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk' }}>98%</div>
                            <div className="text-white/80">Satisfaction Rate</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk' }}>60%</div>
                            <div className="text-white/80">Avg Cost Savings</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk' }}>24/7</div>
                            <div className="text-white/80">Support Available</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="space-y-24">
                        {stories.map((story, index) => (
                            <div key={story.company} ref={getItemRef(index)} style={getItemStyle(index)} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="mb-6 text-[#A855F7]">
                                        <story.Icon className="w-16 h-16" />
                                    </div>
                                    <div className="text-sm text-[#A855F7] font-semibold mb-2">{story.industry}</div>
                                    <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>
                                        {story.company}
                                    </h2>

                                    <div className="space-y-6">
                                        {story.challenge && (
                                            <div>
                                                <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: 'Space Grotesk' }}>Challenge</h3>
                                                <p className="text-gray-600">{story.challenge}</p>
                                            </div>
                                        )}
                                        {story.solution && (
                                            <div>
                                                <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: 'Space Grotesk' }}>Solution</h3>
                                                <p className="text-gray-600">{story.solution}</p>
                                            </div>
                                        )}
                                        {story.results && story.results.length > 0 && (
                                            <div>
                                                <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: 'Space Grotesk' }}>Results</h3>
                                                <ul className="space-y-2">
                                                    {story.results.map((result) => (
                                                        <li key={result} className="flex items-center gap-2 text-gray-700">
                                                            <span className="text-[#A855F7]">✓</span>
                                                            {result}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="bg-[#F5F3FF] rounded-2xl p-8 card-elevated rounded-transition">
                                        <div className="text-4xl mb-4">"</div>
                                        <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                                            {story.testimonial}
                                        </p>
                                        <div className="border-t border-gray-300 pt-4">
                                            <p className="font-semibold" style={{ fontFamily: 'Space Grotesk' }}>{story.author}</p>
                                            <p className="text-sm text-gray-600">{story.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
