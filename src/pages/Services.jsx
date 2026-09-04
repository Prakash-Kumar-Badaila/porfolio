import PageHeader from "../components/PageHeader";
import {
  Server,
  Brain,
  Code2,
  Database,
} from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Build clean, scalable APIs and backend systems using Python and modern frameworks.",
  },

  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Develop practical ML solutions for prediction, classification and data-driven applications.",
  },

  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Create responsive interfaces using React, JavaScript and Tailwind CSS.",
  },

  {
    icon: Database,
    title: "Database Systems",
    description:
      "Design structured data models and work with SQL databases for reliable applications.",
  },
];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What I can build."
      />

      <section className="px-6 py-24">

        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >

                <Icon size={30} />

                <h2 className="mt-8 text-2xl font-bold">
                  {service.title}
                </h2>

                <p className="mt-4 max-w-lg leading-8 text-gray-500">
                  {service.description}
                </p>

              </div>
            );
          })}

        </div>

      </section>
    </>
  );
}

export default Services;