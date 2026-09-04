import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">

        <div>
          <h2 className="text-xl font-bold">PK.</h2>
          <p className="mt-2 max-w-sm text-sm text-gray-500">
            Building intelligent software, scalable backends
            and meaningful digital experiences.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            className="rounded-full border border-white/10 p-3 transition hover:bg-white hover:text-black"
          >
            <Github size={18} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="rounded-full border border-white/10 p-3 transition hover:bg-white hover:text-black"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="mailto:hello@example.com"
            className="rounded-full border border-white/10 p-3 transition hover:bg-white hover:text-black"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl items-center justify-between border-t border-white/10 pt-6 text-xs text-gray-600">
        <p>© 2026 Prakash Kumar Badaila</p>

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="flex items-center gap-2 hover:text-white"
        >
          Back to top
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;