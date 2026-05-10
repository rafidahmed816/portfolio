export function Blog() {
  const posts = [
    {
      title: "Getting Started with Next.js 15",
      date: "May 2025",
      excerpt: "A comprehensive guide to building modern web applications with Next.js 15.",
    },
    {
      title: "Best Practices for React Performance",
      date: "April 2025",
      excerpt: "Tips and tricks to optimize your React applications for better performance.",
    },
    {
      title: "Dark Mode Implementation Guide",
      date: "March 2025",
      excerpt: "How to implement dark mode in web applications using CSS and JavaScript.",
    },
  ];

  return (
    <section className="prose prose-slate dark:prose-invert max-w-none text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">Blog</h2>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <article key={index} className="border-b border-(--border) pb-6">
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <p className="text-sm opacity-70 mb-2">{post.date}</p>
            <p className="opacity-90">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}