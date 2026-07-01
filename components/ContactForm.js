export default function ContactForm(){
  return (
    <form className="space-y-4 max-w-xl mx-auto">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input className="mt-1 w-full border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input className="mt-1 w-full border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea className="mt-1 w-full border px-3 py-2 h-32" />
      </div>
      <div className="text-center">
        <button className="px-6 py-3 bg-black text-white">Send</button>
      </div>
    </form>
  )
}
