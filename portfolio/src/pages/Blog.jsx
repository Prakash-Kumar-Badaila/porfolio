import PageHeader from "../components/PageHeader";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    date: "September 2026",
    category: "FastAPI",
    title: "Understanding REST APIs with FastAPI",
    description:
      "Notes and practical lessons from learning backend development with FastAPI.",
  },

  {
    date: "August 2026",
    category: "Machine Learning",
    title: "From Python to Machine Learning",
    description:
      "A practical roadmap for strengthening Python fundamentals before jumping into ML.",
  },

  {
    date: "August 2026",
    category: "Programming",
    title: "Why fundamentals matter",
    description:
      "Why understanding the basics can make advanced programming concepts easier.",
  },
];

function Blog() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Thoughts, notes and things I'm learning."
      />

      <section className="px-6 py-24">

        <div className="mx-auto max-w-5xl">

          {posts.map((post) => (
            <article
              key={post.title}
              className="group border-b border-white/10 py-10"
            >

              <div className="flex flex-col justify-between gap-6 md:flex-row">

                <div>

                  <div className="flex gap-4 text-xs uppercase tracking-widest text-gray-600">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>

                  <h2 className="mt-5 text-3xl font-bold transition group-hover:text-gray-400">
                    {post.title}
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-gray-500">
                    {post.description}
                  </p>

                </div>

                <div className="flex items-center">
                  <ArrowUpRight
                    className="text-gray-600 transition group-hover:text-white"
                  />
                </div>

              </div>

            </article>
          ))}

        </div>

      </section>
    </>
  );
}

export default Blog;