import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactInfoPanel from '../components/ContactInfoPanel'
import Hero from '../components/Hero'

export default function About(){
  return (
    <div>
      <Navbar />
      <Hero title="Who We Are" subtitle="We are an MEP consulting firm focused on performance and reliability. At Built Services Consult, we turn ambitious visions into reality with innovative engineering solutions tailored to each project's unique needs." centered />
      <main>
        <div className="container py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-slate-950/95 border border-white/10 p-10 text-white shadow-xl shadow-slate-950/20">
              <p className="text-xs uppercase tracking-[0.32em] text-amber-400 mb-4">About Us</p>
              <h2 className="text-3xl font-semibold mb-5">The Leading MEP Consulting Firm in Ghana</h2>
              <p className="text-slate-300 leading-relaxed">Built Services Consult is a trusted Mechanical, Electrical and Plumbing (MEP) engineering consultancy with a proven track record of delivering high-quality and innovative engineering solutions across various sectors in Ghana and beyond. With over 30 years of experience, we provide HVAC, electrical, fire protection and plumbing engineering services for commercial, residential and institutional projects helping clients achieve efficient, sustainable and code-compliant developments.</p>
            </div>

            <div className="rounded-[2rem] bg-slate-950/95 border border-white/10 p-10 text-white shadow-xl shadow-slate-950/20">
              <p className="text-xs uppercase tracking-[0.32em] text-amber-400 mb-4">Our Strategy</p>
              <h2 className="text-3xl font-semibold mb-5">Integrated MEP Design from Concept to Completion</h2>
              <p className="text-slate-300 leading-relaxed">We work alongside architcts, developers and contrctors to create coordinated mechanical, electrical and plumbing systems tailored to each project's specific needs. Through detailed engineering, tehnical expertise and collaborative begin every project by understanding the unique conditions and program requirements, then develop systems that respond to energy, comfort and operational goals. Our work is grounded in clear documentation, collaborative coordination and careful follow-through.</p>
            </div>
          </div>
        </div>

        <section className="container py-12">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.32em] text-amber-400 mb-4">Our Team</p>
            <h2 className="text-4xl font-bold text-slate-900">Meet the Team</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] bg-white/5 border border-slate-200/10 p-8 text-left">
              <img src="/images/team/team-1.jpg" alt="Senior MEP Consultant" className="h-48 w-full rounded-3xl object-cover mb-6" />
              <h3 className="text-xl font-semibold mb-2">Senior MEP Consultant</h3>
              <p className="text-slate-400">Experienced in high-performance HVAC and electrical design for complex commercial projects.</p>
            </div>
            <div className="rounded-[2rem] bg-white/5 border border-slate-200/10 p-8 text-left">
              <img src="/images/team/team-2.jpg" alt="Project Coordination Lead" className="h-48 w-full rounded-3xl object-cover mb-6" />
              <h3 className="text-xl font-semibold mb-2">Project Coordination Lead</h3>
              <p className="text-slate-400">Focused on seamless collaboration between architects, engineers and site teams.</p>
            </div>
            <div className="rounded-[2rem] bg-white/5 border border-slate-200/10 p-8 text-left">
              <img src="/images/team/team-3.jpg" alt="Electrical Systems Engineer" className="h-48 w-full rounded-3xl object-cover mb-6" />
              <h3 className="text-xl font-semibold mb-2">Electrical Systems Engineer</h3>
              <p className="text-slate-400">Helps clients achieve energy efficiency, occupant comfort and lifecycle value.</p>
            </div>
            <div className="rounded-[2rem] bg-white/5 border border-slate-200/10 p-8 text-left">
              <img src="/images/team/team-4.jpg" alt="Mechanical Systems Engineer" className="h-48 w-full rounded-3xl object-cover mb-6" />
              <h3 className="text-xl font-semibold mb-2">Mechanical Systems Engineer</h3>
              <p className="text-slate-400">Specialized in water distribution, drainage and sanitary systems design.</p>
            </div>
            <div className="rounded-[2rem] bg-white/5 border border-slate-200/10 p-8 text-left">
              <img src="/images/team/team-5.jpg" alt="HVAC Design Lead" className="h-48 w-full rounded-3xl object-cover mb-6" />
              <h3 className="text-xl font-semibold mb-2">HVAC Design Lead</h3>
              <p className="text-slate-400">Expert in comfort conditioning and ventilation systems for diverse building types.</p>
            </div>
            <div className="rounded-[2rem] bg-white/5 border border-slate-200/10 p-8 text-left">
              <img src="/images/team/team-6.jpg" alt="Electrical Design Lead" className="h-48 w-full rounded-3xl object-cover mb-6" />
              <h3 className="text-xl font-semibold mb-2">Electrical Design Lead</h3>
              <p className="text-slate-400">Leader in power distribution, lighting and control system integration.</p>
            </div>
            <div className="rounded-[2rem] bg-white/5 border border-slate-200/10 p-8 text-left">
              <img src="/images/team/team-7.jpg" alt="MEP Site Supervisor" className="h-48 w-full rounded-3xl object-cover mb-6" />
              <h3 className="text-xl font-semibold mb-2">MEP Site Supervisor</h3>
              <p className="text-slate-400">Ensures flawless installation and commissioning of all MEP systems.</p>
            </div>
            <div className="rounded-[2rem] bg-white/5 border border-slate-200/10 p-8 text-left">
              <img src="/images/team/team-8.jpg" alt="Electrical Engineer" className="h-48 w-full rounded-3xl object-cover mb-6" />
              <h3 className="text-xl font-semibold mb-2">Electrical Engineer</h3>
              <p className="text-slate-400">Manages digital coordination and clash detection across all building disciplines.</p>
            </div>
          </div>
        </section>
      </main>
      <ContactInfoPanel />
      <Footer />
    </div>
  )
}
