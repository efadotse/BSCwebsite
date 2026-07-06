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
  { value: '1,000+', label: 'Seating Capacity' },
  { value: '18,000 m²', label: 'Total Built-up Area' },
  { value: '100%', label: 'MEP Design & Supervision' },
  { value: '100%', label: 'Client Satisfaction' },
]

const scope = [
  {
    title: 'Mechanical Engineering',
    body: 'High-efficiency HVAC systems including chillers, AHUs, ventilation, and dehumidification for comfort and air quality.',
  },
  {
    title: 'Electrical Engineering',
    body: 'Power distribution, lighting design, standby power, earthing and lightning protection for uninterrupted operations.',
  },
  {
    title: 'Plumbing & Water Systems',
    body: 'Water supply, treatment, storage, pressure boosting, and efficient drainage and wastewater management.',
  },
  {
    title: 'Fire Protection',
    body: 'Advanced fire detection, alarm, sprinkler systems, hydrants, and voice evacuation for life safety compliance.',
  },
  {
    title: 'MEP Coordination',
    body: '3D BIM coordination and clash detection for seamless integration and efficient project delivery.',
  },
  {
    title: 'Acoustics & AV Systems',
    body: 'Acoustic treatment, sound reinforcement, and audiovisual systems for clear, immersive worship experiences.',
  },
]

export default function ICGCChristTempleEastProject() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />

      <main className="pt-20">
        <section className="relative">
          <div className="absolute inset-0">
            <DetailImage
              src="/images/project-details/icgc-christ-temple-east/hero/hero-main.jpg"
              fallback="/images/projects/project-2.jpg"
              alt="ICGC Christ Temple East exterior"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
          </div>

          <div className="container relative z-10 py-24 md:py-32 lg:py-40 text-white">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-amber-300">Featured Project</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">ICGC Christ Temple East</h1>
            <p className="mt-5 max-w-2xl text-base text-slate-100 md:text-xl">
              Delivering excellence in MEP engineering for one of Ghana's most modern and iconic places of worship.
            </p>

            <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3 sm:gap-6">
              <p>Teshie, Accra, Ghana</p>
              <p> </p>
              <p> </p>
              <p>Religious & Community</p>
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
            <span className="text-slate-700">ICGC Christ Temple East</span>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-500">Project Overview</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Engineering an Inspiring Experience</h2>
              <p className="mt-5 text-slate-700 leading-7">
                ICGC Christ Temple East is a landmark project that serves as the spiritual and community hub for
                thousands of worshippers.
              </p>
              <p className="mt-4 text-slate-700 leading-7">
                Built Engineering Consult provided comprehensive MEP engineering consultancy services, ensuring the
                building delivers exceptional comfort, safety, energy efficiency, and acoustics to support a
                life-transforming worship experience.
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
                src="/images/project-details/icgc-christ-temple-east/overview/overview-main.jpg"
                fallback="/images/projects/project-2.jpg"
                alt="ICGC Christ Temple East interior auditorium"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-14 border-t border-slate-200 pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-500">Our MEP Solutions</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Integrated. Reliable. Purpose-Built.</h2>

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
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Built for Impact. Designed to Inspire.</h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <ul className="space-y-4 text-slate-700">
                  <li>Optimized HVAC for large-audience comfort</li>
                  <li>State-of-the-art lighting with smart controls</li>
                  <li>Superior acoustics for word and music clarity</li>
                  <li>Reliable standby power for zero downtime</li>
                  <li>Advanced fire safety and life protection systems</li>
                  <li>Efficient water supply and drainage systems</li>
                  <li>Sustainable systems for energy efficiency and long-term savings</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                    <DetailImage
                      src={`/images/project-details/icgc-christ-temple-east/gallery/gallery-${n}.jpg`}
                      fallback="/images/projects/project-2.jpg"
                      alt={`ICGC Christ Temple East gallery ${n}`}
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
              <p><span className="font-semibold">Enhanced Worship Experience:</span> Comfort, acoustics, and lighting designed to create a powerful and uplifting atmosphere.</p>
              <p><span className="font-semibold">Operational Reliability:</span> Robust MEP systems ensure seamless operations for large gatherings every day.</p>
              <p><span className="font-semibold">Safety & Compliance:</span> Full compliance with international codes and best-in-class life safety standards.</p>
              <p><span className="font-semibold">Sustainable Value:</span> Energy-efficient systems that reduce operational costs and environmental impact.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-[2fr_1fr]">
            <blockquote className="text-slate-700 leading-7">
              Built Engineering Consult demonstrated outstanding professionalism, technical expertise, and commitment to excellence in delivering MEP solutions that support our mission and vision for Christ Temple East.
              <footer className="mt-4 font-semibold text-slate-900">- ICGC Project Team</footer>
            </blockquote>

            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-6">
              <DetailImage
                src="/images/project-details/icgc-christ-temple-east/brand/logo.png"
                fallback="/images/logo.png"
                alt="ICGC Christ Temple East logo"
                className="max-h-20 w-auto object-contain"
              />
            </div>
          </div>

          <div className="mt-10 mb-16 rounded-2xl bg-slate-100 p-8">
            <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
              <div>
                <h3 className="text-2xl font-bold">Let's Build What's Next</h3>
                <p className="mt-2 text-slate-600">Partner with us to deliver innovative MEP solutions for projects that impact lives and communities.</p>
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
