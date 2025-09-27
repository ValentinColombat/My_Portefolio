import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";

import google from "../assets/companies/google.png";
import meta from "../assets/companies/meta.webp";
import amazon from "../assets/companies/amazon.png";



const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgNEXT },
    { id: 9, name: "Prisma", image: imgPRISMA },
];


const experiences = [
    {
        id: 1,
        role: "Software Engineer",
        company: "Google",
        period: "Sep 2022 - Présent",
        description: [
            "Développement de nouvelles fonctionnalités pour Google Maps.",
            "Optimisation des performances de l'application.",
        ],
        image: google,
    },
    {
        id: 2,
        role: "Fullstack Developer",
        company: "Meta",
        period: "Jan 2021 - Août 2022",
        description: [
            "Création d'une plateforme interne de collaboration pour les équipes.",
            "Mise en place d'une architecture scalable et optimisée.",
        ],
        image: meta,
    },
    {
        id: 3,
        role: "Frontend Developer",
        company: "Amazon",
        period: "Mai 2019 - Déc 2020",
        description: [
            "Développement d'une interface utilisateur pour Amazon Web Services.",
            "Implémentation des tests unitaires et E2E.",
        ],
        image: amazon,
    },
];



const Experiences = () => {
    return (
        <div id="Experiences" className="relative pt-2 md:pt-2 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8">
            <Title title="Expériences" />
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center max-w-7xl mx-auto">
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center lg:w-1/3 mt-6 lg:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className="flex justify-center items-center flex-col">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name}
                                    className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-xs sm:text-sm text-center">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="lg:ml-4 flex flex-col space-y-4 w-full lg:w-2/3">
                    {experiences.map((expericence) => (
                        <div
                            key={expericence.id}
                            className="flex flex-col bg-base-200 p-4 sm:p-5 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center">
                                <img
                                    src={expericence.image}
                                    alt={expericence.company}
                                    className="object-cover h-8 w-8 sm:h-10 sm:w-10 rounded"
                                />
                                <div className="ml-3 sm:ml-4 flex-1">
                                    <h1 className="text-base sm:text-lg lg:text-xl text-accent font-bold break-words">
                                        {expericence.role}, {expericence.company}
                                    </h1>
                                    <span className="text-xs sm:text-sm text-gray-600">{expericence.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-8 sm:ml-12 lg:ml-16 mt-2 space-y-1">
                                {expericence.description.map((desc, index) => (
                                    <li key={index} className="text-sm sm:text-base">
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences