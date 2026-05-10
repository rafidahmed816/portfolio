export function Research() {
  const papers = [
    {
      title: "Research Paper One",
      year: "2024",
      description:
        "Published in Journal of Computer Science. Explores new approaches to machine learning optimization.",
    },
    {
      title: "Research Paper Two",
      year: "2023",
      description:
        "Presented at International Conference on AI. Focuses on natural language processing.",
    },
  ];

  return (
    <section className="prose prose-slate dark:prose-invert max-w-none text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
        Research
      </h2>
      <div className="space-y-6">
        {papers.map((paper, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold">{paper.title}</h3>
            <p className="text-sm opacity-70 mb-2">{paper.year}</p>
            <p className="opacity-90">{paper.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}