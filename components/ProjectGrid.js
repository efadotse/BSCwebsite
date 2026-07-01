export default function ProjectGrid({projects=[]}){
  return (
    <section className="py-16">
      <div className="container grid gap-8 md:grid-cols-2">
        {projects.map((p, i)=> (
          <article key={i} className="border p-6">
            <div className="h-40 bg-gray-100 mb-4" />
            <h3 className="text-x2 font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
