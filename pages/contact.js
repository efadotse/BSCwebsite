import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <div className="container py-16">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div>
              <h1 className="text-2xl font-semibold mb-6">Contact Us</h1>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  title="Built Services Consult - Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9858760827674!2d-0.20604979999999998!3d5.5691048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a0cd17d0ad7%3A0x3eb57de48605419c!2sBuilt%20Services%20Consult!5e0!3m2!1sen!2sgh!4v1782156874805!5m2!1sen!2sgh"
                  className="w-full h-[320px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
