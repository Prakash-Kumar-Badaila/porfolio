import PageHeader from "../components/PageHeader";

function Education() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Learning is part of the journey."
      />

      <section className="px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">

            <div className="flex flex-col justify-between gap-6 md:flex-row">

              <div>

                <p className="text-sm text-gray-600">
                  2024 — Present
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  Bachelor in Computer Engineering
                </h2>

                <p className="mt-2 text-gray-500">
                  Thapathali Engineering Campus — IOE
                </p>

              </div>

              <div className="text-left md:text-right">

                <p className="text-4xl font-black">
                  CE
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  Computer Engineering
                </p>

              </div>

            </div>

            <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-3">

              <div>
                <p className="text-sm text-gray-600">
                  Focus
                </p>
                <p className="mt-2 text-gray-300">
                  Software Engineering
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-600">
                  Interests
                </p>
                <p className="mt-2 text-gray-300">
                  AI / ML / Backend
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-600">
                  Approach
                </p>
                <p className="mt-2 text-gray-300">
                  Fundamentals First
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Education;