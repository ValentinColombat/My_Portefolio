import { Container, Linkedin, Twitter, Youtube, Github, PackageCheck } from "lucide-react"
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

// Configuration des liens sociaux
const socialLinks = [
    { icon: Twitter, url: 'https://x.com/ValentinCo66146', label: 'Twitter' },
    { icon: Youtube, url: 'https://www.youtube.com/@ValentinColombat', label: 'YouTube' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/valentin-colombat/', label: 'LinkedIn' },
    { icon: Github, url: 'https://github.com/ValentinColombat', label: 'GitHub' },
    { icon: PackageCheck, url: 'https://www.malt.fr/', label: 'Malt' }
]

const Footer = () => {
    const { elementRef: footerRef, isVisible: footerVisible } = useIntersectionObserver({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <footer ref={footerRef} className={`footer footer-center p-4 sm:p-6 lg:p-10 flex flex-col items-center justify-center slide-in-bottom ${footerVisible ? 'visible' : ''}`}>
            <aside className="text-center mb-4">
                <Container className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2" />
                <p className="font-bold text-sm sm:text-base mb-1">
                    VALENTIN
                    <span className="text-accent"> COLOMBAT</span>
                </p>
                <p className="text-xs sm:text-sm text-center">Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
                <div className="mt-2">
                    <a href="mailto:valentincolombat@gmail.com" className="text-xs sm:text-sm hover:text-accent transition-colors underline">
                        valentincolombat@gmail.com
                    </a>
                </div>
            </aside>
            <nav className="flex justify-center">
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                    {socialLinks.map(({ icon: Icon, url, label }) => (
                        <a 
                            key={label}
                            href={url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="hover:text-accent transition-colors flex items-center justify-center"
                        >
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-current" />
                        </a>
                    ))}
                </div>
            </nav>
        </footer>
    )
}

export default Footer