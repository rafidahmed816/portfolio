export function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    },
    {
      name: "Tools",
      skills: ["Git", "Docker", "AWS", "Vercel"],
    },
  ];

  return (
    <section className="prose prose-slate dark:prose-invert max-w-none text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">Skills</h2>
      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-medium mb-3">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-(--hover) text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}