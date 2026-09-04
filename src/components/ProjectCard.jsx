import { ArrowUpRight, Github } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition duration-500 hover:-translate-y-2 hover:border-white/20">

      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-white/10 via-black to-black">

        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_white,_transparent_60%)]" />
        </div>

        <div className="relative text-6xl font-black text-white/10 transition duration-500 group-hover:scale-125">
          {project.number}
        </div>
      </div>

      <div className="p-7">

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500"
            >
              {item}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-3 leading-7 text-gray-500">
          {project.description}
        </p>

        <div className="mt-6 flex gap-3">

          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm transition hover:bg-white hover:text-black"
          >
            <Github size={16} />
            Code
          </a>

          <a
            href={project.demo}
            target="_blank"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-black transition hover:bg-gray-200"
          >
            Live
            <ArrowUpRight size={16} />
          </a>

        </div>
      </div>
    </article>
  );
}

export default ProjectCard;