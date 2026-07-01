export default function ContactInfoPanel(){
  return (
    <section className="py-16 bg-slate-950 text-white">
      <div className="container grid gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-widest text-blue-400">Get in touch</p>
          <h3 className="text-3xl font-semibold">Let's build better buildings together.</h3>
          <p className="text-slate-300">Reach out for MEP consulting, design coordination, or project advisory services.</p>
          <a href="/contact" className="inline-flex items-center gap-3 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold transition hover:bg-blue-400">
            Contact Us
            <span className="inline-flex h-3 w-3 rounded-full bg-white animate-pulse" />
          </a>
        </div>

        <div className="space-y-4 p-6 bg-white/5 rounded-3xl border border-white/10 text-left">
          <div>
            <h4 className="text-xl font-semibold text-center">Contact</h4>
            <div className="mx-auto mt-3 inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/15 text-blue-300 ">☎</span>
              +233 (020) 455-4445
            </div>
            <div className="mx-auto mt-3 inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">✉</span>
              info@bsc.com
            </div>
          </div>
        </div>

        <div className="space-y-4 p-6 bg-white/5 rounded-3xl border border-white/10 text-center">
          <div>
            <h4 className="text-xl font-semibold">Location</h4>
            <div className="mx-auto mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
              </span>
              <div className="flex flex-col text-left leading-tight">
                <span>22 Coconut Avenue,</span>
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
