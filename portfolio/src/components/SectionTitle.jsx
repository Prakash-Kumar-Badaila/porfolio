function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mb-12">
      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-600">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;