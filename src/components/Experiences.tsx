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
    // Hook pour la section skills (icônes)
    const { elementRef: skillsRef, isVisible: skillsVisible } = useIntersectionObserver({
        threshold: 0.2,
        triggerOnce: true
    });

    // Hook pour la section texte
    const { elementRef: textRef, isVisible: textVisible } = useIntersectionObserver({
        threshold: 0.2,
        triggerOnce: true
    });

    return (
        <div id="Experiences" className="relative pt-2 md:pt-2 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8">
            <div>
                <Title title="Experiences" />
            </div>
            
            {/* Contenu principal */}
            <div className="relative max-w-[1600px] mx-auto">
                {/* Effet de glow externe */}
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 via-purple-500/5 to-cyan-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Effet de glow interne */}
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/5 via-transparent to-purple-500/5 rounded-2xl blur-xl"></div>
                
                {/* Bordure animée */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-purple-500/10 to-cyan-500/20 rounded-2xl blur-sm animate-pulse"></div>
                
                {/* Container principal avec glassmorphism */}
                <div className="relative bg-slate-800/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
                    <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
                <div ref={skillsRef} className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center lg:w-1/3 mt-6 lg:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className={`flex justify-center items-center flex-col scale-up-fade stagger-${skill.id} ${skillsVisible ? 'visible' : ''}`}>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name}
                                    className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-xs sm:text-sm text-center">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div ref={textRef} className={`lg:ml-4 w-full lg:w-2/3 slide-in-right delay-200 ${textVisible ? 'visible' : ''}`}>
                    <div className="bg-slate-800/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10">
                        <div className="space-y-6">
                            <div className="text-center mb-8">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">
                                    Qui suis-je vraiment ?
                                </h3>
                                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto rounded-full"></div>
                            </div>
                            
                            <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed">
                                <p>
                                    À <strong className="text-orange-400">30 ans</strong>, j'ai découvert ma véritable passion dans le développement web. 
                                    Depuis plus d'un an, je code <strong className="text-white">quotidiennement</strong> avec une forte détermination. 
                                    Ce qui me fascine ? <strong className="text-orange-400">L'infinité de possibilités </strong> 
                                    qu'offre le code pour résoudre des problèmes concrets.
                                </p>
                                
                                <p className="hidden sm:block">
                                    Mon approche ? <strong className="text-white">Méthodique et rigoureuse</strong>. Je préfère maîtriser solidement 
                                    les bases plutôt que de survoler une multitude de technologies. 
                                    Mes proches me décrivent comme quelqu'un de <strong className="text-orange-400">fiable, réfléchi et juste</strong>.
                                </p>
                                
                                <p className="hidden sm:block">
                                    Grand sportif, je pratique <strong className="text-white">le football américain</strong>, j'apporte cette philosophie d'équipe 
                                    dans mes projets : <strong className="text-orange-400">engagement total, communication claire</strong> et confiance mutuelle. 
                                    Dans ce sport, l'individu n'existe que par l'équipe - une leçon que j'applique au quotidien.
                                </p>
                                
                                <p>
                                    Ce qui me différencie ? <strong className="text-white">Vous n'aurez jamais besoin de me répéter les choses deux fois</strong>. 
                                    Je comprends les sous-entendus, saisis les enjeux de fond et cible justement <strong className="text-orange-400"> vos attentes et besoins.    
                                    </strong>
                                </p>
                                
                                <div className="bg-gradient-to-r from-orange-500/10 to-purple-500/10 p-4 rounded-xl border border-orange-500/20 mt-6">
                                    <p className="text-center text-sm sm:text-base text-white font-medium italic">
                                        "Je ne cherche pas juste un projet ou un poste, je veux <strong className="text-orange-400">intégrer une équipe</strong>, 
                                        partager ses valeurs et mettre ma passion au service d'un objectif commun qui a du sens."
                                    </p>
                                </div>
                                
                                <div className="text-center mt-8">
                                    <p className="text-white/60 text-xs sm:text-sm">
                                        🚀 Disponible pour missions freelance et recherche active d'un poste
                                    </p>
                                    <p className="text-white/60 text-xs sm:text-sm mt-2">
                                        📍 Région de Lille - Ouvert à la mobilité
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>            </div>
            </div>
        </div>
        </div>
    )
}

export default Experiences