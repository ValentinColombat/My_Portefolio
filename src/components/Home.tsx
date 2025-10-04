import { Mail } from "lucide-react"
import img from '../assets/projects/test 11.png'
import imgMobile from '../assets/projects/7.png'
import { generateGeometricShapes, getShapeClasses, getShapeStyle } from '../utils/geometricShapes';

// Configuration de la barre d'énergie
const energyBars = [
    { height: 'h-2', delay: '0s', duration: '1.2s' },
    { height: 'h-3', delay: '0.1s', duration: '1.5s' },
    { height: 'h-4', delay: '0.2s', duration: '1.1s' },
    { height: 'h-3.5', delay: '0.05s', duration: '1.4s' },
    { height: 'h-2.5', delay: '0.15s', duration: '1.3s' },
    { height: 'h-3', delay: '0.25s', duration: '1.6s' }
];

// Configuration des statistiques
const stats = [
    { value: '8+', label: 'Frameworks' },
    { value: '10+', label: 'Projets' }
];

// Génération des formes géométriques (seed fixe pour reproductibilité)
const geometricShapes = generateGeometricShapes(50, 40);
const shapesBehind = geometricShapes.filter(s => s.zIndex === 'behind');
const shapesFront = geometricShapes.filter(s => s.zIndex === 'front');

const Home = () => {
    return (
        <div id="Home" className="relative py-12 md:py-20 lg:py-32 flex items-center justify-center overflow-hidden">
            
            {/* Grille de fond moderne */}
            <div className="absolute inset-0 grid-background opacity-30"></div>
            
            {/* Éléments géométriques flottants */}
            <div className="absolute bottom-32 right-4 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500/15 to-transparent rounded-full floating-element-delayed"></div>
            <div className="absolute top-1/3 right-2 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500/20 to-transparent rounded-xl rotate-45 floating-element-slow"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
                    
                    {/* Contenu principal */}
                    <div className="space-y-4 md:space-y-8 md:order-1 order-2">
                        
                        {/* Badge de statut */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-white/70">Disponible pour nouveaux projets</span>
                        </div>

                        {/* Titre principal */}
                        <div className="space-y-2 md:space-y-4">
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
                            Je créé des
                            <span className="text-orange-400 font-medium"> solutions web </span>
                            avec rigueur et passion.
                        </p>

                        {/* Statistiques */}
                        <div className="flex gap-4 sm:gap-6 lg:gap-8 pt-2 md:pt-4">
                            {/* Statistiques simples */}
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-xl sm:text-2xl font-bold text-orange-400">{stat.value}</div>
                                    <div className="text-xs sm:text-sm text-white/50">{stat.label}</div>
                                </div>
                            ))}
                            
                            {/* Statistique Energie avec barre animée */}
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="text-xl sm:text-2xl font-bold text-orange-400">100%</div>
                                    {/* Barre d'énergie avec visualiseur audio */}
                                    <div className="flex items-end gap-0.5 h-4">
                                        {energyBars.map((bar, index) => (
                                            <div 
                                                key={index}
                                                className={`w-0.5 ${bar.height} bg-gradient-to-t from-orange-500 to-orange-300 rounded-full animate-pulse`}
                                                style={{animationDelay: bar.delay, animationDuration: bar.duration}}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="text-xs sm:text-sm text-white/50">Energie</div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-3 md:pt-6">
                            <a href="#Projects" className="btn-ultra-modern group">
                                <span>Explorer mon travail</span>
                                <div className="btn-arrow">→</div>
                            </a>
                            <a href="/contact" className="btn-minimal group">
                                <span>Commencer un projet</span>
                                <Mail className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>

                    </div>

                    {/* Visuel moderne */}
                    <div className="md:order-2 order-1 relative flex justify-end">
                        <div className="relative w-full max-w-md">
                            
                            {/* Image avec explosion géométrique */}
                            <div className="relative z-10">
                                {/* Explosion de formes géométriques en arrière-plan - côté gauche uniquement */}
                                <div className="absolute inset-0 -z-20">
                                    
                                    {/* Formes qui passent derrière l'image (fond transparent) */}
                                    <div className="absolute inset-0 -z-30">
                                        {shapesBehind.map((shape) => (
                                            <div
                                                key={`behind-${shape.id}`}
                                                className={getShapeClasses(shape)}
                                                style={getShapeStyle(shape)}
                                            />
                                        ))}
                                    </div>
                                    
                                    {/* Formes devant (entre le fond et l'image) */}
                                    {shapesFront.map((shape) => (
                                        <div
                                            key={`front-${shape.id}`}
                                            className={getShapeClasses(shape)}
                                            style={getShapeStyle(shape)}
                                        />
                                    ))}
                                </div>
                                
                                {/* Image principale qui "sort" du fond */}
                                <div className="relative group">
                                    {/* Image mobile - visible uniquement sur petits écrans */}
                                    <img 
                                        src={imgMobile} 
                                        alt="Valentin Colombat" 
                                        className="w-full h-auto rounded-2xl object-cover hero-image-3d relative z-10 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/25 md:hidden"
                                    />
                                    {/* Image desktop - visible uniquement sur grands écrans */}
                                    <img 
                                        src={img} 
                                        alt="Valentin Colombat" 
                                        className="w-full h-auto rounded-2xl object-cover hero-image-3d relative z-10 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/25 hidden md:block"
                                    />
                                    {/* Liseré orange au survol */}
                                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-400/60 transition-all duration-500 z-20 pointer-events-none group-hover:shadow-lg group-hover:shadow-orange-500/30"></div>
                                    {/* Glow effect subtil */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 pointer-events-none bg-gradient-to-r from-orange-500/10 via-transparent to-amber-500/10 group-hover:animate-pulse"></div>
                                </div>
                            </div>


                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home