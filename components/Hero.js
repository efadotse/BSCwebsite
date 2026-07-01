import HeroSlider from './HeroSlider'
import {useEffect, useRef, useState} from 'react'

export default function Hero({title, subtitle, cta, centered}){
  const slides = [
    '/images/slide-1.jpg',
    '/images/slide-2.jpg',
    '/images/slide-3.jpg',
    '/images/slide-4.jpg',
    '/images/slide-5.jpg'
  ]
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  useEffect(()=>{
    timerRef.current = setInterval(()=> setIndex(i=> (i+1) % slides.length), 7000)
    return ()=> clearInterval(timerRef.current)
  }, [slides.length])

  function goTo(i){
    setIndex(i)
    if(timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(()=> setIndex(s=> (s+1) % slides.length), 7000)
  }

  return (
    <section className="hero-full relative overflow-hidden pt-20">
      <HeroSlider images={slides} activeIndex={index} />
      <div className={`container relative ${centered ? 'text-center' : ''}`}>
        <div className="md:pt-16 lg:pt-24">
          <div className={`md:w-7/12 lg:w-6/12 ${centered ? 'mx-auto' : ''}`}>
            <h1 className="heading-display text-5xl md:text-7xl font-extrabold mb-6 text-white">{title}</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">{subtitle}</p>
            {cta && <a href={cta.href} className="inline-block px-6 py-3 bg-brand text-white tracking-wide">{cta.label}</a>}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i)=> (
          <button
            key={i}
            onClick={()=> goTo(i)}
            aria-label={`Go to slide ${i+1}`}
            className={`w-3 h-3 rounded-full focus:outline-none ${i===index ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </section>
  )
}
