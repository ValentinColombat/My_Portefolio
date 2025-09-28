import { Mail } from "lucide-react"
import img from '../assets/projects/test 11.png'

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
                            Je créé des
                            <span className="text-orange-400 font-medium"> solutions web </span>
                            avec rigueur et passion.
                        </p>

                        {/* Statistiques */}
                        <div className="flex gap-4 sm:gap-6 lg:gap-8 pt-4">
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl font-bold text-orange-400">8+</div>
                                <div className="text-xs sm:text-sm text-white/50">Frameworks</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl font-bold text-orange-400">10+</div>
                                <div className="text-xs sm:text-sm text-white/50">Projets</div>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="text-xl sm:text-2xl font-bold text-orange-400">100%</div>
                                    {/* Barre d'énergie avec visualiseur audio */}
                                    <div className="flex items-end gap-0.5 h-4">
                                        <div className="w-0.5 h-2 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full animate-pulse" style={{animationDelay: '0s', animationDuration: '1.2s'}}></div>
                                        <div className="w-0.5 h-3 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full animate-pulse" style={{animationDelay: '0.1s', animationDuration: '1.5s'}}></div>
                                        <div className="w-0.5 h-4 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full animate-pulse" style={{animationDelay: '0.2s', animationDuration: '1.1s'}}></div>
                                        <div className="w-0.5 h-3.5 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full animate-pulse" style={{animationDelay: '0.05s', animationDuration: '1.4s'}}></div>
                                        <div className="w-0.5 h-2.5 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full animate-pulse" style={{animationDelay: '0.15s', animationDuration: '1.3s'}}></div>
                                        <div className="w-0.5 h-3 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full animate-pulse" style={{animationDelay: '0.25s', animationDuration: '1.6s'}}></div>
                                    </div>
                                </div>
                                <div className="text-xs sm:text-sm text-white/50">Energie</div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
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
                                        {/* Cercles en mouvement lent derrière l'image */}
                                        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-orange-400/35 to-amber-400/35 rounded-full opacity-40 animate-pulse blur-sm" style={{animationDuration: '12s', animationDelay: '1s'}}></div>
                                        <div className="absolute bottom-1/3 left-1/3 w-18 h-18 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full opacity-35 animate-pulse blur-sm" style={{animationDuration: '15s', animationDelay: '3s'}}></div>
                                        <div className="absolute top-1/2 left-1/2 w-22 h-22 bg-gradient-to-br from-purple-400/25 to-violet-400/25 rounded-full opacity-30 animate-pulse blur-sm" style={{animationDuration: '18s', animationDelay: '2s'}}></div>
                                        
                                        {/* Triangles rotatifs derrière l'image */}
                                        <div className="absolute top-1/3 left-2/5 w-0 h-0 border-l-[25px] border-r-[25px] border-b-[40px] border-l-transparent border-r-transparent border-b-orange-400/40 opacity-35 animate-spin blur-sm" style={{animationDuration: '20s', animationDelay: '4s'}}></div>
                                        <div className="absolute bottom-1/4 left-1/4 w-0 h-0 border-l-[22px] border-r-[22px] border-b-[38px] border-l-transparent border-r-transparent border-b-green-400/45 opacity-30 animate-spin blur-sm" style={{animationDuration: '25s', animationDirection: 'reverse', animationDelay: '1s'}}></div>
                                        
                                        {/* Carrés en rotation lente derrière l'image */}
                                        <div className="absolute top-2/3 left-1/3 w-16 h-16 bg-gradient-to-br from-purple-300/30 to-indigo-400/30 rotate-45 opacity-35 animate-spin blur-sm" style={{animationDuration: '30s', animationDelay: '2s'}}></div>
                                        <div className="absolute top-1/4 left-3/5 w-14 h-14 bg-gradient-to-br from-orange-300/35 to-red-400/35 rotate-12 opacity-30 animate-pulse blur-sm" style={{animationDuration: '16s', animationDelay: '5s'}}></div>
                                        
                                        {/* Hexagones derrière l'image */}
                                        <div className="absolute bottom-1/2 left-1/4 w-14 h-14 bg-gradient-to-br from-green-400/35 to-teal-500/35 opacity-35 animate-pulse blur-sm" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '3s', animationDuration: '22s'}}></div>
                                        <div className="absolute top-3/4 left-1/2 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-violet-400/30 opacity-30 animate-pulse blur-sm" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '6s', animationDuration: '26s'}}></div>
                                        
                                        {/* Particules flottantes derrière l'image */}
                                        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-orange-300/40 rounded-full opacity-25 animate-pulse blur-sm" style={{animationDelay: '2s', animationDuration: '14s'}}></div>
                                        <div className="absolute bottom-1/3 left-2/3 w-3 h-3 bg-green-300/35 rounded-full opacity-30 animate-pulse blur-sm" style={{animationDelay: '4s', animationDuration: '17s'}}></div>
                                        <div className="absolute top-2/3 left-1/2 w-5 h-5 bg-purple-300/30 rounded-full opacity-25 animate-pulse blur-sm" style={{animationDelay: '1s', animationDuration: '19s'}}></div>
                                        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-amber-300/40 rounded-full opacity-30 animate-pulse blur-sm" style={{animationDelay: '6s', animationDuration: '15s'}}></div>
                                        

                                    </div>
                                    {/* Cercles explosifs - côté gauche */}
                                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-500/50 to-amber-500/50 rounded-full opacity-35 animate-pulse blur-sm" style={{animationDuration: '8s'}}></div>
                                    <div className="absolute -top-10 -left-12 w-12 h-12 bg-gradient-to-br from-green-500/45 to-emerald-500/45 rounded-full opacity-30 animate-pulse blur-sm" style={{animationDelay: '2s', animationDuration: '10s'}}></div>
                                    <div className="absolute top-1/4 -left-8 w-10 h-10 bg-gradient-to-br from-purple-500/45 to-violet-500/45 rounded-full opacity-40 animate-pulse blur-sm" style={{animationDelay: '4s', animationDuration: '12s'}}></div>
                                    
                                    {/* Formes en haut - réparties */}
                                    <div className="absolute -top-20 -left-6 w-10 h-10 bg-gradient-to-br from-orange-400/40 to-red-400/40 rounded-full opacity-25 animate-pulse blur-sm" style={{animationDuration: '15s', animationDelay: '1s'}}></div>
                                    <div className="absolute -top-16 -left-14 w-6 h-6 bg-gradient-to-br from-green-400/45 to-teal-400/45 rounded-full opacity-30 animate-pulse blur-sm" style={{animationDuration: '18s', animationDelay: '3s'}}></div>
                                    <div className="absolute -top-24 -left-20 w-8 h-8 bg-gradient-to-br from-purple-400/35 to-indigo-400/35 rounded-full opacity-20 animate-pulse blur-sm" style={{animationDuration: '20s', animationDelay: '5s'}}></div>
                                    <div className="absolute -top-18 left-1/4 w-7 h-7 bg-gradient-to-br from-orange-300/40 to-amber-400/40 rounded-full opacity-25 animate-pulse blur-sm" style={{animationDuration: '17s', animationDelay: '2s'}}></div>
                                    <div className="absolute -top-22 left-1/2 w-5 h-5 bg-gradient-to-br from-green-500/35 to-emerald-400/35 rounded-full opacity-30 animate-pulse blur-sm" style={{animationDuration: '19s', animationDelay: '4s'}}></div>
                                    <div className="absolute -top-14 left-3/4 w-9 h-9 bg-gradient-to-br from-purple-300/40 to-violet-400/40 rounded-full opacity-20 animate-pulse blur-sm" style={{animationDuration: '21s', animationDelay: '1.5s'}}></div>
                                    
                                    {/* Formes en bas - réparties */}
                                    <div className="absolute -bottom-18 -left-8 w-12 h-12 bg-gradient-to-br from-orange-400/45 to-amber-500/45 rounded-full opacity-30 animate-pulse blur-sm" style={{animationDuration: '14s', animationDelay: '2s'}}></div>
                                    <div className="absolute -bottom-22 -left-16 w-8 h-8 bg-gradient-to-br from-green-500/40 to-lime-500/40 rounded-full opacity-25 animate-pulse blur-sm" style={{animationDuration: '16s', animationDelay: '4s'}}></div>
                                    <div className="absolute -bottom-16 -left-10 w-10 h-10 bg-gradient-to-br from-purple-500/50 to-pink-500/50 rounded-full opacity-35 animate-pulse blur-sm" style={{animationDuration: '13s', animationDelay: '1.5s'}}></div>
                                    <div className="absolute -bottom-20 left-1/4 w-9 h-9 bg-gradient-to-br from-orange-500/40 to-red-400/40 rounded-full opacity-30 animate-pulse blur-sm" style={{animationDuration: '15s', animationDelay: '3s'}}></div>
                                    <div className="absolute -bottom-24 left-1/2 w-6 h-6 bg-gradient-to-br from-green-400/45 to-teal-500/45 rounded-full opacity-25 animate-pulse blur-sm" style={{animationDuration: '18s', animationDelay: '1s'}}></div>
                                    <div className="absolute -bottom-16 left-2/3 w-11 h-11 bg-gradient-to-br from-purple-400/40 to-indigo-500/40 rounded-full opacity-35 animate-pulse blur-sm" style={{animationDuration: '16s', animationDelay: '2.5s'}}></div>
                                    
                                    {/* Triangles dynamiques - côté gauche et répartis */}
                                    <div className="absolute -left-12 top-1/3 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-orange-500/45 opacity-30 animate-spin blur-sm" style={{animationDuration: '25s'}}></div>
                                    <div className="absolute -left-8 bottom-1/4 w-0 h-0 border-l-[18px] border-r-[18px] border-b-[30px] border-l-transparent border-r-transparent border-b-green-400/50 opacity-35 animate-spin blur-sm" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
                                    <div className="absolute -top-12 left-1/4 w-0 h-0 border-l-[18px] border-r-[18px] border-b-[30px] border-l-transparent border-r-transparent border-b-purple-500/45 opacity-30 animate-spin blur-sm" style={{animationDuration: '28s', animationDelay: '2s'}}></div>
                                    <div className="absolute -bottom-14 left-1/2 w-0 h-0 border-l-[16px] border-r-[16px] border-b-[28px] border-l-transparent border-r-transparent border-b-orange-400/50 opacity-35 animate-spin blur-sm" style={{animationDuration: '32s', animationDirection: 'reverse', animationDelay: '4s'}}></div>
                                    
                                    {/* Carrés rotatifs - côté gauche et répartis */}
                                    <div className="absolute -left-18 top-1/2 w-14 h-14 bg-gradient-to-br from-purple-400/35 to-violet-500/35 rotate-45 opacity-25 animate-spin blur-sm" style={{animationDuration: '35s'}}></div>
                                    <div className="absolute -left-10 -bottom-4 w-10 h-10 bg-gradient-to-br from-orange-500/40 to-red-500/40 rotate-12 opacity-30 animate-pulse blur-sm" style={{animationDuration: '17s'}}></div>
                                    <div className="absolute -top-12 left-2/3 w-12 h-12 bg-gradient-to-br from-green-400/35 to-teal-500/35 rotate-45 opacity-25 animate-spin blur-sm" style={{animationDuration: '33s', animationDelay: '3s'}}></div>
                                    <div className="absolute -bottom-8 left-1/3 w-8 h-8 bg-gradient-to-br from-purple-500/40 to-violet-500/40 rotate-12 opacity-30 animate-pulse blur-sm" style={{animationDuration: '19s', animationDelay: '1s'}}></div>
                                    
                                    {/* Hexagones - côté gauche et répartis */}
                                    <div className="absolute -bottom-8 -left-6 w-12 h-12 bg-gradient-to-br from-green-400/45 to-emerald-500/45 opacity-25 animate-pulse blur-sm" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '3s', animationDuration: '22s'}}></div>
                                    <div className="absolute -bottom-16 -left-20 w-8 h-8 bg-gradient-to-br from-purple-400/40 to-indigo-400/40 opacity-30 animate-pulse blur-sm" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '6s', animationDuration: '26s'}}></div>
                                    <div className="absolute -top-8 left-1/4 w-10 h-10 bg-gradient-to-br from-orange-400/45 to-amber-500/45 opacity-25 animate-pulse blur-sm" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '4s', animationDuration: '24s'}}></div>
                                    <div className="absolute -bottom-12 left-1/2 w-8 h-8 bg-gradient-to-br from-green-500/40 to-lime-500/40 opacity-30 animate-pulse blur-sm" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '7s', animationDuration: '27s'}}></div>
                                    
                                    {/* Losanges - côté gauche et répartis */}
                                    <div className="absolute top-3/4 -left-16 w-6 h-12 bg-gradient-to-b from-orange-300/45 to-amber-400/45 rotate-45 opacity-25 animate-spin blur-sm" style={{animationDuration: '28s'}}></div>
                                    <div className="absolute bottom-1/3 -left-22 w-8 h-16 bg-gradient-to-b from-green-400/40 to-teal-500/40 rotate-12 opacity-30 animate-pulse blur-sm" style={{animationDelay: '5s', animationDuration: '19s'}}></div>
                                    <div className="absolute -top-10 left-1/3 w-6 h-12 bg-gradient-to-b from-purple-300/45 to-violet-400/45 rotate-45 opacity-25 animate-spin blur-sm" style={{animationDuration: '30s', animationDelay: '2s'}}></div>
                                    <div className="absolute -bottom-10 left-3/4 w-8 h-16 bg-gradient-to-b from-orange-400/40 to-red-500/40 rotate-12 opacity-30 animate-pulse blur-sm" style={{animationDelay: '6s', animationDuration: '20s'}}></div>
                                    

                                    
                                    {/* Particules flottantes - côté gauche et réparties */}
                                    <div className="absolute -top-16 -left-12 w-2 h-2 bg-green-300/40 rounded-full opacity-20 animate-pulse blur-sm" style={{animationDelay: '2s', animationDuration: '15s'}}></div>
                                    <div className="absolute top-1/4 -left-28 w-3 h-3 bg-orange-300/45 rounded-full opacity-25 animate-pulse blur-sm" style={{animationDelay: '4s', animationDuration: '18s'}}></div>
                                    <div className="absolute bottom-1/4 -left-24 w-2 h-2 bg-purple-300/40 rounded-full opacity-30 animate-pulse blur-sm" style={{animationDelay: '6s', animationDuration: '20s'}}></div>
                                    <div className="absolute -bottom-10 -left-14 w-3 h-3 bg-green-400/35 rounded-full opacity-25 animate-pulse blur-sm" style={{animationDelay: '3s', animationDuration: '16s'}}></div>
                                    <div className="absolute -top-12 left-1/4 w-2 h-2 bg-orange-300/40 rounded-full opacity-20 animate-pulse blur-sm" style={{animationDelay: '5s', animationDuration: '17s'}}></div>
                                    <div className="absolute -top-18 left-1/2 w-3 h-3 bg-purple-300/45 rounded-full opacity-25 animate-pulse blur-sm" style={{animationDelay: '1s', animationDuration: '19s'}}></div>
                                    <div className="absolute -top-10 left-2/3 w-2 h-2 bg-green-300/40 rounded-full opacity-30 animate-pulse blur-sm" style={{animationDelay: '7s', animationDuration: '14s'}}></div>
                                    <div className="absolute -bottom-6 left-1/3 w-2 h-2 bg-green-300/40 rounded-full opacity-30 animate-pulse blur-sm" style={{animationDelay: '7s', animationDuration: '22s'}}></div>
                                    <div className="absolute -bottom-14 left-1/2 w-3 h-3 bg-orange-400/35 rounded-full opacity-25 animate-pulse blur-sm" style={{animationDelay: '4s', animationDuration: '18s'}}></div>
                                    <div className="absolute -bottom-18 left-3/4 w-2 h-2 bg-purple-300/40 rounded-full opacity-30 animate-pulse blur-sm" style={{animationDelay: '8s', animationDuration: '16s'}}></div>
                                </div>
                                
                                {/* Image principale qui "sort" du fond */}
                                <div className="relative group">
                                    <img 
                                        src={img} 
                                        alt="Valentin Colombat" 
                                        className="w-full h-auto rounded-2xl object-cover hero-image-3d relative z-10 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/25"
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