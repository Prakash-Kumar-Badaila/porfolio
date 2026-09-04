import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've built."
        description="A collection of experiments, applications and engineering projects."
      />

      <section className="px-6 py-24">

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </div>

      </section>
    </>
  );
}

export default Projects;