import { useParams } from "react-router-dom";
import projectsData from "../../data/projectsData";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projectsData.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="flex justify-center items-center text-center p-2 min-h-dvh">
      <div className="container">
        <div className="flex flex-col justify-between gap-3 p-2 border-2 border-green-500 rounded-lg lg:min-h-[90vh]">

          <Link to={"/"}>
            <ArrowLeft className="border border-green-500 rounded-sm cursor-pointer w-full max-w-12" />
          </Link>
          <h3 className="text-lg md:text-xl">{project.title}</h3>

          <div className="flex flex-wrap justify-center items-center gap-2">
            {project.gallery.map((img, index) => (
              <img key={index} src={img} alt="project-img" className="w-full max-w-[150px] min-h-28 lg:max-w-[350px] lg:max-h-40" />
            ))}
          </div>

          <p className="md:text-lg">{project.longDescription}</p>

          <div className="flex gap-2 justify-center items-center md:text-lg md:p-1 ">
            {project.features.map((feature, index) => (
              <span key={index} className="border border-green-500 rounded-md p-1 flex-auto">
                {feature}
              </span>
            ))}
          </div>

          <ul className="flex flex-col gap-2">

            <div className="ProjectDetails-links">
              <span className="md:text-lg">Live link: </span>
              <li><a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="ProjectDetails-live-link">{project.liveLabel}</a></li>
            </div>

            <div className="ProjectDetails-links">
              <span className="md:text-lg">Code review</span>
              <li><a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="ProjectDetails-live-link">{project.githubLabel}</a></li>
            </div>

          </ul>

          <div className="flex justify-center items-center gap-2">

            <span>Build with: </span>
            {project.stack.map((stack, index) => (
              <span key={index} className="border border-green-500 rounded-md p-1 flex-auto md:text-lg">
                {stack}
              </span>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
