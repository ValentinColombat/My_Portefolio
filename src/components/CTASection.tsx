import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import bgImg from '../assets/portfolio_kodosun.webp';

const CTASection = () => {
    const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });

    return (
        <div
            ref={elementRef}
            className={`relative overflow-hidden slide-in-bottom ${isVisible ? 'visible' : ''}`}
        >
            {/* Image pleine largeur */}
            <img
                src={bgImg}
                alt=""
                className="w-full block"
            />

            {/* Contenu par-dessus */}
            <div className="absolute inset-0 z-10 px-5 md:px-[8%] py-10 md:py-14 flex justify-end items-center">
                <div className="max-w-xl">

                    <p className="text-black/50 text-xs font-semibold uppercase tracking-[0.25em] mb-6">
                        Travaillons ensemble
                    </p>

                    <h2 className="text-4xl md:text-6xl font-black text-black leading-[0.95] mb-8">
                        <span className="block font-extralight">Construisons</span>
                        <span className="block">votre vision</span>
                    </h2>

                    <p className="text-black/65 text-lg max-w-md leading-relaxed mb-12 font-light">
                        Votre projet mérite une approche personnalisée. Parlons-en et voyons comment je peux contribuer à votre réussite.
                    </p>

                    <Link
                        to="/contact"
                        className="group inline-flex items-center gap-3 px-8 py-3.5 bg-black text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:bg-zinc-800 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5 no-underline"
                    >
                        Démarrer un projet
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default CTASection;
