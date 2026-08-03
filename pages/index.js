import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BentoSlideshow from '../components/BentoSlideshow'
import ClientsCarousel from '../components/ClientsCarousel'
import ContactInfoPanel from '../components/ContactInfoPanel'
import Footer from '../components/Footer'

const projects = [
  {title: 'ASHESI UNIVERSITY', excerpt: 'Delivered integrated Mechanical, Electrical and Plumbing (MEP) engineering services for a modern academic campus, incorporating energy-efficient HVAC, public health systems, fire protection and sustainable infrastructure to enhance occupant comfort and operational performance.', image: 'project-1.jpg', href: '/projects/ashesi-university'},
  {title: 'ICGC-Christ Temple East', excerpt: 'Designed high-capacity HVAC and building services systems to maintain thermal comfort, indoor air quality and operational reliability within a large worship facility accommodating thousands of occupants.', image: 'project-2.jpg', href: '/projects/icgc-christ-temple-east'},
  {title: 'DIGITAL REALTY', excerpt: 'Engineered mission-critical Mechanical, Electrical and Plumbing (MEP) infrastructure supporting uninterrupted data centre operations through precision cooling, redundancy planning and energy-efficient environmental control systems.', image: 'project-3.jpg', href: '/projects/digital-realty'},
  {title: 'THE NOVA', excerpt: 'Comprehensive MEP design focused on energy efficiency, occupant wellbeing and long-term operational performance for high-end residential developments.', image: 'project-4.jpg', href: '/projects/the-nova'},
  {title: 'GOOGLE GHANA', excerpt: 'Designed integrated MEP systems supporting Google\'s innovative workplace through sustainable engineering, efficient environmental control and reliable building infrastructure.', image: 'project-5.jpg', href: '/projects/google-ghana'}
]

function getProjectBrandLogo(href) {
  if (!href) return '/images/logo.png'
  const slug = href.split('/').pop()
  const folder = slug === 'ashesi-university' ? 'ashesi' : slug
  return `/images/project-details/${folder}/brand/logo.png`
}

const testimonialByProject = {
  '/projects/ashesi-university': {
    quote: 'Built Services Consult has been a trusted partner in our journey to build a world-class university. Their MEP expertise, professionalism, and commitment to quality have been instrumental in shaping our campus.',
    role: 'Ashesi University Project Team'
  },
  '/projects/icgc-christ-temple-east': {
    quote: 'Built Services Consult demonstrated outstanding professionalism, technical expertise, and commitment to excellence in delivering MEP solutions that support our mission and vision for Christ Temple East.',
    role: 'ICGC Project Team'
  },
  '/projects/digital-realty': {
    quote: 'Built Services Consult demonstrated exceptional technical expertise, collaboration, and commitment to quality throughout the project lifecycle. Their MEP solutions are integral to the reliability and efficiency of our data center in Ghana.',
    role: 'Digital Realty Project Team'
  },
  '/projects/the-nova': {
    quote: 'Built Services Consult delivered exceptional MEP consultancy services for The Nova Apartments. Their professionalism, technical expertise, and commitment to quality were key to the success of this landmark project.',
    role: 'DevtracoPlus'
  },
  '/projects/google-ghana': {
    quote: 'The Built Services Consult team demonstrated deep technical expertise, collaborative approach, and a strong commitment to quality. Their MEP solutions have been instrumental in creating an innovative and sustainable workplace for us.',
    role: 'Google Facilities & Real Estate Team'
  }
}

const testimonials = projects
  .map((project) => {
    const projectTestimonial = testimonialByProject[project.href]
    if (!projectTestimonial) return null

    return {
      href: project.href,
      company: project.title,
      quote: projectTestimonial.quote,
      role: projectTestimonial.role,
      logo: getProjectBrandLogo(project.href)
    }
  })
  .filter(Boolean)

export default function Home(){
  return (
    <div>
      <Navbar />
      <Hero title={"Engineering Better Buildings. Powering Better Futures."} subtitle={"We deliver integrated Mechanical, Electrical and Plumbing engineering solutions for buildings and infrastructure across Ghana and West Africa."} cta={{href:'/about', label:'Explore Who We Are'}} />
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
                  View projects
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Commercial Developments', icon: '/images/industries-icons/commercial-developments.png' },
                { label: 'Residential Communities', icon: '/images/industries-icons/residential-communities.png' },
                { label: 'Schools, Colleges & Universities', icon: '/images/industries-icons/education-universities.png' },
                { label: 'Healthcare Facilities', icon: '/images/industries-icons/healthcare-facilities.png' },
                { label: 'Hospitality & Leisure', icon: '/images/industries-icons/hospitality-leisure.png' },
                { label: 'Industrial & Manufacturing', icon: '/images/industries-icons/industrial-manufacturing.png' },
                { label: 'Mixed-Use Developments', icon: '/images/industries-icons/mixed-use-developments.png' },
                { label: 'Public Infrastructure', icon: '/images/industries-icons/public-infrastructure.png' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 text-xl overflow-hidden">
                    <img
                      src={item.icon}
                      alt={`${item.label} icon`}
                      className="h-6 w-6 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.parentElement.textContent = '•'
                      }}
                    />
                  </span>
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

          <section className="container mt-12">
            <div className="overflow-x-auto pb-3 [scrollbar-width:thin]">
              <div className="flex min-w-max gap-4 pr-4">
                <div className="w-[320px] flex-shrink-0 rounded-2xl border border-slate-200 bg-white p-8 md:w-[360px]">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">Client Testimonials</p>
                <h3 className="text-3xl font-bold leading-tight text-slate-900">Trusted by Clients. Proven by Results.</h3>
                <a href="/projects" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500">
                  View more testimonials
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              {testimonials.map((item) => (
                <article key={item.href} className="w-[320px] flex-shrink-0 rounded-2xl border border-slate-200 bg-white p-8 md:w-[360px]">
                  <p className="mb-5 text-3xl leading-none text-blue-500">“</p>
                  <p className="mb-8 text-sm leading-relaxed text-slate-700">{item.quote}</p>
                  <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-900">{item.role}</p>
                      <p className="text-xs text-slate-500">{item.company}</p>
                    </div>
                    <img
                      src={item.logo}
                      alt={`${item.company} brand`}
                      className="h-6 w-auto max-w-[7rem] object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                </article>
              ))}
              </div>
            </div>
          </section>
          
        </section>
      </main>
      <ContactInfoPanel />
      <Footer />
    </div>
  )
}
