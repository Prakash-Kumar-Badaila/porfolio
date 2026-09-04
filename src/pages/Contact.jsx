import { useState } from "react";
import PageHeader from "../components/PageHeader";
import {
  Mail,
  Github,
  Linkedin,
  Send,
} from "lucide-react";

function Contact() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's create something meaningful."
        description="Have an idea, opportunity or simply want to talk? Send me a message."
      />

      <section className="px-6 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          {/* INFO */}

          <div>

            <p className="max-w-lg text-xl leading-8 text-gray-400">
              I'm always interested in interesting projects,
              learning opportunities and conversations around
              technology.
            </p>

            <div className="mt-10 space-y-5">

              <a
                href="mailto:badailap928@gmail.com"
                className="flex items-center gap-4 text-gray-400 hover:text-white"
              >
                <Mail size={20} />
                badailap928@gmail.com
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="flex items-center gap-4 text-gray-400 hover:text-white"
              >
                <Github size={20} />
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="flex items-center gap-4 text-gray-400 hover:text-white"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>

            </div>

          </div>


          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-10"
          >

            <div className="space-y-6">

              <div>
                <label className="mb-2 block text-sm text-gray-500">
                  Name
                </label>

                <input
                  required
                  type="text"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-white/30"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-500">
                  Email
                </label>

                <input
                  required
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-white/30"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-500">
                  Message
                </label>

                <textarea
                  required
                  rows="6"
                  className="w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-white/30"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 font-medium text-black transition hover:bg-gray-200"
              >
                {submitted ? "Message ready!" : "Send message"}
                <Send size={17} />
              </button>

            </div>

          </form>

        </div>

      </section>
    </>
  );
}

export default Contact;