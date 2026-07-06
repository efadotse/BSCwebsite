import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function DetailImage({ src, alt, fallback, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      onError={(event) => {
        event.currentTarget.onerror = null
        event.currentTarget.src = fallback
      }}
      className={className}
    />
  )
}

const stats = [
  { value: '5,000+', label: 'Students Supported' },
  { value: '15+', label: 'Buildings & Facilities' },
  { value: '150,000+ m²', label: 'Total Built-up Area' },
  { value: '15+ Years', label: 'MEP Consulting Partnership' },
]

const scope = [
  {
    title: 'Mechanical Engineering',
    body: 'HVAC systems, ventilation, plumbing, fire protection, and utility services designed for performance and efficiency.',
  },
  {
    title: 'Electrical Engineering',
    body: 'Power distribution, lighting, backup power, renewable energy integration, and advanced building systems.',
  },
  {
    title: 'Public Health Engineering',
    body: 'Water supply, drainage, sanitation, wastewater systems, and rainwater harvesting solutions.',
  },
  {
    title: 'MEP Coordination',
    body: 'Collaborative coordination with architects, engineers, and contractors for seamless project delivery.',
  },
  {
    title: 'Sustainability',
    body: 'Energy-efficient design strategies that reduce operating costs and support long-term impact.',
  },
]

export default function AshesiUniversityProject() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />

      <main className="pt-20">
        <section className="relative">
          <div className="absolute inset-0">
            <DetailImage
              src="/images/project-details/ashesi/hero/hero-main.jpg"
              fallback="/images/projects/project-1.jpg"
              alt="Ashesi University campus"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
          </div>

          <div className="container relative z-10 py-24 md:py-32 lg:py-40 text-white">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-amber-300">Featured Project</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">Ashesi University Campus</h1>
            <p className="mt-5 max-w-2xl text-base text-slate-100 md:text-xl">
              Delivering integrated MEP engineering solutions for one of Africa's leading private universities.
            </p>

            <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3 sm:gap-6">
              <p>Berkeruso, Ghana</p>
              <p> </p>
              <p> </p>
              <p>Education Sector</p>
              <p> </p>
              <p> </p>
              <p>Multiple Phases (2008 - Ongoing)</p>
            </div>
          </div>
        </section>

        <section className="container -mt-10 relative z-20">
          <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/10 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="text-center md:border-r md:last:border-r-0 border-slate-200 px-2">
                <p className="text-3xl font-bold text-amber-500">{item.value}</p>
                <p className="mt-2 text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container py-14">
          <div className="mb-8 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/projects" className="hover:text-slate-700">Projects</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">Ashesi University Campus</span>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-500">Project Overview</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Integrated MEP Solutions for a Growing Campus</h2>
              <p className="mt-5 text-slate-700 leading-7">
                Ashesi University is one of Africa's most respected centers of learning, innovation, and leadership.
                Built Services Consult has been privileged to provide MEP consulting services for the campus since
                its early development phases.
              </p>
              <p className="mt-4 text-slate-700 leading-7">
                Our integrated engineering solutions ensure a comfortable, energy-efficient, and sustainable environment
                that supports teaching, learning, research, and community life.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
              <DetailImage
                src="/images/project-details/ashesi/overview/overview-main.jpg"
                fallback="/images/projects/project-1.jpg"
                alt="Ashesi University academic building"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-14 border-t border-slate-200 pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-500">Our Scope</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Integrated MEP Solutions</h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {scope.map((item) => (
                <div key={item.title} className="rounded-xl bg-white p-5 border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 border-t border-slate-200 pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-500">Our Contributions</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Engineering Excellence That Supports Education</h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <ul className="space-y-4 text-slate-700">
                  <li>Reliable building systems for academic and residential facilities</li>
                  <li>Energy-efficient solutions tailored to Ghana's climate</li>
                  <li>Systems designed for scalability and future phases</li>
                  <li>Close collaboration with the Ashesi project team across all development stages</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                    <DetailImage
                      src={`/images/project-details/ashesi/gallery/gallery-${n}.jpg`}
                      fallback="/images/projects/project-1.jpg"
                      alt={`Ashesi University gallery ${n}`}
                      className="h-40 w-full object-cover md:h-52"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8 text-white shadow-lg">
            <h2 className="text-2xl font-bold">Project Impact</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <p><span className="font-semibold">Sustainable Campus:</span> Energy-conscious systems that reduce environmental impact.</p>
              <p><span className="font-semibold">Optimized Performance:</span> Efficient, reliable systems for continuous operations.</p>
              <p><span className="font-semibold">Enhanced Learning:</span> Well-designed building services that support academic excellence.</p>
              <p><span className="font-semibold">Long-Term Value:</span> Durable, scalable systems ready for future expansion.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-[2fr_1fr]">
            <blockquote className="text-slate-700 leading-7">
              Built Services Consult has been a trusted partner in our journey to build a world-class university.
              Their MEP expertise, professionalism, and commitment to quality have been instrumental in shaping our campus.
              <footer className="mt-4 font-semibold text-slate-900">- Ashesi University Project Team</footer>
            </blockquote>

            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-6">
              <DetailImage
                src="/images/project-details/ashesi/brand/logo.png"
                fallback="/images/logo.png"
                alt="Ashesi University logo"
                className="max-h-20 w-auto object-contain"
              />
            </div>
          </div>

          <div className="mt-10 mb-16 rounded-2xl bg-slate-100 p-8">
            <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
              <div>
                <h3 className="text-2xl font-bold">Let's Build What's Next</h3>
                <p className="mt-2 text-slate-600">From concept to completion, we deliver MEP solutions that power institutions and communities.</p>
              </div>
              <Link href="/contact" className="rounded-lg bg-amber-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-amber-600">
                Start Your Project
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}