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
  { value: '20+', label: 'Floors' },
  { value: '220+', label: 'Luxury Apartments' },
  { value: '45,000+ m²', label: 'Total Built-up Area' },
  { value: '100%', label: 'Client Satisfaction' },
]

const scope = [
  {
    title: 'Mechanical Engineering',
    body: 'Advanced HVAC systems including VRF units, ventilation, pressurization, and heat recovery solutions.',
  },
  {
    title: 'Electrical Engineering',
    body: 'Reliable power distribution, lighting design, standby generation, and smart building systems.',
  },
  {
    title: 'Plumbing & Water Systems',
    body: 'Efficient water supply, booster systems, storage, drainage, and sewage disposal systems.',
  },
  {
    title: 'Fire Protection',
    body: 'Fire detection, alarm, sprinkler systems, fire hydrants, and smoke management.',
  },
  {
    title: 'MEP Coordination',
    body: 'Coordinated BIM-based design and collaboration for clash-free construction and seamless delivery.',
  },
  {
    title: 'Sustainability',
    body: 'Energy-efficient systems and sustainable design strategies that reduce operational costs.',
  },
]

export default function TheNovaProject() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />

      <main className="pt-20">
        <section className="relative">
          <div className="absolute inset-0">
            <DetailImage
              src="/images/project-details/the-nova/hero/hero-main.jpg"
              fallback="/images/projects/project-4.jpg"
              alt="The Nova apartments exterior"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
          </div>

          <div className="container relative z-10 py-24 md:py-32 lg:py-40 text-white">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-amber-300">Featured Project</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">The Nova Apartments by DevtracoPlus</h1>
            <p className="mt-5 max-w-2xl text-base text-slate-100 md:text-xl">
              Delivering high-performance MEP engineering solutions for one of Accra's most iconic luxury residential developments.
            </p>

            <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3 sm:gap-6">
              <p>Roman Ridge, Accra, Ghana</p>
              <p> </p>
              <p> </p>
              <p>Luxury Residential Development</p>
              <p> </p>
              <p> </p>
              <p>Completed: 2024</p>
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
            <span className="text-slate-700">The Nova Apartments by DevtracoPlus</span>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-500">Project Overview</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Engineering Comfort, Efficiency & Luxury</h2>
              <p className="mt-5 text-slate-700 leading-7">
                The Nova Apartments is a premium residential development in the heart of Roman Ridge, Accra.
                Built Services Consult was responsible for providing integrated MEP engineering consultancy
                services that ensure optimal performance, occupant comfort, energy efficiency, and long-term reliability.
              </p>
              <p className="mt-4 text-slate-700 leading-7">
                Our solutions support the building's modern architecture and high-end amenities,
                delivering a safe, sustainable, and comfortable living experience for residents.
              </p>
              <a
                href="#gallery"
                className="mt-6 inline-flex items-center rounded-md border border-slate-800 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                View Project Gallery
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
              <DetailImage
                src="/images/project-details/the-nova/overview/overview-main.jpg"
                fallback="/images/projects/project-4.jpg"
                alt="The Nova apartments entrance"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-14 border-t border-slate-200 pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-500">Our MEP Solutions</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Integrated. Reliable. Sustainable.</h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
              {scope.map((item) => (
                <div key={item.title} className="rounded-xl bg-white p-5 border border-slate-200 shadow-sm lg:col-span-1">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 border-t border-slate-200 pt-12" id="gallery">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-500">Project Highlights</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Delivering Excellence in Every Detail</h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <ul className="space-y-4 text-slate-700">
                  <li>High-efficiency VRF air conditioning systems</li>
                  <li>Intelligent lighting with motion and daylight sensors</li>
                  <li>Low-noise plumbing systems for enhanced comfort</li>
                  <li>Full fire protection and life safety systems</li>
                  <li>Standby power with automatic changeover</li>
                  <li>Energy-efficient design to reduce operational costs</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                    <DetailImage
                      src={`/images/project-details/the-nova/gallery/gallery-${n}.jpg`}
                      fallback="/images/projects/project-4.jpg"
                      alt={`The Nova gallery ${n}`}
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
              <p><span className="font-semibold">Enhanced Comfort:</span> Consistent indoor comfort and superior air quality for residents.</p>
              <p><span className="font-semibold">Energy Efficiency:</span> Reduced energy consumption through efficient systems and smart controls.</p>
              <p><span className="font-semibold">Reliable Performance:</span> Robust MEP systems ensuring uninterrupted performance and safety.</p>
              <p><span className="font-semibold">Sustainable Value:</span> Lower operational costs and long-term value for the developer and residents.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-[2fr_1fr]">
            <blockquote className="text-slate-700 leading-7">
              Built Services Consult delivered exceptional MEP consultancy services for The Nova Apartments.
              Their professionalism, technical expertise, and commitment to quality were key to the success of this
              landmark project.
              <footer className="mt-4 font-semibold text-slate-900">- DevtracoPlus</footer>
            </blockquote>

            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-6">
              <DetailImage
                src="/images/project-details/the-nova/brand/logo.png"
                fallback="/images/logo.png"
                alt="DevtracoPlus logo"
                className="max-h-20 w-auto object-contain"
              />
            </div>
          </div>

          <div className="mt-10 mb-16 rounded-2xl bg-slate-100 p-8">
            <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
              <div>
                <h3 className="text-2xl font-bold">Let's Build What's Next</h3>
                <p className="mt-2 text-slate-600">From concept to completion, we deliver MEP solutions that create comfort, efficiency, and lasting value.</p>
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
