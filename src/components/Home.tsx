import { Mail } from "lucide-react"
import img from '../assets/projects/photo.jpg'

const Home = () => {
    return (
        <div id="Home" className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
            
            {/* Grille de fond moderne */}
            <div className="absolute inset-0 grid-background opacity-30"></div>
            
            {/* Éléments géométriques flottants */}
            <div className="absolute bottom-32 right-4 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500/15 to-transparent rounded-full floating-element-delayed"></div>
            <div className="absolute top-1/3 right-2 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500/20 to-transparent rounded-xl rotate-45 floating-element-slow"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
                    
                    {/* Contenu principal */}
                    <div className="space-y-8 md:order-1 order-2">
                        
                        {/* Badge de statut */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-white/70">Disponible pour nouveaux projets</span>
                        </div>

                        {/* Titre principal */}
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                                <span className="block text-white/40 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-2 tracking-widest uppercase">
                                    Valentin Colombat
                                </span>
                                <span className="hero-gradient-text block">Creative</span>
                                <span className="text-white block">Developer</span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-base sm:text-lg lg:text-xl text-white/60 leading-relaxed max-w-lg font-light">
                            Je transforme des idées complexes en 
                            <span className="text-orange-400 font-medium"> expériences digitales </span>
                            exceptionnelles et performantes.
                        </p>

                        {/* Statistiques */}
                        <div className="flex gap-4 sm:gap-6 lg:gap-8 pt-4">
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl font-bold text-orange-400">5+</div>
                                <div className="text-xs sm:text-sm text-white/50">Frameworks</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl font-bold text-orange-400">10+</div>
                                <div className="text-xs sm:text-sm text-white/50">Projets</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl font-bold text-orange-400">100%</div>
                                <div className="text-xs sm:text-sm text-white/50">Impliqué</div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <a href="#Projects" className="btn-ultra-modern group">
                                <span>Explorer mon travail</span>
                                <div className="btn-arrow">→</div>
                            </a>
                            <a href="#" className="btn-minimal group">
                                <span>Commencer un projet</span>
                                <Mail className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>

                    </div>

                    {/* Visuel moderne */}
                    <div className="md:order-2 order-1 relative flex justify-end">
                        <div className="relative w-full max-w-md">
                            
                            {/* Cadre principal avec image */}
                            <div className="hero-card group">
                                <div className="hero-card-inner">
                                    <img 
                                        src={img} 
                                        alt="Valentin Colombat" 
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay interactif */}
                                    <div className="hero-overlay">
                                        <div className="text-center text-white">
                                            <div className="text-sm font-medium mb-2">Full Stack Developer</div>
                                            <div className="flex justify-center gap-2">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Éléments décoratifs */}
                            <div className="absolute -top-6 -right-6 w-12 h-12 bg-orange-400/20 rounded-xl rotate-12 backdrop-blur-sm"></div>
                            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-400/20 rounded-full backdrop-blur-sm"></div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home