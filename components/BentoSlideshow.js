import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function BentoSlideshow({ projects = [] }) {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % Math.max(1, projects.length - 6))
    }, 8000)
    return () => clearInterval(timerRef.current)
  }, [projects.length])

  function goTo(i) {
    setIndex(i)
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setIndex((s) => (s + 1) % Math.max(1, projects.length - 6))
    }, 8000)
  }

  const maxSlides = Math.max(1, projects.length - 6)
  const visibleProjects = projects.slice(index, index + 7)

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px]">
          {visibleProjects.map((p, i) => {
            const sizes = [
              'lg:col-span-2 lg:row-span-2',
              'lg:col-span-1',
              'lg:col-span-1',
              'lg:col-span-1',
              'lg:col-span-2',
              'lg:col-span-1',
              'lg:col-span-1',
            ]
            const imageUrl = p.image ? `/images/projects/${p.image}` : null
            const cardContent = (
              <div className="relative w-full h-full bg-gray-800">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
                )}
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 flex h-full items-center justify-center p-6 text-center">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-200">{p.excerpt}</p>
                  </div>
                </div>
              </div>
            )

            return p.href ? (
              <Link
                key={index + i}
                href={p.href}
                className={`block rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 ${
                  sizes[i] || ''
                }`}
              >
                {cardContent}
              </Link>
            ) : (
              <article
                key={index + i}
                className={`rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 ${
                  sizes[i] || ''
                }`}
              >
                {cardContent}
              </article>
            )
          })}
        </div>

        {maxSlides > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2 h-2 rounded-full focus:outline-none transition-colors ${
                  i === index ? 'bg-blue-500' : 'bg-gray-400 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
