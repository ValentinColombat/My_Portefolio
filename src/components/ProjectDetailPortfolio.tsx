import { ArrowLeft, MousePointer, Star, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import img3 from '../assets/projects/back_boutique.png'

const stats = [
    { value: '3 sec', label: 'C\'est le temps qu\'un visiteur prend pour se faire une première impression de votre site' },
    { value: '75%', label: 'des utilisateurs jugent la crédibilité d\'une entreprise sur son site web' },
    { value: '+40%', label: 'de contacts supplémentaires en moyenne avec un site moderne et optimisé' },
]

const features = [
    {
        number: '01',
        icon: MousePointer,
        title: 'Un design qui convertit',
        description: 'Chaque élément est pensé pour guider votre visiteur vers une action : vous appeler, vous écrire, prendre rendez-vous. Pas juste beau, efficace.',
    },
    {
        number: '02',
        icon: Star,
        title: 'Une identité qui vous ressemble',
        description: 'Couleurs, typographie, ton éditorial : tout est construit autour de votre personnalité et de votre clientèle cible. Vous n\'avez pas un site générique, vous avez le vôtre.',
    },
    {
        number: '03',
        icon: TrendingUp,
        title: 'Visible sur Google',
        description: 'Un site rapide, bien structuré et optimisé pour le référencement naturel. Votre futur client vous trouve avant vos concurrents.',
    },
]

const inclus = [
    'Design sur-mesure adapté à votre activité',
    'Site responsive, parfait sur mobile, tablette et desktop',
    'Formulaire de contact fonctionnel',
    'Optimisation SEO de base pour Google',
    'Animations fluides et expérience soignée',
    'Livraison et mise en ligne incluses',
]

const ProjectDetailPortfolio = () => {
    const { elementRef: heroRef,     isVisible: heroVisible     } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })
    const { elementRef: statsRef,    isVisible: statsVisible    } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })
    const { elementRef: problemRef,  isVisible: problemVisible  } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })
    const { elementRef: featuresRef, isVisible: featuresVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })
    const { elementRef: incluRef,    isVisible: incluVisible    } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })

    return (
        <div className="min-h-screen bg-white">

            {/* Nav */}
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className="px-5 md:px-[12%] py-4 flex items-center justify-between">
                    <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Retour
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center">
                            <span className="text-white text-xs font-black">K</span>
                        </div>
                        <span className="font-black text-sm tracking-tight">kodo</span>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <div ref={heroRef} className={`slide-in-bottom ${heroVisible ? 'visible' : ''}`}>
                <div className="px-5 md:px-[12%] pt-14 pb-10">
                    <div className="flex flex-col lg:flex-row gap-14 items-center">

                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest">Mon Site Vitrine</span>
                                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    En ligne
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.05] mb-4">
                                Votre vitrine<br />
                                <span className="text-amber-500">ouverte</span> 24h/24.
                            </h1>

                            <p className="text-gray-500 text-xl leading-relaxed mb-10 max-w-lg font-light">
                                Un site qui travaille pour vous pendant que vous dormez. Chaque visiteur, une opportunité.
                            </p>

                            <div className="flex items-center gap-3">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                                    style={{ background: 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)' }}
                                >
                                    Obtenir le mien →
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                                <img src={img3} alt="Site vitrine" className="w-full h-auto block" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div ref={statsRef} className={`bg-gray-900 py-14 slide-in-bottom ${statsVisible ? 'visible' : ''}`}>
                <div className="px-5 md:px-[12%]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {stats.map(({ value, label }, i) => (
                            <div key={i} className={`text-center stagger-${i + 1}`}>
                                <p className="text-5xl font-black text-amber-400 mb-3">{value}</p>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Problème */}
            <div ref={problemRef} className={`px-5 md:px-[12%] py-20 slide-in-bottom ${problemVisible ? 'visible' : ''}`}>
                <div className="max-w-3xl">
                    <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-4">Le constat</p>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">
                        Un mauvais site, c'est pire<br className="hidden md:block" /> que pas de site du tout.
                    </h2>
                    <div className="space-y-5 text-gray-500 text-lg leading-relaxed font-light">
                        <p>
                            Votre site est souvent le <strong className="text-gray-800 font-semibold">premier contact</strong> qu'un client potentiel a avec vous. Avant de vous appeler, avant de vous rencontrer, il vous a déjà jugé en ligne.
                        </p>
                        <p>
                            Un design vieillissant, un site qui s'affiche mal sur mobile ou un formulaire de contact qui ne répond pas : autant de raisons silencieuses pour lesquelles vos visiteurs partent chez un concurrent.
                        </p>
                        <p className="text-amber-600 font-medium italic border-l-4 border-amber-400 pl-5">
                            Et si votre site devenait votre meilleur commercial, disponible à toute heure, sans congés ?
                        </p>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="bg-amber-50 py-20">
                <div ref={featuresRef} className={`px-5 md:px-[12%] slide-in-bottom ${featuresVisible ? 'visible' : ''}`}>
                    <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-4">Ce que vous obtenez</p>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-14">Un site pensé pour vos clients,<br className="hidden md:block" /> pas pour les développeurs.</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {features.map(({ number, icon: Icon, title, description }, i) => (
                            <div key={i} className={`stagger-${i + 1}`}>
                                <p className="text-6xl font-black text-amber-500 mb-2 leading-none">{number}</p>
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="font-black text-gray-900 text-xl">{title}</h3>
                                </div>
                                <p className="text-gray-500 leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Ce qui est inclus */}
            <div ref={incluRef} className={`px-5 md:px-[12%] py-20 slide-in-bottom ${incluVisible ? 'visible' : ''}`}>
                <div className="flex flex-col lg:flex-row gap-14 items-start">
                    <div className="lg:w-1/2">
                        <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-4">La livraison</p>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                            Tout ce dont vous avez besoin,<br />rien de superflu.
                        </h2>
                        <p className="text-gray-500 leading-relaxed text-lg font-light">
                            Un projet clé en main, de la conception à la mise en ligne. Vous vous concentrez sur votre métier, je m'occupe du reste.
                        </p>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <ul className="space-y-4">
                            {inclus.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="w-2 h-2 rounded-full bg-amber-500 block"></span>
                                    </span>
                                    <span className="text-gray-700 text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div style={{ backgroundColor: '#D4920A' }} className="py-16">
                <div className="px-5 md:px-[12%] text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Prêt à avoir un site qui vous ressemble ?</h2>
                    <p className="text-gray-900/70 mb-8 max-w-md mx-auto text-lg font-light">Un échange de 30 minutes suffit pour cerner votre besoin et vous proposer une solution adaptée.</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-700 transition-all duration-200"
                    >
                        Démarrer un projet →
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ProjectDetailPortfolio
