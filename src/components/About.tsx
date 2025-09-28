import Title from "./Title"
import img from '../assets/projects/img2.jpg';
import { 
    Code2, 
    Rocket, 
    Palette, 
    Users, 
    Coffee,
    MapPin,
    Calendar,
    Star,
    TrendingUp,
    Zap,
    Heart
} from "lucide-react";

const stats = [
    { number: "3+", label: "Années d'expérience", icon: <Calendar className="w-5 h-5" /> },
    { number: "50+", label: "Projets réalisés", icon: <Rocket className="w-5 h-5" /> },
    { number: "15+", label: "Technologies maîtrisées", icon: <Code2 className="w-5 h-5" /> },
    { number: "100%", label: "Satisfaction client", icon: <Star className="w-5 h-5" /> }
];

const expertise = [
    {
        id: 1,
        title: "Développement Frontend",
        description: "Création d'interfaces utilisateur modernes et responsives avec React, TypeScript et les dernières technologies web.",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        icon: <Code2 className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: 2,
        title: "Architecture Backend",
        description: "Conception d'APIs robustes et scalables avec Node.js, bases de données et architecture microservices.",
        skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
        icon: <Rocket className="w-8 h-8" />,
        color: "from-green-500 to-emerald-500"
    },
    {
        id: 3,
        title: "Design & UX",
        description: "Création d'expériences utilisateur exceptionnelles alliant esthétique moderne et usabilité optimale.",
        skills: ["Figma", "UI/UX", "Prototyping", "Design System"],
        icon: <Palette className="w-8 h-8" />,
        color: "from-purple-500 to-pink-500"
    }
];

const personalInfo = {
    name: "Valentin Colombat",
    role: "Développeur Full Stack",
    location: "France",
    experience: "3+ ans",
    philosophy: "Transformer des idées en solutions digitales exceptionnelles"
};

const About = () => {
    return (
        <div className="relative py-20 md:py-32 overflow-hidden" id="About">
            
            {/* Arrière-plan avec effets */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-slate-800/30"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <Title title="À propos de moi" />
                
                {/* Section Hero personnelle */}
                <div className="max-w-6xl mx-auto mt-16">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        
                        {/* Image et informations personnelles */}
                        <div className="relative">
                            {/* Image principale avec effets */}
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <img 
                                        src={img} 
                                        alt={personalInfo.name} 
                                        className="w-full h-80 object-cover rounded-xl"
                                    />
                                    
                                    {/* Badge flottant */}
                                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                            Disponible
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Informations rapides */}
                            <div className="mt-8 space-y-4">
                                <div className="flex items-center gap-3 text-white/70">
                                    <MapPin className="w-5 h-5 text-orange-400" />
                                    <span>{personalInfo.location}</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/70">
                                    <TrendingUp className="w-5 h-5 text-orange-400" />
                                    <span>{personalInfo.experience} d'expérience</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/70">
                                    <Heart className="w-5 h-5 text-orange-400" />
                                    <span>Passionné par l'innovation</span>
                                </div>
                            </div>
                        </div>

                        {/* Contenu textuel */}
                        <div className="space-y-8">
                            {/* Introduction */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Salut ! Je suis <span className="text-gradient">{personalInfo.name}</span>
                                </h2>
                                <p className="text-xl text-orange-400 font-medium mb-6">
                                    {personalInfo.role}
                                </p>
                            </div>

                            {/* Philosophie */}
                            <div className="relative">
                                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-purple-500 rounded-full"></div>
                                <div className="pl-6">
                                    <p className="text-lg text-white/80 italic leading-relaxed">
                                        "{personalInfo.philosophy}"
                                    </p>
                                </div>
                            </div>

                            {/* Description détaillée */}
                            <div className="space-y-4">
                                <p className="text-white/70 leading-relaxed">
                                    Développeur passionné avec plus de 3 ans d'expérience, je me spécialise dans la création 
                                    d'applications web modernes et performantes. Mon approche combine <strong className="text-white">expertise technique</strong>, 
                                    <strong className="text-white"> créativité</strong> et <strong className="text-white">attention aux détails</strong> 
                                    pour livrer des solutions qui dépassent les attentes.
                                </p>
                                
                                <p className="text-white/70 leading-relaxed">
                                    Que ce soit pour développer une interface utilisateur intuitive, concevoir une architecture backend robuste 
                                    ou optimiser les performances, j'apporte une vision holistique à chaque projet. 
                                    <span className="text-orange-400"> Ma mission : transformer vos idées en expériences digitales exceptionnelles.</span>
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="bg-gradient-to-r from-orange-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="flex items-center gap-2">
                                        <Coffee className="w-5 h-5" />
                                        Discutons de votre projet
                                    </div>
                                </button>
                                <button className="border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-all duration-300">
                                    Télécharger mon CV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistiques */}
                <div className="max-w-6xl mx-auto mt-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-2">
                                    <div className="text-orange-400 mb-3 flex justify-center">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                                        {stat.number}
                                    </div>
                                    <p className="text-white/60 text-sm">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section expertise */}
                <div className="max-w-6xl mx-auto mt-20">
                    <div className="text-center mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Mon expertise
                        </h3>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            Des compétences techniques solides au service de vos ambitions digitales
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {expertise.map((item) => (
                            <div key={item.id} className="group">
                                <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 h-full">
                                    
                                    {/* Gradient background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                                    
                                    {/* Icon */}
                                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-white mb-6`}>
                                        {item.icon}
                                    </div>
                                    
                                    {/* Content */}
                                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                                        {item.title}
                                    </h4>
                                    
                                    <p className="text-white/70 mb-6 leading-relaxed">
                                        {item.description}
                                    </p>
                                    
                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2">
                                        {item.skills.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm border border-white/10">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {/* Hover effect */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to action final */}
                <div className="max-w-4xl mx-auto mt-20 text-center">
                    <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
                        <Zap className="w-12 h-12 text-orange-400 mx-auto mb-6" />
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Prêt à donner vie à votre projet ?
                        </h3>
                        <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                            Collaborons ensemble pour créer quelque chose d'extraordinaire. 
                            Contactez-moi et discutons de vos idées !
                        </p>
                        <button className="bg-gradient-to-r from-orange-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5" />
                                Commençons à collaborer
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About