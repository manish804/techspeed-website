import Hero from '@/components/Hero'
import ClientLogos from '@/components/ClientLogos'
import TrustBadges from '@/components/TrustBadges'
import IntroductionSection from '@/components/IntroductionSection'
import Features from '@/components/Features'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import BuildTeamSection from '@/components/BuildTeamSection'
import WhySuryonexSection from '@/components/WhySuryonexSection'
import SecuritySection from '@/components/SecuritySection'
import StatsSection from '@/components/StatsSection'
import CTA from '@/components/CTA'

export default function HomePage() {
    return (
        <>
            <Hero />
            <ClientLogos />
            <TrustBadges />
            <IntroductionSection />
            <Services />
            <Testimonials />
            <BuildTeamSection />
            <WhySuryonexSection />
            <SecuritySection />
            <StatsSection />
            <CTA />
        </>
    )
}
