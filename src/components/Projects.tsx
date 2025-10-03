import Title from "./Title"
import { Coffee } from "lucide-react";
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import img6 from '../assets/projects/6.png';
import { Github,Video} from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'Gestionnaire de tâches',
        description: 'Application moderne de gestion de tâches avec interface intuitive et fonctionnalités collaboratives avancées.',
        technologies: ['React', 'Node.js', 'Tailwind CSS'],
        demoLink: 'https://www.youtube.com/@ValentinColombat',
        repoLink: 'https://github.com/ValentinColombat',
        image: img1,
        category: 'Web App'
    },
    {
        id: 2,
        title: 'Plateforme E-commerce',
        description: 'Solution e-commerce complète avec paiements sécurisés, gestion d\'inventaire et tableau de bord admin.',
        technologies: ['Next.js', 'TypeScript', 'Prisma'],
        demoLink: 'https://www.youtube.com/@ValentinColombat',
        repoLink: 'https://github.com/ValentinColombat',
        image: img2,
        category: 'E-commerce'
    },
    {
        id: 3,
        title: 'Portfolio interactif',
        description: 'Portfolio personnel avec animations fluides, design responsive et expérience utilisateur optimisée.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoLink: 'https://www.youtube.com/@ValentinColombat',
        repoLink: 'https://github.com/ValentinColombat',
        image: img3,
        category: 'Portfolio'
    },
    {
        id: 4,
        title: 'Application de Chat',
        description: 'Chat en temps réel avec notifications push, salles privées et système de messagerie avancé.',
        technologies: ['React', 'Socket.io', 'Express.js'],
        demoLink: 'https://www.youtube.com/@ValentinColombat',
        repoLink: 'https://github.com/ValentinColombat',
        image: img4,
        category: 'Real-time'
    },
    {
        id: 5,
        title: 'Système de réservation',
        description: 'Plateforme de réservation de salles avec calendrier intégré et gestion des disponibilités.',
        technologies: ['Next.js', 'MongoDB', 'Chakra UI'],
        demoLink: 'https://www.youtube.com/@ValentinColombat',
        repoLink: 'https://github.com/ValentinColombat',
        image: img5,
        category: 'SaaS'
    },
    {
        id: 6,
        title: 'Analyseur de sentiment',
        description: 'Outil d\'analyse de sentiment utilisant l\'IA pour traiter et classifier les textes automatiquement.',
        technologies: ['Python', 'Flask', 'NLTK'],
        demoLink: 'https://www.youtube.com/@ValentinColombat',
        repoLink: 'https://github.com/ValentinColombat',
        image: img6,
        category: 'AI/ML'
    },
];

const Projects = () => {
    // Animations pour les différentes sections
    const { elementRef: titleRef, isVisible: isTitleVisible } = useIntersectionObserver({ threshold: 0.3 });
    const { elementRef: subtitleRef, isVisible: isSubtitleVisible } = useIntersectionObserver({ threshold: 0.3 });
    const { elementRef: gridRef, isVisible: isGridVisible } = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div className="relative pt-20 pb-10 md:pt-32 md:pb-16 overflow-hidden" id="Projects">
            
            {/* Grille de fond moderne */}
            <div className="absolute inset-0 grid-background opacity-20"></div>
            
            {/* Éléments géométriques flottants */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full floating-element-slow"></div>
            <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-br from-orange-500/15 to-transparent rounded-xl rotate-45 floating-element-delayed"></div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    
                    <div 
                        ref={titleRef}
                        className={`slide-in-bottom ${isTitleVisible ? 'visible' : ''}`}
                    >
                        <Title title="Mes Projets" />
                    </div>
                    
                    {/* Sous-titre */}
                    <div 
                        ref={subtitleRef}
                        className={`text-center mb-20 slide-in-bottom delay-200 ${isSubtitleVisible ? 'visible' : ''}`}
                    >
                        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                            Découvrez une sélection de mes 
                            <span className="text-orange-400 font-medium"> projets récents</span>, 
                            alliant créativité et technologies modernes.
                        </p>
                    </div>

                    {/* Grille de projets */}
                    <div 
                        ref={gridRef}
                        className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 slide-in-bottom ${isGridVisible ? 'visible' : ''}`}
                    >
                        {projects.map((project) => (
                            <div key={project.id} className="project-card group">
                                
                                {/* Image avec overlay */}
                                <div className="project-image-container">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                    />
                                    
                                       {/* Overlay au hover */}
                                    <div className="project-overlay">
                                        <div className="flex gap-3">
                                            <a href={project.demoLink} 
                                               target="_blank"
                                               rel="noopener noreferrer"
                                               className="project-btn-demo">
                                                <Video className="w-4 h-4" />
                                                <span>Demo</span>
                                            </a>
                                            <a href={project.repoLink} 
                                               target="_blank"
                                               rel="noopener noreferrer"
                                               className="project-btn-code">
                                                <Github className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                    
                                    {/* Badge catégorie */}
                                    <div className="project-category">
                                        {project.category}
                                    </div>
                                </div>

                                {/* Contenu */}
                                <div className="project-content">
                                    <h3 className="project-title">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="project-description">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="project-tech-container">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="project-tech-badge">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bouton voir plus */}
                    <div className="text-center mt-16">
                        <Link 
                            to="/contact"
                            className="bg-gradient-to-r from-orange-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-2 no-underline">
                            <Coffee className="w-5 h-5" />
                            Parlons de votre projet
                        </Link>
                    </div>
                    <div className="text-center mt-16">
                        <Link 
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-gray-300/20 text-gray-300 font-medium rounded-lg hover:bg-gray-800/30 hover:border-gray-200/30 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/10 backdrop-blur-sm no-underline">
                            Vous êtes une entreprise et vous recrutez ?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects