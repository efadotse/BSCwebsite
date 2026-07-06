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
  { value: '1.7MW+', label: 'IT Load Capacity' },
  { value: '30,000+ m²', label: 'Total Built-up Area' },
  { value: 'LEED Gold', label: 'Green Building Certification' },
  { value: '99.999%', label: 'Designed Uptime' },
]

const scope = [
  {
    title: 'Mechanical Engineering',
    body: 'High-efficiency cooling systems including CRAH/CRAC, chilled water systems, ventilation, and pressurization.',
  },
  {
    title: 'Electrical Engineering',
    body: 'Dual-powered infrastructure, 2N redundancy, UPS systems, MV/LV power distribution, and emergency generators.',
  },
  {
    title: 'Public Health Engineering',
    body: 'Water supply, drainage, sanitary systems, and fire protection for mission-critical operations.',
  },
  {
    title: 'MEP Coordination',
    body: 'BIM-based coordination with architects, structural engineers, and contractors for seamless delivery.',
  },
  {
    title: 'Sustainability',
    body: 'Energy-efficient systems, water conservation solutions, and sustainable design aligned with LEED Gold standards.',
  },
]

export default function DigitalRealtyProject() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />

      <main className="pt-20">
        <section className="relative">
          <div className="absolute inset-0">
            <DetailImage
              src="/images/project-details/digital-realty/hero/hero-main.jpg"
              fallback="/images/projects/project-3.jpg"
              alt="Digital Realty data center exterior"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
          </div>

          <div className="container relative z-10 py-24 md:py-32 lg:py-40 text-white">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-amber-300">Featured Project</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">Digital Realty Data Center Ghana</h1>
            <p className="mt-5 max-w-2xl text-base text-slate-100 md:text-xl">
              Delivering mission-critical MEP engineering solutions for one of the most advanced data centers in West Africa.
            </p>

            <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3 sm:gap-6">
              <p>Accra, Ghana</p>
              <p></p>
              <p></p>
              <p>Data Center</p>
              <p></p>
              <p></p>
              <p>Completed: 2025</p>
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
            <span className="text-slate-700">Digital Realty Data Center Ghana</span>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-500">Project Overview</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Powering Digital Infrastructure for a Connected Future</h2>
              <p className="mt-5 text-slate-700 leading-7">
                Built Engineering Consult provided integrated MEP engineering consultancy services for Digital Realty&apos;s
                state-of-the-art data center in Accra, Ghana.
              </p>
              <p className="mt-4 text-slate-700 leading-7">
                The facility is designed to meet global Tier III standards, delivering unmatched reliability,
                efficiency, and scalability to support the region&apos;s growing digital economy.
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
                src="/images/project-details/digital-realty/overview/overview-main.jpg"
                fallback="/images/projects/project-3.jpg"
                alt="Digital Realty data hall"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-14 border-t border-slate-200 pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-500">Our MEP Solutions</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Integrated. Resilient. Efficient.</h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {scope.map((item) => (
                <div key={item.title} className="rounded-xl bg-white p-5 border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 border-t border-slate-200 pt-12" id="gallery">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-500">Project Highlights</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Engineering Reliability Where It Matters Most</h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <ul className="space-y-4 text-slate-700">
                  <li>Tier III design with N+1 and 2N redundancy</li>
                  <li>High-density cooling with optimized airflow management</li>
                  <li>Advanced fire detection and suppression systems (VESDA, FM200)</li>
                  <li>Building Management System (BMS) for real-time monitoring and control</li>
                  <li>Energy-efficient design for reduced PUE</li>
                  <li>Infrastructure built for scalability and future expansion</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                    <DetailImage
                      src={`/images/project-details/digital-realty/gallery/gallery-${n}.jpg`}
                      fallback="/images/projects/project-3.jpg"
                      alt={`Digital Realty gallery ${n}`}
                      className="h-40 w-full object-cover md:h-52"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8 text-white shadow-lg">
            <h2 className="text-2xl font-bold">Delivering Impact</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <p><span className="font-semibold">Energy Efficiency:</span> Optimized MEP systems that minimize energy use and operating costs.</p>
              <p><span className="font-semibold">Operational Reliability:</span> Redundant systems and robust infrastructure ensuring 99.999% uptime.</p>
              <p><span className="font-semibold">Scalability:</span> Designed to support future expansion and evolving technology needs.</p>
              <p><span className="font-semibold">Sustainable Value:</span> LEED Gold certification reflecting our commitment to a greener future.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-[2fr_1fr]">
            <blockquote className="text-slate-700 leading-7">
              Built Engineering Consult demonstrated exceptional technical expertise, collaboration, and commitment to quality throughout the project lifecycle. Their MEP solutions are integral to the reliability and efficiency of our data center in Ghana.
              <footer className="mt-4 font-semibold text-slate-900">- Digital Realty Project Team</footer>
            </blockquote>

            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-6">
              <DetailImage
                src="/images/project-details/digital-realty/brand/logo.png"
                fallback="/images/logo.png"
                alt="Digital Realty logo"
                className="max-h-20 w-auto object-contain"
              />
            </div>
          </div>

          <div className="mt-10 mb-16 rounded-2xl bg-slate-100 p-8">
            <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
              <div>
                <h3 className="text-2xl font-bold">Let&apos;s Build What&apos;s Next</h3>
                <p className="mt-2 text-slate-600">Partner with us to deliver mission-critical MEP solutions that power digital infrastructure and drive progress.</p>
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
