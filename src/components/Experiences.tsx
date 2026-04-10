import Title from "./Title";
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgSQL from "../assets/techno/sql.png";

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "SQL", image: imgSQL },
    { id: 7, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 8, name: "TypeScript", image: imgTYPE },
    { id: 9, name: "Next.js", image: imgNEXT },
];

const Experiences = () => {
    const { elementRef: skillsRef, isVisible: skillsVisible } = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });
    const { elementRef: textRef, isVisible: textVisible } = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });

    return (
        <div id="Experiences" className="relative pt-2 pb-8">
            <Title title="Expériences" dark />

            <div className="relative max-w-[1600px] mx-auto">
                <div className="relative bg-black/10 backdrop-blur-sm border border-black/10 rounded-2xl p-8 md:p-12">
                    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8">

                        {/* Skills grid */}
                        <div ref={skillsRef} className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center lg:w-1/3 mt-6 lg:mt-0">
                            {skills.map((skill) => (
                                <div key={skill.id} className={`flex justify-center items-center flex-col scale-up-fade stagger-${skill.id} ${skillsVisible ? 'visible' : ''}`}>
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 p-2 rounded-full border-2 border-black/30 bg-white/90 shadow-sm">
                                        <img
                                            src={skill.image}
                                            alt={skill.name}
                                            className="object-cover rounded-full h-full w-full"
                                        />
                                    </div>
                                    <span className="mt-2 text-xs sm:text-sm text-center text-black/70 font-semibold">{skill.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* Text content */}
                        <div ref={textRef} className={`lg:ml-4 w-full lg:w-2/3 slide-in-right delay-200 ${textVisible ? 'visible' : ''}`}>
                            <div className="bg-black/15 p-6 sm:p-8 rounded-2xl border border-black/10">
                                <div className="space-y-6">
                                    <div className="text-center mb-8">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4">
                                            Qui suis-je vraiment ?
                                        </h3>
                                        <div className="w-16 h-1 bg-black/40 mx-auto rounded-full"></div>
                                    </div>

                                    <div className="space-y-4 text-sm sm:text-base text-black/75 leading-relaxed">
                                        <p>
                                            À <strong className="text-black">30 ans</strong>, j'ai découvert ma véritable passion dans le développement web.
                                            Depuis plus d'un an, je code <strong className="text-black">quotidiennement</strong> avec une forte détermination.
                                            Ce qui me fascine ? <strong className="text-black">L'infinité de possibilités </strong>
                                            qu'offre le code pour résoudre des problèmes concrets.
                                        </p>

                                        <p className="hidden sm:block">
                                            Mon approche ? <strong className="text-black">Méthodique et rigoureuse</strong>.
                                            Mes proches me décrivent comme quelqu'un de <strong className="text-black">fiable, réfléchi et juste</strong>.
                                        </p>

                                        <p className="hidden sm:block">
                                            Grand sportif, je pratique <strong className="text-black">le football américain</strong>, j'apporte cette philosophie d'équipe
                                            dans mes projets : <strong className="text-black">engagement total, communication claire</strong> et confiance mutuelle.
                                        </p>

                                        <p>
                                            Ce qui me différencie ?
                                            Je comprends les sous-entendus, saisis les enjeux de fond et cible justement
                                            <strong className="text-black"> vos attentes et besoins.</strong>
                                        </p>

                                        <div className="bg-white/20 p-4 rounded-xl border border-black/15 mt-6">
                                            <p className="text-center text-sm sm:text-base text-black font-medium italic">
                                                "Je ne cherche pas juste un projet ou un poste, je veux <strong className="text-black underline">intégrer une équipe</strong>,
                                                partager ses valeurs et mettre ma passion au service d'un objectif commun qui a du sens."
                                            </p>
                                        </div>

                                        <div className="text-center mt-8">
                                            <p className="text-black/65 text-xs sm:text-sm">
                                                🚀 Disponible pour missions freelance et recherche active d'un poste
                                            </p>
                                            <p className="text-black/65 text-xs sm:text-sm mt-2">
                                                📍 Région de Lille - Ouvert à la mobilité
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences
