import PageHeader from "../components/PageHeader";

const experiences = [
  {
    year: "2026 — Present",
    title: "Backend & AI Development",
    company: "Independent / Personal Projects",
    description:
      "Building backend APIs, machine learning systems and full-stack applications while strengthening software engineering fundamentals.",
  },

  {
    year: "2025 — 2026",
    title: "Full-Stack Development",
    company: "Personal Projects",
    description:
      "Worked with React, JavaScript, Django, REST APIs, databases and Git while building practical applications.",
  },

  {
    year: "2025",
    title: "Programming & Engineering",
    company: "Computer Engineering",
    description:
      "Developed C++ projects, Android applications and software engineering fundamentals through academic and personal work.",
  },
];

function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="My journey so far."
      />

      <section className="px-6 py-24">

        <div className="mx-auto max-w-5xl">

          {experiences.map((item, index) => (
            <div
              key={item.year}
              className="relative grid gap-6 border-l border-white/10 pb-16 pl-8 md:grid-cols-[180px_1fr]"
            >

              <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-white" />

              <p className="text-sm text-gray-600">
                {item.year}
              </p>

              <div>

                <h2 className="text-2xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-1 text-gray-500">
                  {item.company}
                </p>

                <p className="mt-5 max-w-2xl leading-8 text-gray-500">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>
    </>
  );
}

export default Experience;