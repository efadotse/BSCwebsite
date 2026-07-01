export default function ClientsCarousel({ logos = [] }){
  const defaultLogos = [
    '/images/clients/ashesi.png',
    '/images/clients/google.png',
    '/images/clients/keystone.png',
    '/images/clients/wsp.png',
    '/images/clients/digitalrealty.png',
    '/images/clients/icgc.png',
    '/images/clients/MULTICAD.png',
    '/images/clients/amalgamated.png',
    '/images/clients/devtraco.png',
  ]
  const items = logos.length ? logos : defaultLogos

  return (
    <section className="py-12">
      <div className="container">
        <h3 className="text-center text-sm uppercase tracking-widest text-gray-600 mb-6">Our Clients & Partners</h3>
        <div className="overflow-hidden">
          <div className="marquee-track">
            <div className="marquee-group">
              {items.map((src, i) => (
                <div key={`a-${src}-${i}`} className="inline-block">
                  <img src={src} alt={`client-${i}`} className="h-12 object-contain opacity-90" />
                </div>
              ))}
            </div>
            <div className="marquee-group" aria-hidden="true">
              {items.map((src, i) => (
                <div key={`b-${src}-${i}`} className="inline-block">
                  <img src={src} alt={`client-dup-${i}`} className="h-12 object-contain opacity-90" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
