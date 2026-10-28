import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import Link from 'next/link'

const projects = [
  { id: 1, title: 'ASHESI UNIVERSITY', image: '/images/projects/project-1.jpg', span: 'col-span-2 row-span-2', href: '/projects/ashesi-university' },
  { id: 2, title: 'ICGC-CHRIST TEMPLE EAST', image: '/images/projects/project-2.jpg', span: '', href: '/projects/icgc-christ-temple-east' },
  { id: 3, title: 'DIGITAL REALTY', image: '/images/projects/project-3.jpg', span: '', href: '/projects/digital-realty' },
  { id: 4, title: 'THE NOVA', image: '/images/projects/project-4.jpg', span: '', href: '/projects/the-nova' },
  { id: 5, title: 'GOOGLE GHANA', image: '/images/projects/project-5.jpg', span: '', href: '/projects/google-ghana' },
  { id: 6, title: 'Industrial Plant Retrofit', image: '/images/projects/project-6.jpg', span: 'col-span-2' },
  { id: 7, title: 'CH GROUP', image: '/images/projects/project-7.jpg', span: '' },
  { id: 8, title: 'Sustainable Campus Development', image: '/images/projects/project-8.jpg', span: '' },
]

export default function Projects(){
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <section className="container py-20">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.32em] text-amber-400 mb-4">Our Projects</p>
            <h1 className="max-w-5xl mx-auto text-4xl md:text-5xl font-bold leading-tight">"Every project we undertake reflects our commitment to engineering environments that perform, endure and inspire. From building services to large-scale infrastructure, our work delivers efficient, sustainable and future-ready MEP solutions shaped by technical excellence, integrity and lasting impact."
            </h1>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {projects.map((project) => (
              project.href ? (
                <Link
                  href={project.href}
                  key={project.id}
                  className={`${project.span} rounded-2xl bg-slate-300 overflow-hidden relative group cursor-pointer block`}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className={`absolute inset-0 bg-black/60 flex items-center justify-center rounded-2xl transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}>
                    <h3 className="text-white text-center text-lg font-semibold px-6">{project.title}</h3>
                  </div>
                </Link>
              ) : (
                <div
                  key={project.id}
                  className={`${project.span} rounded-2xl bg-slate-300 overflow-hidden relative group cursor-pointer`}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className={`absolute inset-0 bg-black/60 flex items-center justify-center rounded-2xl transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}>
                    <h3 className="text-white text-center text-lg font-semibold px-6">{project.title}</h3>
                  </div>
                </div>
              )
            ))}
          </div>

          <section className="bg-blue-900 text-white py-16 rounded-3xl container mx-auto my-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-8">
              <div className="flex items-center gap-6">
                <div className="text-5xl"><img src="/images/services-icons/Delivered.png" alt="Plumbing engineering design icon" className="w-24 h-24 object-contain" /></div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Have a Project in Mind?</h2>
                  <p className="text-blue-100">Let's discuss how we can help you design better building systems.</p>
                </div>
              </div>
              <a href="/contact" className="inline-block px-6 py-3 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition whitespace-nowrap">
                Schedule a Consultation →
              </a>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  )
}
