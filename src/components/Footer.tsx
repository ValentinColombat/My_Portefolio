import { Linkedin, Twitter, Youtube, GitBranch, PackageCheck } from "lucide-react"
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const socialLinks = [
    { icon: Twitter, url: 'https://x.com/ValentinCo66146', label: 'Twitter' },
    { icon: Youtube, url: 'https://www.youtube.com/@ValentinColombat', label: 'YouTube' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/valentin-colombat/', label: 'LinkedIn' },
    { icon: GitBranch, url: 'https://github.com/ValentinColombat', label: 'GitHub' },
    { icon: PackageCheck, url: 'https://www.malt.fr/', label: 'Malt' }
]

const Footer = () => {
    const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2, triggerOnce: true })

    return (
        <footer
            ref={elementRef}
            className={`slide-in-bottom ${isVisible ? 'visible' : ''}`}
            style={{ backgroundColor: '#D4920A', color: '#1A1A1A' }}
        >
            <div className="px-5 md:px-[12%] py-12">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                                <span className="text-xs font-black" style={{ color: '#FFFFFF' }}>K</span>
                            </div>
                            <span className="font-black text-base tracking-tight">kodo</span>
                        </div>
                        <p className="text-xs max-w-xs leading-relaxed" style={{ color: '#1A1A1A99' }}>
                            Développeur · Automatisation · IA
                        </p>
                    </div>

                    {/* Social + copyright */}
                    <div className="flex flex-col items-start md:items-end gap-4">
                        <div className="flex items-center gap-5">
                            {socialLinks.map(({ icon: Icon, url, label }) => (
                                <a
                                    key={label}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="transition-colors duration-200 hover:opacity-100"
                                    style={{ color: '#1A1A1A99' }}
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                        <p className="text-xs" style={{ color: '#1A1A1A80' }}>
                            © {new Date().getFullYear()} Valentin Colombat
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid #1A1A1A30' }}>
                    <a
                        href="mailto:valentincolombat@gmail.com"
                        className="text-xs transition-colors duration-200"
                        style={{ color: '#1A1A1A99' }}
                    >
                        valentincolombat@gmail.com
                    </a>
                    <p className="text-xs" style={{ color: '#1A1A1A80' }}>Tous droits réservés</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
