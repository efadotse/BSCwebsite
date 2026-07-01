import Navbar from '../components/Navbar'
import ContactInfoPanel from '../components/ContactInfoPanel'
import Footer from '../components/Footer'

export default function Services(){
  const services = [
    {
      id: 1,
      icon: '⚙️',
      title: 'Mechanical Engineering Design',
      description: 'HVAC, ventilation, plumbing, fire protection, and utility systems designed for comfort, safety, and efficiency.'
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Electrical Engineering Design',
      description: 'Power distribution, lighting, backup systems, renewable energy integration, and smart building technologies.'
    },
    {
      id: 3,
      icon: '💧',
      title: 'Plumbing Engineering Design',
      description: 'Water supply, drainage, sanitation, rainwater, and wastewater design that meets regulatory standards.'
    },
    {
      id: 4,
      icon: '👥',
      title: 'MEP Consultancy',
      description: 'Strategic advice and engineering solutions that align design, budget, sustainability, and operational goals.'
    },
    {
      id: 5,
      icon: '📋',
      title: 'Project Coordination',
      description: 'Seamless collaboration across consultants, contractors, and stakeholders for efficient delivery.'
    },
    {
      id: 6,
      icon: '✓',
      title: 'Turnkey Delivery',
      description: 'From concept and design to construction support and commissioning, we manage the entire MEP process.'
    }
  ]

  const processSteps = [
    { id: 1, title: 'Discover', description: 'We understand your goals, challenges, and project requirements.' },
    { id: 2, title: 'Design', description: 'We develop smart, efficient MEP systems tailored to your project.' },
    { id: 3, title: 'Develop', description: 'Detailed design, specifications, and compliance documentation.' },
    { id: 4, title: 'Deliver', description: 'Construction support and on-site coordination for smooth execution.' },
    { id: 5, title: 'Commission', description: 'Testing, commissioning, and handover for optimal performance.' }
  ]

  return (
    <div>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto py-16">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-amber-500 mb-4">OUR SERVICES</p>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Integrated MEP Engineering Solutions That Deliver Value
              </h1>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We provide end-to-end MEP engineering services that combine technical excellence, practical insight, and innovative design to create efficient, sustainable, and future-ready buildings.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden bg-slate-300 h-80">
              <img src="/images/services/hero-services.jpg" alt="MEP Services" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="container mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Do</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our services cover the full spectrum of MEP engineering, from concept through commissioning. We work closely with clients and project teams to deliver systems that perform.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <p className="text-amber-500 text-sm font-semibold mb-2">0{service.id}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                <a href="#contact" className="text-amber-500 font-semibold text-sm hover:text-amber-600 inline-flex items-center gap-1">
                  Learn more <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="container mx-auto py-16">
          <div className="grid gap-10 lg:grid-cols-2 items-center mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-amber-500 mb-4">OUR PROCESS</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                A Collaborative Approach From Start To Finish
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We follow a streamlined process that ensures clarity, efficiency, and quality at every stage of your project.
              </p>
              <a href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Let's Work Together →
              </a>
            </div>
            <div className="text-4xl text-center text-amber-400">🔍</div>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {processSteps.map((step) => (
              <div key={step.id} className="text-center">
                <p className="text-amber-500 font-bold text-xl mb-2">0{step.id}</p>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-900 text-white py-16 rounded-3xl container mx-auto my-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-8">
            <div className="flex items-center gap-6">
              <div className="text-5xl">🚀</div>
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
      </main>
      <ContactInfoPanel />
      <Footer />
    </div>
  )
}
