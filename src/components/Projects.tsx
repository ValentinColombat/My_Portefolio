import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { GitBranch, ExternalLink } from "lucide-react";
import { useNavigate } from 'react-router-dom';

import img1 from '../assets/projects/presentation-ghibli.jpg';
import img2 from '../assets/projects/Space-invader.png';
import img3 from '../assets/projects/back_boutique.png';
import img5 from '../assets/projects/back_upnews.png';
import img6 from '../assets/projects/dice-roller.jpg';
import img8 from '../assets/projects/blablabook.jpg';

const projects = [
    {
        id: 1,
        index: '01',
        title: 'UpNews',
        description: 'Le média positif pour en finir avec la fatigue informationnelle. Une sélection quotidienne de nouvelles inspirantes, en moins de 2 minutes.',
        technologies: ['Swift UI', 'Supabase', 'iOS', 'Android', 'Automatisation', 'IA'],
        demoLink: 'https://www.youtube.com/@ValentinColombat',
        repoLink: 'https://github.com/ValentinColombat',
        image: img5,
        category: 'App Mobile',
        year: '2026',
        status: 'En ligne',
        featured: true,
    },
    {
        id: 2,
        index: '02',
        title: 'Site vitrine',
        description: 'Votre vitrine ouverte 24h/24. Un site qui travaille pour vous pendant que vous dormez — chaque visiteur, une opportunité.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        demoLink: 'https://www.youtube.com/@ValentinColombat',
        repoLink: 'https://github.com/ValentinColombat',
        detailLink: '/projects/portfolio',
        image: img3,
        category: 'Site Vitrine',
        year: '2025',
        status: 'En ligne',
        featured: false,
    },
    {
        id: 3,
        index: '03',
        title: 'Médiathèque Studio Ghibli',
        description: 'Application web pour explorer les films du Studio Ghibli avec filtres, recherches et détails complets.',
        technologies: ['Express.js', 'EJS', 'JavaScript'],
        demoLink: 'https://www.youtube.com/@ValentinColombat',
        repoLink: 'https://github.com/ValentinColombat',
        image: img1,
        category: 'Web App',
        year: '2024',
        status: 'Archivé',
        featured: false,
    },
    {
        id: 4,
        index: '04',
        title: 'Space-Invaders',
        description: 'Application web interactive de dessin en pixel art inspirée du célèbre jeu Space Invaders.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoLink: 'https://www.youtube.com/@ValentinColombat',
        repoLink: 'https://github.com/ValentinColombat',
        image: img2,
        category: 'Game',
        year: '2023',
        status: 'Archivé',
        featured: false,
    },
    {
        id: 5,
        index: '05',
        title: 'BlablaBook',
        description: 'Plateforme de partage de lectures entre utilisateurs. Système de recommandation et profils.',
        technologies: ['Svelte', 'JavaScript', 'Docker'],
        demoLink: 'https://www.youtube.com/@ValentinColombat',
        repoLink: 'https://github.com/ValentinColombat',
        image: img8,
        category: 'Web App',
        year: '2024',
        status: 'Archivé',
        featured: false,
    },
    {
        id: 6,
        index: '06',
        title: 'Dice-Roller',
        description: 'Simulation de lancer de dés — duel joueur vs croupier avec interface animée.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoLink: 'https://www.youtube.com/@ValentinColombat',
        repoLink: 'https://github.com/ValentinColombat',
        image: img6,
        category: 'Game',
        year: '2023',
        status: 'Archivé',
        featured: false,
    }
];

