import { useEffect, useState } from "react";
import type { Technology } from "../types";
import TechCard from "./TechCard";

interface TechListProps {
  stack: Technology[];
  handleAddToStack: (tech: Technology) => void;
}

const TechList = ({ stack, handleAddToStack }: TechListProps) => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))

      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
            <div className='pt-8'>
            <h2 className='text-3xl font-bold text-left'>
                Explore the {" "}
                <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-transparent bg-clip-text'>Technologies</span>
                </h2>
                
                <p className='text-left text-gray-600'>
                    Pick one technology per category to build your ideal stack.
                </p>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
      {technologies.map((technology) => (
        <TechCard 
        key={technology.id}
        tech={technology}
        stack={stack}
        handleAddToStack={handleAddToStack}
        />
      ))}
    </div>
    </div>
  );
};

export default TechList;
