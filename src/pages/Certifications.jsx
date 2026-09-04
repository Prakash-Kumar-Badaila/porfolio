import PageHeader from "../components/PageHeader";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Python Programming",
    issuer: "Online Learning",
    year: "2026",
  },

  {
    title: "Machine Learning Fundamentals",
    issuer: "Online Learning",
    year: "2026",
  },

  {
    title: "Web Development",
    issuer: "Online Learning",
    year: "2025",
  },

  {
    title: "Git & GitHub",
    issuer: "Online Learning",
    year: "2025",
  },
];

function Certifications() {
  return (
    <>
      <PageHeader
        eyebrow="Certifications"
        title="Learning beyond the classroom."
      />

      <section className="px-6 py-24">

        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">

          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20"
            >

              <div className="flex items-center gap-5">

                <div className="rounded-2xl border border-white/10 p-4">
                  <Award size={24} />
                </div>

                <div>
                  <h3 className="font-bold">
                    {certificate.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {certificate.issuer}
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    {certificate.year}
                  </p>
                </div>

              </div>

              <ExternalLink
                size={18}
                className="text-gray-600 transition group-hover:text-white"
              />

            </div>
          ))}

        </div>

      </section>
    </>
  );
}

export default Certifications;