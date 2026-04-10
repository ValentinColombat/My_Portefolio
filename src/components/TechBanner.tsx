import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgSQL from "../assets/techno/sql.png";
import imgPRISMA from "../assets/techno/prisma.webp";

const stack = [
    { name: "HTML", image: imgHTML },
    { name: "CSS", image: imgCSS },
    { name: "JavaScript", image: imgJS },
    { name: "TypeScript", image: imgTYPE },
    { name: "React", image: imgREACT },
    { name: "Next.js", image: imgNEXT },
    { name: "Node.js", image: imgNODE },
    { name: "Tailwind CSS", image: imgTAILWIND },
    { name: "SQL", image: imgSQL },
    { name: "Prisma", image: imgPRISMA },
    { name: "Swift UI", image: null },
    { name: "Supabase", image: null },
    { name: "Docker", image: null },
    { name: "Git", image: null },
    { name: "Svelte", image: null },
    { name: "Express.js", image: null },
];

const TechItem = ({ name, image }: { name: string; image: string | null }) => (
    <div className="flex items-center gap-2.5 px-5 py-2.5 mx-2 flex-shrink-0">
        {image ? (
            <img src={image} alt={name} className="w-5 h-5 object-contain" />
        ) : (
            <span className="w-5 h-5 flex items-center justify-center text-amber-500 font-black text-xs">✦</span>
        )}
        <span className="text-sm font-semibold text-gray-600 whitespace-nowrap">{name}</span>
    </div>
);

const Separator = () => (
    <span className="text-amber-400 font-black text-lg mx-1 flex-shrink-0 select-none">·</span>
);

const TechBanner = () => {
    const items = [...stack, ...stack]; // duplicate pour boucle infinie

    return (
        <div className="w-full overflow-hidden border-y border-gray-100 bg-white py-1">
            <div className="flex tech-marquee">
                {items.map((item, i) => (
                    <span key={i} className="flex items-center">
                        <TechItem name={item.name} image={item.image} />
                        <Separator />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TechBanner;
