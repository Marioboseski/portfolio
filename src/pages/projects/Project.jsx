import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Project = ({ image, title, description, tags = [], slug }) => {
  return (
    <div className="flex flex-col justify-center gap-2 w-full p-2 border-2 border-green-500 rounded-lg">
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={image} alt="project-image" className="w-full max-w-96 md:max-w-[420px] max-h-60" />
        <p className="border-b border-gray-300 p-1 md:text-xl">{title}</p>
        <p className="border-b border-gray-300 text-center p-1 md:text-lg">{description}</p>
      </div>
      <div className="flex p-2 gap-2">
        {tags.map((tag, index) => (
          <p key={index} className="border-2 p-1 flex-auto text-center rounded-md md:text-lg">{tag}</p>
        ))}
      </div>
      <Link to={`/projects/${slug}`} className="flex justify-center items-center text-center gap-2 border-2 border-green-500 rounded-md w-full max-w-[200px] p-1 text-lg transition-all duration-200 hover:scale-105 md:text-xl cursor-pointer">View project <ArrowRight /></Link>
    </div>
  );
}

export default Project;