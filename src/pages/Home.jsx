import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Home() {
  return (
    <>

      {/* HERO */}

      <section className="relative flex min-h-screen items-center overflow-hidden px-6">

        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl pt-20">

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-gray-500">
            Computer Engineering Student • Developer
          </p>

          <h1 className="max-w-5xl text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">

            Building the
            <br />

            <span className="gradient-text">
              future with code.
            </span>

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-500">
            I'm Prakash — a developer focused on backend engineering,
            artificial intelligence and building useful software that
            solves real problems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/projects"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
            >
              Explore my work
              <ArrowUpRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-white/20 px-6 py-3 transition hover:bg-white hover:text-black"
            >
              Let's connect
            </Link>

          </div>

          <div className="mt-10 flex gap-3">

            <a
              href="https://github.com"
              target="_blank"
              className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:text-white"
            >
              <Github size={19} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:text-white"
            >
              <Linkedin size={19} />
            </a>

          </div>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600">
          <ArrowDown className="animate-bounce" />
        </div>

      </section>


      {/* INTRO */}

      <section className="border-y border-white/10 px-6 py-28">

        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-600">
              About me
            </p>
          </div>

          <div>
            <p className="text-3xl leading-relaxed text-gray-300 md:text-4xl">
              I enjoy turning complex problems into
              <span className="text-white"> simple, elegant software.</span>
              My current focus is backend development,
              data science and AI.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white"
            >
              More about me
              <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>

      </section>


      {/* FEATURED PROJECTS */}

      <section className="px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="Selected work"
            title="Featured projects"
          />

          <div className="grid gap-6 md:grid-cols-2">

            {projects.slice(0, 4).map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}

          </div>

          <div className="mt-10 text-center">

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm transition hover:bg-white hover:text-black"
            >
              View all projects
              <ArrowUpRight size={16} />
            </Link>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="px-6 py-28">

        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.02] p-10 text-center md:p-20">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-600">
            Have a project?
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black md:text-6xl">
            Let's build something
            <span className="text-gray-500"> remarkable.</span>
          </h2>

          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-black transition hover:scale-105"
          >
            Start a conversation
          </Link>

        </div>

      </section>

    </>
  );
}

export default Home;