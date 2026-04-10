import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import persoImg from '../assets/portfolio_us.webp';


const About = () => {
    const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

    return (
        <div id="About" className="section-white px-5 md:px-[8%] py-20 md:py-28">
            <div
                ref={elementRef}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center slide-in-bottom ${isVisible ? 'visible' : ''}`}
            >

                {/* Image encadrée à gauche */}
                <div className="w-full lg:w-[42%] flex-shrink-0">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
                        <img
                            src={persoImg}
                            alt="Valentin & Kodo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Texte à droite */}
                <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600 mb-5">
                        Dans les coulisses
                    </p>

                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                        <span className="block">Deux esprits,</span>
                        <span className="block font-extralight text-gray-400">un seul objectif.</span>
                    </h2>

                    <div className="space-y-5 text-gray-600 leading-relaxed mb-10">
                        <p>
                            Kodo n'a pas été invité. Il est simplement apparu un soir, sur le coin du bureau, et a décidé que
                            <strong className="text-gray-900"> c'était là qu'il vivrait.</strong>
                        </p>
                        <p>
                            Depuis, il supervise. Les deadlines, les cafés froids, les idées abandonnées à 23h.
                            Il ne dit rien. Mais quand il pose son menton sur le bras de Valentin,
                            <strong className="text-gray-900"> c'est presque toujours au bon moment.</strong>
                        </p>
                        <p className="text-amber-600 font-medium italic border-l-2 border-amber-400 pl-4">
                            Si un jour vous travaillez avec Valentin et que vous avez un peu de chance... peut-être que vous l'apercevrez.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;
