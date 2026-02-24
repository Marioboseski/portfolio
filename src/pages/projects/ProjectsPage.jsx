import Project from "./Project";
import projectsData from "../../data/projectsData";

const ProjectsPage = () => {
  return (
    <div id="projects" className="container">
      <div className="flex flex-col items-center gap-4 p-2">
        {projectsData.map((project) => (
          <Project
            key={project.slug}
            image={project.image}
            title={project.title}
            description={project.shortDescription}
            tags={project.tags}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
