import { Container, Facebook, Twitter, Youtube } from "lucide-react"

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 sm:p-6 lg:p-10 flex flex-col items-center justify-center">
            <aside className="text-center mb-4">
                <Container className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2" />
                <p className="font-bold text-sm sm:text-base mb-1">
                    VALENTIN
                    <span className="text-accent"> COLOMBAT</span>
                </p>
                <p className="text-xs sm:text-sm text-center">Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
            </aside>
            <nav className="flex justify-center">
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center justify-center">
                        <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-current" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center justify-center">
                        <Youtube className="w-5 h-5 sm:w-6 sm:h-6 text-current" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center justify-center">
                        <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-current" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer