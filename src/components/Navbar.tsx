import { Container } from "lucide-react"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`navbar-modern flex justify-center md:justify-between items-center px-6 py-4 sticky top-4 z-50 mx-4 rounded-2xl ${isScrolled ? 'scrolled' : ''}`}>
            <a href="#"
                className="flex items-center font-bold text-3xl md:text-xl transition-all duration-300 hover:scale-[1.02]"
            >
                <Container className="mr-3 text-accent drop-shadow-lg" />
                VALENTIN 
                <span className="modern-gradient-text ml-1">COLOMBAT</span>
            </a>

            <ul className="hidden md:flex space-x-2">
                <li>
                    <a href="#Home"
                        className="nav-item-modern px-4 py-2 rounded-xl font-medium transition-all duration-300"
                    >
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#About"
                        className="nav-item-modern px-4 py-2 rounded-xl font-medium transition-all duration-300"
                    >
                        À propos
                    </a>
                </li>

                <li>
                    <a href="#Experiences"
                        className="nav-item-modern px-4 py-2 rounded-xl font-medium transition-all duration-300"
                    >
                        Expériences
                    </a>
                </li>

                <li>
                    <a href="#Projects"
                        className="nav-item-modern px-4 py-2 rounded-xl font-medium transition-all duration-300"
                    >
                        Projets
                    </a>
                </li>

            </ul>

        </div>
    )
}

export default Navbar