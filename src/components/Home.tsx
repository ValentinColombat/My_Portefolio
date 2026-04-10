import { Link } from 'react-router-dom'
import heroImg from '../assets/portfolio_kodo.webp'

const navItems = [
    { href: "#Home",     label: "Accueil",      external: false },
    { href: "#Projects", label: "Projets",      external: false },
    { href: "#About",    label: "À propos",     external: false },
    { href: "/contact",  label: "Me contacter", external: true  },
];

const services = ['Application & Site Web', 'Automatisation', "Intégration IA"];

const Home = () => {
    return (
        <div id="Home" className="relative min-h-screen overflow-hidden flex flex-col">

            {/* Image plein écran */}
            <img
                src={heroImg}
                alt="Valentin Colombat"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Contenu */}
            <div className="relative z-10 flex flex-col min-h-screen">

                {/* Navbar */}
                <nav className="flex items-center py-7">
                    <div className="w-1/3 pl-8 flex-shrink-0">
                        <Link to="/" className="inline-flex items-center gap-3">
                            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white text-lg font-black">K</span>
                            </div>
                            <span className="font-black text-black text-2xl tracking-tight">kodo</span>
                        </Link>
                    </div>

                    <ul className="hidden md:flex items-center gap-12 lg:gap-14 ml-auto pr-10 lg:pr-16">
                        {navItems.map((item, index) => (
                            <li key={item.href}>
                                {item.external ? (
                                    <Link to={item.href} className={`hero-nav-item`}>
                                        {item.label}
                                    </Link>
                                ) : (
                                    <a href={item.href} className={`hero-nav-item${index === 0 ? ' active' : ''}`}>
                                        {item.label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>

                    <button className="md:hidden flex flex-col gap-1.5 p-2 ml-auto mr-6">
                        <span className="w-6 h-0.5 bg-black block"></span>
                        <span className="w-6 h-0.5 bg-black block"></span>
                        <span className="w-4 h-0.5 bg-black block"></span>
                    </button>
                </nav>

                {/* Hero body */}
                <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 pb-8">

                    {/* Titre principal */}
                    <div className="mb-6 md:mb-8">
                        <p className="text-black/50 font-normal text-xs uppercase mb-4" style={{ letterSpacing: '0.22em', marginLeft: '0.35em' }}>
                            by valentin colombat
                        </p>
                        <h1 className="leading-[0.92] text-black font-black" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}>
                            <span className="block font-extralight tracking-wide">Développeur</span>
                            <span className="block">Automatisation</span>
                            <span className="block font-extralight">& IA</span>
                        </h1>
                    </div>

                    {/* Séparateur + services inline */}
                    <div className="flex items-start sm:items-center gap-4 sm:gap-6 mb-6 md:mb-8">
                        <div className="h-px bg-black/30 w-6 sm:w-8 flex-shrink-0 mt-1.5 sm:mt-0"></div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            {services.map((s, i) => (
                                <span key={s} className="flex items-center gap-4">
                                    <span className="text-xs font-semibold text-black/60 tracking-wide uppercase">{s}</span>
                                    {i < services.length - 1 && <span className="hidden sm:block w-px h-3 bg-black/25"></span>}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA row */}
                    <div className="flex flex-wrap items-center gap-5">
                        <Link
                            to="/contact"
                            className="group inline-flex items-center gap-3 px-7 py-3 bg-black text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-zinc-800 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5 no-underline"
                        >
                            Dites Bonjour
                        </Link>

                        <div className="flex items-center gap-2.5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" style={{ boxShadow: '0 0 8px 3px rgba(74,222,128,0.65)' }}></span>
                            </span>
                            <span className="text-xs font-semibold text-black/65 tracking-widest uppercase">En ligne</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
