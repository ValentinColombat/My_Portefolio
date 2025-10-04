/**
 * Générateur pseudo-aléatoire avec seed pour des résultats reproductibles
 * Utilise l'algorithme Mulberry32
 */
class SeededRandom {
    private seed: number;

    constructor(seed: number) {
        this.seed = seed;
    }

    // Génère un nombre entre 0 et 1
    next(): number {
        let t = this.seed += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }

    // Génère un entier entre min et max (inclus)
    range(min: number, max: number): number {
        return Math.floor(this.next() * (max - min + 1)) + min;
    }

    // Choisit un élément aléatoire dans un tableau
    choice<T>(array: T[]): T {
        return array[this.range(0, array.length - 1)];
    }
}

export interface GeometricShape {
    id: number;
    type: 'circle' | 'square' | 'triangle' | 'hexagon' | 'particle';
    size: string;
    position: string;
    color: string;
    opacity: string;
    animation: string;
    animationDuration: string;
    animationDelay: string;
    rotation?: string;
    zIndex: 'behind' | 'front'; // derrière ou devant l'image
}

/**
 * Génère des formes géométriques avec des paramètres pseudo-aléatoires
 * @param count - Nombre de formes à générer
 * @param seed - Seed pour la reproductibilité (défaut: 42)
 */
export const generateGeometricShapes = (count: number, seed: number = 42): GeometricShape[] => {
    const rng = new SeededRandom(seed);
    
    // Palettes de couleurs
    const colors = [
        'from-orange-400/35 to-amber-400/35',
        'from-orange-500/50 to-amber-500/50',
        'from-orange-300/40 to-red-400/40',
        'from-green-400/30 to-emerald-400/30',
        'from-green-500/45 to-emerald-500/45',
        'from-green-400/45 to-teal-400/45',
        'from-purple-400/25 to-violet-400/25',
        'from-purple-500/45 to-violet-500/45',
        'from-purple-400/40 to-indigo-400/40'
    ];

    // Tailles variées
    const sizes = [
        'w-2 h-2', 'w-3 h-3', 'w-4 h-4', 'w-5 h-5',
        'w-6 h-6', 'w-7 h-7', 'w-8 h-8', 'w-9 h-9',
        'w-10 h-10', 'w-11 h-11', 'w-12 h-12',
        'w-14 h-14', 'w-16 h-16', 'w-20 h-20'
    ];

    // Positions (côté gauche principalement)
    const positions = [
        // Positions arrière-plan
        'top-1/4 left-1/4', 'top-1/3 left-1/3', 'top-1/2 left-1/2',
        'bottom-1/3 left-1/4', 'bottom-1/2 left-1/4', 'top-2/3 left-1/3',
        'top-1/4 left-3/5', 'top-3/4 left-1/2',
        // Positions proches de l'image
        '-top-6 -left-6', '-top-10 -left-12', 'top-1/4 -left-8',
        '-top-20 -left-6', '-top-16 -left-14', '-top-24 -left-20',
        '-top-18 left-1/4', '-top-22 left-1/2', '-top-14 left-3/4',
        // Positions en bas
        '-bottom-18 -left-8', '-bottom-22 -left-16', '-bottom-16 -left-10',
        '-bottom-20 left-1/4', '-bottom-24 left-1/2', '-bottom-16 left-2/3',
        // Positions médianes
        '-left-12 top-1/3', '-left-8 bottom-1/4', '-left-18 top-1/2',
        'top-3/4 -left-16', 'bottom-1/3 -left-22',
        '-bottom-8 -left-6', '-bottom-16 -left-20', '-top-8 left-1/4',
        // Particules lointaines
        '-top-16 -left-12', 'top-1/4 -left-28', 'bottom-1/4 -left-24',
        '-bottom-10 -left-14', '-top-12 left-1/4', '-top-18 left-1/2',
        '-top-10 left-2/3', '-bottom-6 left-1/3', '-bottom-14 left-1/2', '-bottom-18 left-3/4'
    ];

    // Types de formes
    const types: Array<'circle' | 'square' | 'triangle' | 'hexagon' | 'particle'> = [
        'circle', 'circle', 'circle', 'circle', // Plus de cercles
        'square', 'square',
        'triangle',
        'hexagon',
        'particle', 'particle', 'particle'
    ];

    // Animations
    const animations = ['animate-pulse', 'animate-spin'];

    // Rotations pour les carrés
    const rotations = ['rotate-12', 'rotate-45'];

    const shapes: GeometricShape[] = [];

    for (let i = 0; i < count; i++) {
        const type = rng.choice(types);
        const isParticle = type === 'particle';
        const isBehind = rng.next() > 0.4; // 60% derrière, 40% devant

        shapes.push({
            id: i,
            type,
            size: rng.choice(isParticle ? sizes.slice(0, 4) : sizes), // Particules plus petites
            position: rng.choice(positions),
            color: rng.choice(colors),
            opacity: `opacity-${rng.range(20, 40)}`,
            animation: rng.choice(animations),
            animationDuration: `${rng.range(10, 35)}s`,
            animationDelay: `${rng.range(0, 8)}s`,
            rotation: type === 'square' ? rng.choice(rotations) : undefined,
            zIndex: isBehind ? 'behind' : 'front'
        });
    }

    return shapes;
};

/**
 * Génère les classes CSS pour une forme géométrique
 */
export const getShapeClasses = (shape: GeometricShape): string => {
    const baseClasses = `absolute ${shape.position} ${shape.size} ${shape.opacity} ${shape.animation} blur-sm`;
    
    switch (shape.type) {
        case 'circle':
        case 'particle':
            return `${baseClasses} bg-gradient-to-br ${shape.color} rounded-full`;
        
        case 'square':
            return `${baseClasses} bg-gradient-to-br ${shape.color} ${shape.rotation}`;
        
        case 'triangle':
            // Triangle CSS avec borders
            return `${baseClasses} w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-${shape.color.split(' ')[0].replace('from-', '')}`;
        
        case 'hexagon':
            return `${baseClasses} bg-gradient-to-br ${shape.color}`;
        
        default:
            return baseClasses;
    }
};

/**
 * Génère le style inline pour les animations
 */
export const getShapeStyle = (shape: GeometricShape): React.CSSProperties => {
    const style: React.CSSProperties = {
        animationDuration: shape.animationDuration,
        animationDelay: shape.animationDelay
    };

    // Hexagone : clip-path
    if (shape.type === 'hexagon') {
        style.clipPath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
    }

    // Triangle : direction aléatoire pour spin
    if (shape.type === 'triangle' && shape.animation === 'animate-spin') {
        style.animationDirection = Math.random() > 0.5 ? 'reverse' : 'normal';
    }

    return style;
};
