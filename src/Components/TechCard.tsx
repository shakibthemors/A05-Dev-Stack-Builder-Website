import type { Technology } from "../types";
import { FaStar } from "react-icons/fa";
interface TechCardProps {
    tech: Technology;
    stack: Technology[];
    handleAddToStack: (tech: Technology) => void;
}

const TechCard = ({ tech, stack, handleAddToStack }: TechCardProps) => {
    const isAdded = stack.some((item) => item.id === tech.id);
    
    const badgecolors ={
        Popular: "bg-blue-50 text-blue-500 border border-blue-200",
        Versatile:"bg-green-50 text-green-500 border border-green-200",
        Fast:"bg-orange-50 text-orange-500 border border-orange-200",
        "SSR / Edge": "bg-blue-50 text-blue-500 border border-blue-200",
        Standard: "bg-green-50 text-green-500 border border-green-200",
        "Top SQL": "bg-blue-50 text-blue-500 border border-blue-200",
        Cache: "bg-red-50 text-red-500 border border-red-200",
        Ubiquitous: "bg-yellow-50 text-yellow-500 border border-yellow-200",
        Essential: "bg-blue-50 text-blue-500 border border-blue-200",
        Robust: "bg-blue-50 text-blue-500 border border-blue-200",
        Modern: "bg-cyan-50 text-cyan-500 border border-cyan-200",
        Containers: "bg-blue-50 text-blue-500 border border-blue-200",
    }
    const badgeColor = badgecolors[tech.badge as keyof typeof badgecolors];
    return (
        <div className="border border-pink-200 p-5 rounded-2xl shadow-sm hover:border-pink-300 hover:shadow-md transition h-full flex flex-col">
            <div className="flex justify-between items-start">
            <img src={tech.icon} alt={tech.name} 
            className="w-10 h-10 object-contain"/>

            <span className={`${badgeColor} px-3 py-1 rounded-full text-xs font-medium`}>
                {tech.badge}
            </span>
        </div>
            <h3 className="text-xl font-bold mt-5">{tech.name}</h3>
            <p className="mt-2 text-sm text-gray-500 leading-6 min-h-18">
                {tech.description}
            </p>

            <div className="mt-4">
                <div className="flex flex-wrap justify-between items-center gap-2 text-sm">
                    <span className="whitespace-nowrap bg-gray-100 border border-gray-100 px-2 py-1 rounded-2xl text-gray-600">
                        {tech.category}
                    </span>
                    <span className="whitespace-nowrap  text-gray-500">
                        {tech.difficulty}
                    </span>
                    <span className="whitespace-nowrap flex items-center gap-1">
                        <FaStar className=" text-yellow-400" />
                        {tech.rating}
                    </span>
                </div>
            </div>
            
            <button onClick={() => handleAddToStack(tech)}
            disabled={isAdded}
            className="mt-4 w-full rounded-xl py-3 text-sm font-medium bg-[#0A0F1D] text-white disabled:opacity-60">
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>

        </div>
    );
};

export default TechCard;