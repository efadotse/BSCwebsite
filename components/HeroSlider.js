import React from 'react'

export default function HeroSlider({images=[], activeIndex=0}){
  if(!images.length) return null

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {images.map((src, i)=> (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i===activeIndex ? 'opacity-100' : 'opacity-0'}`}>
          <img src={src} alt={`slide-${i}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}
    </div>
  )
}
