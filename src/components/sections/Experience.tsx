export function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Tech Company",
      period: "2023 - Present",
      description:
        "Building scalable web applications using React and Node.js.",
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2021 - 2023",
      description: "Developed internal tools and customer-facing features.",
    },
    {
      title: "Intern Developer",
      company: "Code Factory",
      period: "2020 - 2021",
      description: "Assisted with frontend development and bug fixes.",
    },
  ];

  return (
    <section className="prose prose-slate dark:prose-invert max-w-none text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
        Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-(--border) pl-4">
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <p className="text-sm opacity-70 mb-2">
              {exp.company} | {exp.period}
            </p>
            <p className="opacity-90">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
