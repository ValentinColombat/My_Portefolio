import { ArrowLeft, ExternalLink, FileDown, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import img5 from '../assets/projects/back_upnews.webp'

const stats = [
    { value: '77%', label: 'des 18-24 ans consultent leur smartphone dès le réveil' },
    { value: '54%', label: 'des Français souffrent de fatigue informationnelle' },
    { value: '2 min', label: 'suffisent pour lire votre dose quotidienne UpNews' },
]

const features = [
    {
        number: '01',
        title: 'La Dose Quotidienne',
        description: 'Un format court et fini pour s\'informer sans s\'épuiser. Lecture complète en moins de 2 minutes. Plus besoin de scroller sans fin.',
    },
    {
        number: '02',
        title: 'Un Design Apaisant',
        description: 'Une interface épurée, sans publicités intrusives ni notifications anxiogènes, pour préserver la sérénité du réveil.',
    },
    {
        number: '03',
        title: 'La Qualité sur la Quantité',
        description: 'Pas d\'algorithme conçu pour vous retenir. Une fois les news lues, l\'expérience s\'arrête. Votre temps vous appartient.',
    },
]

const ProjectDetail = () => {
    const { elementRef: heroRef,     isVisible: heroVisible     } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })
    const { elementRef: statsRef,    isVisible: statsVisible    } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })
    const { elementRef: problemRef,  isVisible: problemVisible  } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })
    const { elementRef: solutionRef, isVisible: solutionVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })
    const { elementRef: featuresRef, isVisible: featuresVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })
    const { elementRef: quoteRef,    isVisible: quoteVisible    } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })

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
                                <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest">App Mobile · 2026</span>
                                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    En ligne
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.05] mb-4">
                                L'application qui<br />
                                <span className="text-amber-500">préserve</span> ton énergie.
                            </h1>

                            <p className="text-gray-500 text-xl leading-relaxed mb-10 max-w-lg font-light">
                                Le média positif pour en finir avec la fatigue informationnelle.
                            </p>

                            <div className="flex items-center gap-3">
                                <a
                                    href="https://apps.apple.com/fr/app/upnews/id6759056393"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-700 transition-all duration-200"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Tester UpNews
                                </a>
                                <a
                                    href="/dossier-presse.pdf"
                                    download
                                    className="inline-flex items-center gap-2 px-5 py-3 border border-gray-200 text-gray-600 text-sm font-medium rounded-xl hover:border-gray-300 hover:text-gray-900 transition-all duration-200"
                                >
                                    <FileDown className="w-4 h-4" />
                                    Dossier de presse
                                </a>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                                <img src={img5} alt="UpNews" className="w-full h-auto block" />
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
                        Pourquoi avons-nous arrêté<br className="hidden md:block" /> de sourire en lisant les nouvelles ?
                    </h2>
                    <div className="space-y-5 text-gray-500 text-lg leading-relaxed font-light">
                        <p>
                            Chaque matin, le même rituel se répète pour des millions de Français : à peine réveillés, ils consultent leur smartphone. Ce premier contact avec le monde est souvent brutal. Entre crises climatiques, tensions géopolitiques et faits divers, le <strong className="text-gray-800 font-semibold">doomscrolling</strong> est devenu une addiction toxique.
                        </p>
                        <p>
                            Le résultat est sans appel : <strong className="text-gray-800 font-semibold">54% des Français déclarent souffrir de fatigue informationnelle.</strong> Ce sentiment d'impuissance et d'anxiété chronique s'installe dès les premières minutes de la journée, polluant notre moral et notre productivité.
                        </p>
                        <p className="text-amber-600 font-medium italic border-l-4 border-amber-400 pl-5">
                            Et si l'information redevenait un moteur d'espoir plutôt qu'une source d'angoisse ?
                        </p>
                    </div>
                </div>
            </div>

            {/* Solution */}
            <div className="bg-amber-50 py-20">
                <div ref={solutionRef} className={`px-5 md:px-[12%] slide-in-bottom ${solutionVisible ? 'visible' : ''}`}>
                    <div className="flex flex-col lg:flex-row gap-14 items-center">
                        <div className="lg:w-1/2">
                            <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-4">La réponse</p>
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                L'essentiel du monde,<br />le pessimisme en moins.
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed font-light mb-6">
                                UpNews n'est pas un agrégateur de news classique. C'est une application conçue comme un <strong className="text-gray-900 font-semibold">rituel de bien-être digital.</strong>
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed font-light">
                                Chaque matin, vous découvrez une sélection rigoureuse d'actualités exclusivement positives et constructives : avancées médicales, initiatives écologiques, exploits solidaires ou innovations technologiques au service de l'humain.
                            </p>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                                <img src={img5} alt="UpNews app" className="w-full h-auto block" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3 features */}
            <div ref={featuresRef} className={`px-5 md:px-[12%] py-20 slide-in-bottom ${featuresVisible ? 'visible' : ''}`}>
                <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-4">L'expérience UpNews</p>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">En 3 points.</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map(({ number, title, description }, i) => (
                        <div key={i} className={`stagger-${i + 1}`}>
                            <p className="text-6xl font-black text-amber-500 mb-4 leading-none">{number}</p>
                            <h3 className="font-black text-gray-900 text-xl mb-3">{title}</h3>
                            <p className="text-gray-500 leading-relaxed">{description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Citation fondateur */}
            <div className="bg-gray-900 py-20">
                <div ref={quoteRef} className={`px-5 md:px-[12%] slide-in-bottom ${quoteVisible ? 'visible' : ''}`}>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-8">Le mot du fondateur</p>
                        <Quote className="w-10 h-10 text-amber-400 mx-auto mb-6 opacity-60" />
                        <blockquote className="text-white text-2xl md:text-3xl font-light leading-relaxed mb-10 italic">
                            "Je ne voulais pas créer une application qui ignore les problèmes du monde, mais un outil qui met en lumière ceux qui les résolvent. UpNews, c'est montrer que chaque jour, partout sur la planète, des choses formidables avancent."
                        </blockquote>
                        <div>
                            <p className="text-white font-black text-base">Valentin Colombat</p>
                            <p className="text-gray-400 text-sm mt-1">Fondateur & Développeur</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dossier de presse */}
            <div className="px-5 md:px-[12%] py-14">
                <div className="rounded-2xl border border-dashed border-amber-300 bg-amber-50 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <FileDown className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                            <p className="font-black text-gray-900 text-base">Dossier de presse</p>
                            <p className="text-gray-500 text-sm mt-0.5">Présentation complète du projet, visuels, contexte et chiffres clés.</p>
                        </div>
                    </div>
                    <a
                        href="/dossier-presse.pdf"
                        download
                        className="inline-flex items-center gap-2 px-5 py-3 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-700 transition-all duration-200 whitespace-nowrap"
                    >
                        <FileDown className="w-4 h-4" />
                        Télécharger
                    </a>
                </div>
            </div>

            {/* CTA */}
            <div style={{ backgroundColor: '#D4920A' }} className="py-16">
                <div className="px-5 md:px-[12%] text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Un projet similaire en tête ?</h2>
                    <p className="text-gray-900/70 mb-8 max-w-md mx-auto text-lg font-light">Parlons-en et voyons comment je peux contribuer à votre réussite.</p>
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

export default ProjectDetail
