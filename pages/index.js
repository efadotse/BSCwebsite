import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BentoSlideshow from '../components/BentoSlideshow'
import ClientsCarousel from '../components/ClientsCarousel'
import ContactInfoPanel from '../components/ContactInfoPanel'
import Footer from '../components/Footer'

const projects = [
  {title: 'ASHESI UNIVERSITY', excerpt: 'Energy-efficient HVAC design for a 12-storey building.', image: 'project-1.jpg', href: '/projects/ashesi-university'},
  {title: 'ICGC-Christ Temple East', excerpt: 'High-density cooling solution with redundancy.', image: 'project-2.jpg', href: '/projects/icgc-christ-temple-east'},
  {title: 'DIGITAL REALTY', excerpt: 'Integrated MEP systems for mixed residential and retail.', image: 'project-3.jpg', href: '/projects/digital-realty'},
  {title: 'THE NOVA', excerpt: 'Critical MEP systems for healthcare facility.', image: 'project-4.jpg', href: '/projects/the-nova'},
  {title: 'GOOGLE GHANA', excerpt: 'IoT-enabled mechanical and electrical systems.', image: 'project-5.jpg', href: '/projects/google-ghana'}
]

export default function Home(){
  return (
    <div>
      <Navbar />
      <Hero title={"Engineering Better Buildings. Powering Better Futures."} subtitle={"We deliver integrated Mechanical, Electrical and Plumbing engineering solutions for buildings and infrastructure across Ghana and West Africa."} cta={{href:'/projects', label:'Explore Projects'}} />
      <main>
        <section className="py-12">
          <div className="container mx-auto mb-16 rounded-[2rem] bg-slate-100 px-6 py-10 shadow-xl shadow-slate-900/10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.32em] text-blue-400 mb-3">Industries we serve</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Experience Across Diverse Sectors</h2>
              </div>
              <div className="text-right">
                <a href="/projects" className="text-blue-400 font-semibold inline-flex items-center gap-2 hover:text-blue-400">
                  View all industries
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Commercial Developments' },
                { label: 'Residential Communities' },
                { label: 'Education & Universities' },
                { label: 'Healthcare Facilities' },
                { label: 'Hospitality & Leisure' },
                { label: 'Industrial & Manufacturing' },
                { label: 'Mixed-Use Developments' },
                { label: 'Public Infrastructure' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 text-xl">•</span>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse inline-block" aria-hidden="true" />
              <span className="uppercase tracking-widest text-sm">PROJECT</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tight uppercase">PORTFOLIO</h2>
          </div>

          <BentoSlideshow projects={projects} />

          <ClientsCarousel />
          
        </section>
      </main>
      <ContactInfoPanel />
      <Footer />
    </div>
  )
}
