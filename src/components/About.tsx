import Title from "./Title"
import img from '../assets/projects/img2.jpg';
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Je suis un développeur frontend avec une bonne expérience.",
        icon: <LetterText className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
        icon: <CalendarSync className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "Passionné par l'UI/UX",
        description: "Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.",
        icon: <Paintbrush className="text-accent scale-150" />,
    },
];

const About = () => {
    return (
        <div className="relative pt-2 md:pt-2 pb-20 md:pb-32" id="About">
            
            {/* Container principal avec glassmorphism */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <Title title="À propos" />
                
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-20">
                    
                    {/* Image avec effet moderne */}
                    <div className="order-2 md:order-1 flex justify-start">
                        <div className="about-image-container">
                            <img 
                                src={img} 
                                alt="Valentin Colombat" 
                                className="about-image"
                            />
                            {/* Éléments décoratifs */}
                            <div className="about-decoration-1"></div>
                            <div className="about-decoration-2"></div>
                        </div>
                    </div>

                    {/* Cartes de compétences */}
                    <div className="order-1 md:order-2 space-y-6 sm:space-y-8 lg:space-y-10">
                        {aboutSections.map((section, index) => (
                            <div key={section.id} className="about-card group">
                                
                                {/* Indicateur numérique */}
                                <div className="about-card-number">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                
                                {/* Icône */}
                                <div className="about-card-icon">
                                    {section.icon}
                                </div>
                                
                                {/* Contenu */}
                                <div className="about-card-content">
                                    <h3 className="about-card-title">
                                        {section.title}
                                    </h3>
                                    <p className="about-card-description">
                                        {section.description}
                                    </p>
                                </div>
                                
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About