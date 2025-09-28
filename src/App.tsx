import { Routes, Route } from 'react-router-dom'
import About from "./components/About";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Page d'accueil (portfolio complet)
function HomePage() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>
      <About />
      <div className="p-5 md:px-[15%]">
        <Experiences />
        <Projects/>
      </div>
      <Footer/>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}