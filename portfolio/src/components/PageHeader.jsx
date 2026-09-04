function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="border-b border-white/10 px-6 pb-20 pt-40">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-500">
          {eyebrow}
        </p>

        <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

export default PageHeader;