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
  { value: '500+ m²', label: 'Total Built-up Area' },
  { value: '10+', label: 'Workstations, Offices & Collaboration Spaces' },
  { value: 'LEED Gold', label: 'Green Building Certification' },
  { value: '100%', label: 'Client Satisfaction' },
]

const scope = [
  {
    title: 'Mechanical Engineering',
    body: 'High-performance HVAC systems ensuring thermal comfort, indoor air quality, and energy efficiency.',
  },
  {
    title: 'Electrical Engineering',
    body: 'Reliable power distribution, lighting design, backup power, and advanced building systems.',
  },
  {
    title: 'Public Health Engineering',
    body: 'Water supply, drainage, sanitary systems, and rainwater management solutions.',
  },
  {
    title: 'MEP Coordination',
    body: 'Seamless coordination with architects, contractors, and stakeholders for timely delivery.',
  },
  {
    title: 'Sustainability',
    body: 'Energy-efficient strategies aligned with LEED standards and sustainability goals.',
  },
]

export default function GoogleGhanaProject() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />

      <main className="pt-20">
        <section className="relative">
          <div className="absolute inset-0">
            <DetailImage
              src="/images/project-details/google-ghana/hero/hero-main.jpg"
              fallback="/images/projects/project-5.jpg"
              alt="Google Ghana office exterior"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
          </div>

          <div className="container relative z-10 py-24 md:py-32 lg:py-40 text-white">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-amber-300">Featured Project</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">Google Ghana Office</h1>
            <p className="mt-5 max-w-2xl text-base text-slate-100 md:text-xl">
              Providing comprehensive MEP engineering solutions for Google's state-of-the-art office in Accra.
            </p>

            <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3 sm:gap-6">
              <p>Airport City, Accra, Ghana</p>
              <p> </p>
              <p> </p>
              <p>Commercial Office</p>
              <p> </p>
              <p> </p>
              <p>Completed: 2020</p>
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
            <span className="text-slate-700">Google Ghana Office</span>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-500">Project Overview</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Engineering a Workplace That Inspires Innovation</h2>
              <p className="mt-5 text-slate-700 leading-7">
                Google Ghana's office in Airport City, Accra is designed to foster creativity, collaboration, and
                well-being. Built Services Consult delivered full MEP engineering services that ensure high
                performance, energy efficiency, and occupant comfort throughout the building.
              </p>
              <p className="mt-4 text-slate-700 leading-7">
                Our integrated solutions support Google's global standards for sustainability, reliability, and
                cutting-edge smart building technology.
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
                src="/images/project-details/google-ghana/overview/overview-main.jpg"
                fallback="/images/projects/project-5.jpg"
                alt="Google Ghana office interior"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-14 border-t border-slate-200 pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-500">Our MEP Solutions</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Integrated. Efficient. Future-Ready.</h2>

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
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Delivering Excellence at Every Level</h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <ul className="space-y-4 text-slate-700">
                  <li>LEED Gold certified green building</li>
                  <li>High-efficiency VRF HVAC system</li>
                  <li>Intelligent lighting and daylight integration</li>
                  <li>Advanced fire detection and life safety systems</li>
                  <li>Low-flow plumbing fixtures for water conservation</li>
                  <li>Building Management System (BMS) for real-time monitoring and control</li>
                  <li>On-time delivery with zero major MEP deviations</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                    <DetailImage
                      src={`/images/project-details/google-ghana/gallery/gallery-${n}.jpg`}
                      fallback="/images/projects/project-5.jpg"
                      alt={`Google Ghana gallery ${n}`}
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
              <p><span className="font-semibold">Energy Efficiency:</span> Reduced energy consumption through efficient systems and smart controls.</p>
              <p><span className="font-semibold">Occupant Comfort:</span> Optimized indoor environment with superior air quality and thermal comfort.</p>
              <p><span className="font-semibold">Future-Ready Workspace:</span> MEP systems designed for flexibility, scalability, and long-term performance.</p>
              <p><span className="font-semibold">Sustainable Value:</span> Lower operating costs and reduced environmental footprint.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-[2fr_1fr]">
            <blockquote className="text-slate-700 leading-7">
              The Built Services Consult team demonstrated deep technical expertise, collaborative approach, and a
              strong commitment to quality. Their MEP solutions have been instrumental in creating an innovative and
              sustainable workplace for us.
              <footer className="mt-4 font-semibold text-slate-900">- Google Facilities & Real Estate Team</footer>
            </blockquote>

            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-6">
              <DetailImage
                src="/images/project-details/google-ghana/brand/logo.png"
                fallback="/images/logo.png"
                alt="Google Ghana logo"
                className="max-h-20 w-auto object-contain"
              />
            </div>
          </div>

          <div className="mt-10 mb-16 rounded-2xl bg-slate-100 p-8">
            <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
              <div>
                <h3 className="text-2xl font-bold">Let's Build What's Next</h3>
                <p className="mt-2 text-slate-600">Partner with us to deliver intelligent MEP solutions that power great spaces and better outcomes.</p>
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
