import SkillCard from "./SkillCard";
import skillsData from "./skillsData";

const Skills = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(70px,1fr))] place-items-center border-2 border-white bg-green-500 p-3 rounded-lg md:grid-cols-[repeat(auto-fit,minmax(90px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(120px,1fr))]">
      {skillsData.map((skill) => (
        <SkillCard key={skill.id} image={skill.icon} name={skill.name}/>
      ))}
    </div>
  );
}

export default Skills;