const StatusBadge = ({ status }: { status: string }) => {
    const styles: Record<string, { bg: string; dot: string }> = {
        'En ligne':  { bg: 'bg-green-50 text-green-700',  dot: 'bg-green-500' },
        'En cours':  { bg: 'bg-amber-100 text-amber-700', dot: 'bg-amber-500' },
        'Archivé':   { bg: 'bg-gray-100 text-gray-500',   dot: 'bg-gray-400'  },
    };
    const s = styles[status] ?? styles['Archivé'];
    return (
        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${s.bg}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`}></span>
            {status}
        </span>
    );
};

const Projects = () => {
    const navigate = useNavigate()
    const { elementRef: headerRef, isVisible: headerVisible } = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });
    const { elementRef: featuredRef, isVisible: featuredVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
    const { elementRef: gridRef, isVisible: gridVisible } = useIntersectionObserver({ threshold: 0.05, triggerOnce: true });

    const featured = projects[0];
    const rest = projects.slice(1);

    return (
        <div className="relative pt-8 pb-16 md:pt-12 md:pb-20" id="Projects">
            <div className="w-full">

                {/* Header */}
                <div ref={headerRef} className={`mb-12 slide-in-bottom ${headerVisible ? 'visible' : ''}`}>
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-3">
                                Un petit coup d'œil ?
                            </p>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-none">
                                Mes Projets
                            </h2>
                        </div>
                        <p className="hidden md:block text-sm text-gray-400 font-medium text-right max-w-xs leading-relaxed">
                            {projects.length} projets · Créativité<br />& technologies modernes
                        </p>
                    </div>
                    <div className="mt-6 h-px bg-gray-100"></div>
                </div>

                {/* Projet featured */}
                <div ref={featuredRef} className={`mb-12 slide-in-bottom ${featuredVisible ? 'visible' : ''}`}>
                    <div
                        className="group relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 bg-white cursor-pointer"
                        onClick={() => navigate('/projects/upnews')}
                    >
                        <div className="flex flex-col lg:flex-row">

                            {/* Image */}
                            <div className="relative lg:w-3/5 overflow-hidden">
                                <img
                                    src={featured.image}
                                    alt={featured.title}
                                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 lg:to-white/30"></div>
                                <div className="absolute top-5 left-5 flex items-center gap-2">
                                    <span className="bg-white/90 backdrop-blur-sm text-xs font-bold text-gray-500 px-3 py-1 rounded-full border border-gray-200">
                                        {featured.category}
                                    </span>
                                    <StatusBadge status={featured.status} />
                                </div>
                            </div>

                            {/* Contenu */}
                            <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-xs text-gray-400 font-medium">{featured.year}</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                        <span className="text-xs text-amber-600 font-semibold uppercase tracking-wide">iOS & Android</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">{featured.title}</h3>
                                    <p className="text-gray-500 leading-relaxed mb-6 text-sm">{featured.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {featured.technologies.map((tech) => (
                                            <span key={tech} className="text-xs font-semibold px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg border border-gray-100">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); navigate('/projects/upnews'); }}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-all duration-200">
                                        <ExternalLink className="w-4 h-4" />
                                        Détail du projet
                                    </button>
                                    <a href={featured.repoLink} target="_blank" rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:border-gray-300 hover:text-gray-900 transition-all duration-200">
                                        <GitBranch className="w-4 h-4" />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grille des autres projets */}
                <div ref={gridRef} className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 slide-in-bottom ${gridVisible ? 'visible' : ''}`}>
                    {rest.map((project, i) => (
                        <div key={project.id}
                            className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-400 flex flex-col stagger-${i + 1} ${'detailLink' in project ? 'cursor-pointer' : ''}`}
                            onClick={() => 'detailLink' in project && navigate((project as typeof project & { detailLink: string }).detailLink)}
                        >

                            {/* Image */}
                            <div className="relative overflow-hidden" style={{ height: '200px' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Badges */}
                                <div className="absolute top-3 left-3 flex gap-2">
                                    <span className="bg-white/90 backdrop-blur-sm text-xs font-bold text-gray-500 px-2.5 py-1 rounded-full border border-gray-100">
                                        {project.category}
                                    </span>
                                    <StatusBadge status={project.status} />
                                </div>
                            </div>

                            {/* Contenu */}
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs text-gray-400 font-medium">{project.year}</span>
                                </div>
                                <h3 className="font-black text-gray-900 text-lg mb-2 leading-tight">{project.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{project.description}</p>

                                {/* Tech */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-amber-50 text-amber-700 rounded-md border border-amber-100">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Liens */}
                                <div className="flex items-center gap-2 pt-3 border-t border-gray-50">
                                    {'detailLink' in project && (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); navigate((project as typeof project & { detailLink: string }).detailLink); }}
                                            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition-all duration-200">
                                            <ExternalLink className="w-3.5 h-3.5" />
                                            Détail
                                        </button>
                                    )}
                                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-gray-700 hover:text-gray-900 border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-200">
                                        <GitBranch className="w-3.5 h-3.5" />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default Projects
