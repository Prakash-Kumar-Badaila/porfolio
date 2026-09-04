import PageHeader from "../components/PageHeader";
import { ArrowUpRight } from "lucide-react";

const posts = [
  

  {
    date: "August 2026",
    category: "Programming",
    title: "Why Fundamentals Matter",
    description:
      "Why understanding the basics can make advanced programming concepts easier.",
    link: "http://drive.google.com/open?id=1XwKYDZwrfOJjmywQDukINdVgjG20FHfE&resourcekey=",
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
            <a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-b border-white/10 py-10"
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
                    className="text-gray-600 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                  />
                </div>

              </div>
            </a>
          ))}

        </div>
      </section>
    </>
  );
}

export default Blog;