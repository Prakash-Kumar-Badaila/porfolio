import PageHeader from "../components/PageHeader";
import { skills } from "../data/skills";

function Skills() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Tools I use to turn ideas into software."
      />

      <section className="px-6 py-24">

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">

          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/20"
            >

              <h2 className="text-2xl font-bold">
                {skill.category}
              </h2>

              <div className="mt-7 flex flex-wrap gap-3">

                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </section>
    </>
  );
}

export default Skills;