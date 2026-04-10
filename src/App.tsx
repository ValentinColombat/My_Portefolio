import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { LoadingProvider } from './context/LoadingContext'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import About from "./components/About";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import TechBanner from "./components/TechBanner";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";
import ProjectDetailPortfolio from "./components/ProjectDetailPortfolio";

// Page d'accueil (portfolio complet)
function HomePage() {
  return (
    <div>
      {/* Hero plein écran avec navbar intégrée */}
      <Home />

      {/* Bandeau tech défilant */}
      <TechBanner />

      {/* Sections */}
      <div className="section-white">
        <div className="px-5 md:px-[12%] pt-2 pb-2">
          <Projects />
        </div>
      </div>
      <CTASection />
      <div className="section-white">
        <About />
      </div>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LoadingProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/upnews" element={<ProjectDetail />} />
        <Route path="/projects/portfolio" element={<ProjectDetailPortfolio />} />
      </Routes>
    </LoadingProvider>
  )
}
