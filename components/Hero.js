import HeroSlider from './HeroSlider'
import {useEffect, useRef, useState} from 'react'

const HERO_SLIDE_MS = 7000
const HERO_SYNC_KEY = 'bsc-hero-sync-start-ms'

export default function Hero({title, subtitle, cta, centered, variant, eyebrow, secondaryCta, stats, disableAutoRotate}){
  const slides = [
    '/images/hero/slide-1.jpg',
    '/images/hero/slide-2.jpg',
    '/images/hero/slide-3.jpg',
    '/images/hero/slide-4.jpg',
    '/images/hero/slide-5.jpg'
  ]
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)
  const syncStartRef = useRef(null)

  useEffect(()=>{
    if(disableAutoRotate) return
    if(typeof window === 'undefined') return

    let syncStart = Number(window.localStorage.getItem(HERO_SYNC_KEY))
    if(!Number.isFinite(syncStart) || syncStart <= 0) {
      syncStart = Date.now()
      window.localStorage.setItem(HERO_SYNC_KEY, String(syncStart))
    }

    syncStartRef.current = syncStart

    const updateIndex = ()=> {
      if(!syncStartRef.current) return
      const elapsed = Math.max(0, Date.now() - syncStartRef.current)
      setIndex(Math.floor(elapsed / HERO_SLIDE_MS) % slides.length)
    }

    const handleStorage = (event)=> {
      if(event.key !== HERO_SYNC_KEY || !event.newValue) return
      const parsed = Number(event.newValue)
      if(!Number.isFinite(parsed) || parsed <= 0) return
      syncStartRef.current = parsed
      updateIndex()
    }

    updateIndex()
    timerRef.current = setInterval(updateIndex, 250)
    window.addEventListener('storage', handleStorage)

    return ()=> {
      clearInterval(timerRef.current)
      window.removeEventListener('storage', handleStorage)
    }
  }, [disableAutoRotate, slides.length])

  function goTo(i){
    setIndex(i)
    if(disableAutoRotate) return
    if(typeof window === 'undefined') return
    const nextSyncStart = Date.now() - (i * HERO_SLIDE_MS)
    syncStartRef.current = nextSyncStart
    window.localStorage.setItem(HERO_SYNC_KEY, String(nextSyncStart))
  }

  const currentSlide = String(index + 1).padStart(2, '0')
  const totalSlides = String(slides.length).padStart(2, '0')

  const titleParts = typeof title === 'string' ? title.split('. ') : []
  const hasSplitTitle = titleParts.length > 1
  const primaryTitle = hasSplitTitle ? `${titleParts[0]}.` : title
  const secondaryTitle = hasSplitTitle ? titleParts.slice(1).join('. ') : ''
  const isAboutVariant = variant === 'about'
  const aboutStats = stats || [
    {value: '500+', label: 'Projects Delivered', icon: 'projects'},
    {value: '20+', label: 'Years Experience', icon: 'team'},
    {value: '15', label: 'Countries Served', icon: 'globe'},
    {value: '40+', label: 'Expert Engineers', icon: 'engineer'},
    {value: '98%', label: 'Client Satisfaction', icon: 'award'}
  ]

  function statIcon(type){
    if(type === 'projects') {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
          <path d="M4 20h16" />
          <path d="M7 20V8h10v12" />
          <path d="M10 8V4h4v4" />
          <path d="M10 12h4M10 16h4" />
        </svg>
      )
    }
    if(type === 'team') {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
          <circle cx="9" cy="9" r="3" />
          <circle cx="17" cy="9" r="2" />
          <path d="M4 19c0-3 2.5-5 5-5s5 2 5 5" />
          <path d="M15 19c.2-1.8 1.5-3 3-3 1.5 0 2.7 1.2 3 3" />
        </svg>
      )
    }
    if(type === 'globe') {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18" />
          <path d="M12 3a14 14 0 0 0 0 18" />
        </svg>
      )
    }
    if(type === 'engineer') {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
          <path d="M7 9l5-5 5 5" />
          <path d="M9 10h6" />
          <circle cx="12" cy="13" r="2.5" />
          <path d="M6 20c0-3.2 2.7-5.5 6-5.5s6 2.3 6 5.5" />
        </svg>
      )
    }
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7l1.6 3.3 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5z" />
      </svg>
    )
  }

  if (centered) {
    return (
      <section
        className="hero-full relative overflow-hidden pt-20 pb-16 md:pb-20"
        style={{alignItems: 'center'}}
      >
        <HeroSlider images={slides} activeIndex={index} />
        <div className="container relative py-8 text-center md:py-10">
          <div className="mx-auto md:w-7/12 lg:w-6/12">
            <h1 className="heading-display mb-6 text-5xl font-extrabold text-white md:text-7xl">{title}</h1>
            <p className="mb-8 text-lg text-white/80 md:text-xl">{subtitle}</p>
            {cta && <a href={cta.href} className="inline-block bg-brand px-6 py-3 tracking-wide text-white">{cta.label}</a>}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 transform gap-3 px-6 md:bottom-10">
          {slides.map((_, i)=> (
            <button
              key={i}
              onClick={()=> goTo(i)}
              aria-label={`Go to slide ${i+1}`}
              className={`h-3 w-3 rounded-full focus:outline-none ${i===index ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>
      </section>
    )
  }

  if (isAboutVariant) {
    return (
      <section className="relative h-screen w-full overflow-hidden">
        <HeroSlider images={slides} activeIndex={index} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06122de3] via-[#0a204080] to-[#0e2c4614]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06122dd9] via-[#06122d42] to-transparent" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col px-6 pb-10 pt-20 md:px-10 md:pb-12 md:pt-24 lg:px-12 lg:pb-14 lg:pt-28">
          <div className="flex-1 pt-4 md:pt-10">
            <div className="flex h-full items-start justify-between gap-6">
              <div className="max-w-2xl border-l-2 border-white/70 pl-5 md:pl-7">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-amber-300">{eyebrow || 'Who We Are'}</p>
                <h1 className="mb-5 max-w-xl text-4xl font-extrabold leading-[0.96] text-white md:text-6xl">{title}</h1>
                <p className="mb-8 max-w-lg text-sm leading-relaxed text-white md:text-lg">{subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  {cta && <a href={cta.href} className="inline-flex items-center rounded-xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">{cta.label}</a>}
                  {secondaryCta && <a href={secondaryCta.href} className="inline-flex items-center rounded-xl border border-white/60 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/15">{secondaryCta.label}</a>}
                </div>
              </div>

              <div className="hidden h-full items-start pt-4 pr-2 md:flex lg:pt-2">
                <div className="flex flex-col items-center gap-3 text-white/85">
                  <span className="text-sm font-semibold tracking-[0.2em]">{currentSlide}</span>
                  <div className="h-28 w-px bg-white/30" />
                  <div className="flex flex-col gap-3">
                    {slides.map((_, i)=> (
                      <button
                        key={i}
                        onClick={()=> goTo(i)}
                        aria-label={`Go to slide ${i+1}`}
                        className={`h-2.5 w-2.5 rounded-full transition ${i===index ? 'bg-white' : 'bg-white/35 hover:bg-white/70'}`}
                      />
                    ))}
                  </div>
                  <div className="h-12 w-px bg-white/20" />
                  <span className="text-sm font-semibold tracking-[0.2em]">{totalSlides}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <HeroSlider images={slides} activeIndex={index} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07142db8] via-[#0a1f4673] to-[#0b23461a]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07142dc7] via-[#07142d33] to-transparent" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col px-6 pb-4 pt-20 md:px-10 md:pb-6 md:pt-24 lg:px-12 lg:pb-8 lg:pt-28">
        <div className="flex-1 pb-4 pt-2 md:pb-6 md:pt-4 lg:pb-8 lg:pt-6">
          <div className="flex h-full items-start justify-between gap-6">
            <div className="max-w-2xl pr-0 md:pr-8">
              <p className="mb-5 inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-200">
                MEP Engineering Excellence
              </p>
              <h1 className="mb-5 max-w-xl text-4xl font-extrabold leading-[0.98] text-white md:text-5xl lg:text-6xl">
                {primaryTitle}
                {hasSplitTitle && <span className="block text-blue-400">{secondaryTitle}</span>}
              </h1>
              <p className="mb-6 max-w-lg text-sm leading-relaxed text-white/85 md:text-base lg:text-lg">{subtitle}</p>
              <div className="flex flex-wrap gap-4">
                {cta && <a href={cta.href} className="inline-flex items-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-500">{cta.label}</a>}
                <a href="/contact" className="inline-flex items-center rounded-full border border-white/50 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15">Book A Consultation</a>
              </div>
            </div>

            <div className="hidden h-full items-center pr-2 md:flex">
              <div className="flex flex-col items-center gap-4 text-white/85">
                <span className="text-sm font-semibold tracking-[0.2em]">{currentSlide}</span>
                <div className="h-36 w-px bg-white/30" />
                <div className="flex flex-col gap-3">
                  {slides.map((_, i)=> (
                    <button
                      key={i}
                      onClick={()=> goTo(i)}
                      aria-label={`Go to slide ${i+1}`}
                      className={`h-2.5 w-2.5 rounded-full transition ${i===index ? 'bg-white' : 'bg-white/35 hover:bg-white/70'}`}
                    />
                  ))}
                </div>
                <div className="h-20 w-px bg-white/20" />
                <span className="text-sm font-semibold tracking-[0.2em]">{totalSlides}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
