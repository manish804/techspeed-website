import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import AIChatWidget from '@/components/AIChatWidget'
import HomePage from '@/pages/HomePage'
import SolutionsPage from '@/pages/SolutionsPage'
import WorkforcePage from '@/pages/WorkforcePage'
import ResourcesPage from '@/pages/ResourcesPage'
import AboutPage from '@/pages/AboutPage'
import SuccessStoriesPage from '@/pages/SuccessStoriesPage'
import ContactPage from '@/pages/ContactPage'
import CareersPage from '@/pages/CareersPage'
import BlogPage from '@/pages/BlogPage'
import BlogPostPage from '@/pages/BlogPostPage'
import PrivacyPage from '@/pages/PrivacyPage'
import DisclaimerPage from '@/pages/DisclaimerPage'

function AnimatedRoutes() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState('page-enter-active')

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('page-exit-active')
    }
  }, [location, displayLocation])

  useEffect(() => {
    if (transitionStage === 'page-exit-active') {
      const timer = setTimeout(() => {
        setDisplayLocation(location)
        setTransitionStage('page-enter')
      }, 150)

      return () => clearTimeout(timer)
    }
  }, [transitionStage, location])

  useEffect(() => {
    if (transitionStage === 'page-enter') {
      setTransitionStage('page-enter-active')
    }
  }, [transitionStage])

  return (
    <div className={transitionStage} style={{ minHeight: '100%' }}>
      <Routes location={displayLocation}>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/workforce" element={<WorkforcePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<DisclaimerPage />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
      <AIChatWidget />
    </Router>
  )
}

export default App
