import PageHeader from "../components/PageHeader";

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Curious mind. Serious about building."
        description="A little more about who I am, what I do and where I'm going."
      />

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-600">
              My story
            </p>
          </div>

          <div className="space-y-7 text-lg leading-8 text-gray-400">

            <p>
              I'm Prakash, a Computer Engineering student and
              developer from Nepal.
            </p>

            <p>
              I started with curiosity about how software works
              and gradually became interested in web development,
              backend systems, data science and artificial intelligence.
            </p>

            <p>
              These days I'm particularly interested in building
              APIs, working with databases, training machine learning
              models and understanding how intelligent systems work
              under the hood.
            </p>

            <p>
              My long-term goal is to become an AI engineer/researcher
              capable of combining strong software engineering
              fundamentals with modern machine learning.
            </p>

          </div>

        </div>
      </section>

      <section className="border-y border-white/10 px-6 py-24">

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

          <div>
            <h3 className="text-5xl font-black">01</h3>
            <h4 className="mt-4 text-xl font-bold">
              Learn deeply
            </h4>
            <p className="mt-3 text-gray-500">
              Understand fundamentals instead of simply
              copying solutions.
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black">02</h3>
            <h4 className="mt-4 text-xl font-bold">
              Build constantly
            </h4>
            <p className="mt-3 text-gray-500">
              Turn concepts into real projects and experiments.
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black">03</h3>
            <h4 className="mt-4 text-xl font-bold">
              Keep improving
            </h4>
            <p className="mt-3 text-gray-500">
              Iterate, learn from mistakes and keep moving forward.
            </p>
          </div>

        </div>

      </section>
    </>
  );
}

export default About;