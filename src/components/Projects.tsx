import Title from "./Title"

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import img6 from '../assets/projects/6.png';
import { Github, Video } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'Gestionnaire de tâches',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['React', 'Node.js', 'Tailwind CSS'],
        demoLink: '#',
        repoLink: '#',
        image: img1,
    },
    {
        id: 2,
        title: 'Plateforme E-commerce',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['Next.js', 'TypeScript', 'Prisma'],
        demoLink: '#',
        repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        title: 'Portfolio interactif',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoLink: '#',
        repoLink: '#',
        image: img3,
    },
    {
        id: 4,
        title: 'Application de Chat en temps réel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['React', 'Socket.io', 'Express.js'],
        demoLink: '#',
        repoLink: '#',
        image: img4,
    },
    {
        id: 5,
        title: 'Système de réservation de salles',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['Next.js', 'MongoDB', 'Chakra UI'],
        demoLink: '#',
        repoLink: '#',
        image: img5,
    },
    {
        id: 6,
        title: 'Analyseur de sentiment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['Python', 'Flask', 'NLTK'],
        demoLink: '#',
        repoLink: '#',
        image: img6,
    },
];

const Projects = () => {
    return (
        <div className="mt-6 sm:mt-8 lg:mt-10 px-4 sm:px-6 lg:px-8" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
                {projects.map((project) => (
                    <div key={project.id} className="modern-card p-4 sm:p-6 h-fit rounded-2xl modern-glow modern-hover modern-border section-modern">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-48 sm:h-56 object-cover border border-white/10"
                        />
                        <div>
                            <h1 className="my-3 font-bold text-lg sm:text-xl modern-gradient-text">
                                {project.title}
                            </h1>
                            <p className="text-xs sm:text-sm text-base-content/70 leading-relaxed">{project.description}</p>

                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-2 my-3 sm:my-4">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="badge-modern badge badge-sm px-2 sm:px-3 py-1 sm:py-2 font-medium text-xs">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <a className="btn-modern btn flex-1 text-sm" href={project.demoLink}>
                                Demo
                                <Video className="w-3 sm:w-4" />
                            </a>

                            <a className="btn btn-outline btn-primary w-12 sm:w-16 backdrop-blur-sm" href={project.repoLink}>
                                <Github className="w-3 sm:w-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects