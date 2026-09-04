import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">

      <div className="text-center">

        <p className="text-9xl font-black tracking-tighter">
          404
        </p>

        <h1 className="mt-5 text-3xl font-bold">
          Page not found
        </h1>

        <p className="mt-3 text-gray-500">
          Looks like this page doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black"
        >
          <ArrowLeft size={17} />
          Back home
        </Link>

      </div>

    </section>
  );
}

export default NotFound;