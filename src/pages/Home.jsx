import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="relative overflow-hidden bg-[#050505] text-white">

      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Ambient light */}
      <div className="pointer-events-none absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[120px]" />

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col justify-center px-6 pt-24">

        <div className="mx-auto w-full max-w-7xl">

          {/* top metadata */}
          <div className="mb-16 flex flex-col justify-between gap-4 text-xs uppercase tracking-[0.25em] text-neutral-500 md:flex-row">
            <span>Computer Engineer · Nepal</span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              Available for opportunities
            </span>
          </div>

          {/* giant heading */}
          <div className="max-w-6xl">

            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-neutral-500">
              Hello, I'm Prakash
            </p>

            <h1 className="text-[16vw] font-semibold leading-[0.78] tracking-[-0.07em] md:text-[12vw]">
              BUILDING
            </h1>

            <h1 className="ml-[8vw] text-[16vw] font-semibold leading-[0.78] tracking-[-0.07em] text-neutral-400 md:text-[12vw]">
              WITH
            </h1>

            <h1 className="text-[16vw] font-semibold leading-[0.78] tracking-[-0.07em] md:text-[12vw]">
              CODE<span className="text-neutral-600">.</span>
            </h1>

          </div>

          {/* hero bottom */}
          <div className="mt-20 grid gap-10 border-t border-white/10 pt-8 md:grid-cols-3">

            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-600">
                Currently
              </p>

              <p className="mt-3 max-w-xs text-sm leading-6 text-neutral-400">
                Learning backend development, machine learning and building
                things that solve real problems.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-600">
                Stack
              </p>

              <p className="mt-3 text-sm text-neutral-400">
                React · FastAPI · Python · ML
              </p>
            </div>

            <div className="flex items-end justify-between">

              <Link
                to="/projects"
                className="group flex items-center gap-3 text-sm uppercase tracking-widest"
              >
                Explore my work

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <div className="hidden gap-4 md:flex">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-500 transition hover:text-white"
                >
                  <Github size={18} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-500 transition hover:text-white"
                >
                  <Linkedin size={18} />
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-6 flex items-center gap-3 text-xs uppercase tracking-widest text-neutral-600">
          <ArrowDownRight size={16} />
          Scroll to explore
        </div>

      </section>


      {/* INTRO */}
      <section className="border-t border-white/10 px-6 py-32 md:py-48">

        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
              01 — About
            </p>
          </div>

          <div>
            <p className="text-3xl leading-tight tracking-tight text-neutral-300 md:text-5xl">
              I don't just want to use technology.
              <span className="text-white">
                {" "}
                I want to understand how it works.
              </span>
            </p>

            <p className="mt-10 max-w-xl text-base leading-8 text-neutral-500">
              From frontend interfaces to backend systems and machine learning,
              I'm building my foundation one concept at a time.
            </p>

            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-3 border-b border-white/30 pb-2 text-sm uppercase tracking-widest transition hover:border-white"
            >
              More about me

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

        </div>

      </section>


      {/* FEATURED PROJECT */}
      <section className="border-t border-white/10 px-6 py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20 flex items-end justify-between">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
                02 — Selected work
              </p>

              <h2 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
                Projects<span className="text-neutral-600">.</span>
              </h2>
            </div>

            <Link
              to="/projects"
              className="hidden text-sm uppercase tracking-widest text-neutral-500 transition hover:text-white md:block"
            >
              View all →
            </Link>

          </div>


          {/* project */}
          <Link
            to="/projects"
            className="group block"
          >

            <div className="relative aspect-[16/9] overflow-hidden border border-white/10 bg-neutral-950">

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="text-center">

                  <p className="text-xs uppercase tracking-[0.4em] text-neutral-600">
                    Machine Learning
                  </p>

                  <h3 className="mt-6 text-5xl font-semibold tracking-tight transition-transform duration-700 group-hover:scale-105 md:text-8xl">
                    HOUSE
                    <br />
                    PREDICTOR
                  </h3>

                </div>

              </div>

              {/* hover line */}
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-700 group-hover:w-full" />

              <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={20} />
              </div>

            </div>

            <div className="mt-6 flex flex-col justify-between gap-4 md:flex-row">

              <div>
                <h3 className="text-2xl font-medium">
                  AI House Price Predictor
                </h3>

                <p className="mt-2 text-sm text-neutral-600">
                  Linear Regression · Python · Scikit-learn
                </p>
              </div>

              <span className="text-sm text-neutral-600">
                01 / 06
              </span>

            </div>

          </Link>

        </div>

      </section>


      {/* TERMINAL */}
      <section className="border-t border-white/10 px-6 py-32 md:py-48">

        <div className="mx-auto max-w-5xl">

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
            03 — Current system
          </p>

          <div className="mt-10 overflow-hidden border border-white/10 bg-[#090909]">

            {/* terminal header */}
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">

              <span className="h-3 w-3 rounded-full bg-neutral-700" />
              <span className="h-3 w-3 rounded-full bg-neutral-700" />
              <span className="h-3 w-3 rounded-full bg-neutral-700" />

              <span className="ml-4 font-mono text-xs text-neutral-600">
                prakash@dev ~
              </span>

            </div>

            {/* terminal content */}
            <div className="space-y-6 p-6 font-mono text-sm md:p-10">

              <p>
                <span className="text-neutral-600">$</span>{" "}
                <span className="text-white">whoami</span>
              </p>

              <p className="text-neutral-500">
                computer_engineer // builder // learner
              </p>

              <p>
                <span className="text-neutral-600">$</span>{" "}
                <span className="text-white">current_focus</span>
              </p>

              <p className="text-neutral-500">
                Python → FastAPI → Machine Learning → AI
              </p>

              <p>
                <span className="text-neutral-600">$</span>{" "}
                <span className="text-white">next_goal</span>
              </p>

              <p className="text-neutral-500">
                Build systems. Understand fundamentals. Ship useful things.
              </p>

              <p>
                <span className="text-neutral-600">$</span>{" "}
                <span className="animate-pulse">_</span>
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="border-t border-white/10 px-6 py-40">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
            04 — Contact
          </p>

          <h2 className="mt-10 max-w-5xl text-[13vw] font-semibold leading-[0.82] tracking-[-0.07em] md:text-[9vw]">
            LET'S
            <br />
            BUILD
            <br />
            SOMETHING<span className="text-neutral-600">.</span>
          </h2>

          <div className="mt-16 flex flex-col justify-between gap-10 border-t border-white/10 pt-8 md:flex-row">

            <p className="max-w-md text-neutral-500">
              Have an idea, opportunity or project worth discussing?
              Let's talk.
            </p>

            <Link
              to="/contact"
              className="group flex items-center gap-4 text-lg"
            >
              Start a conversation

              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition duration-300 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={20} />
              </span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;