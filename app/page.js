
  "use client"

import { useState } from "react"

export default function GraduationInvitation() {
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const handleSubmit = () => {
  if (!name || !message) return

  setMessages([
    ...messages,
    {
      name,
      message,
    },
  ])

  setName("")
  setMessage("")
}

    if (!open) {
      return (
        <div
  className={`min-h-screen font-sans transition-all duration-500 ${
    darkMode
      ? "bg-gradient-to-b from-black via-neutral-900 to-neutral-950 text-white"
      : "bg-gradient-to-b from-yellow-50 to-white text-neutral-800"
  }`}
>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-yellow-800 animate-pulse">
        Zahara Chairani
          </h1>

           <p className="mt-6 text-neutral-700 text-lg max-w-xl">
        Graduation Invitation 2026
      </p>

      <button
        onClick={() => setOpen(true)}
        className="mt-10 px-8 py-4 bg-yellow-700 text-white rounded-full shadow-lg hover:scale-105 transition"
      >
        Open Invitation ✨
      </button>
    </div>
  )
    }

  return (
    <>
    <audio autoPlay loop controls className="mt-6">
  <source src="/bg-music.mp3.mp3" type="audio/mpeg" />
</audio> 

    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white text-neutral-800 font-sans">
      <div className="fixed top-5 right-5 z-50">
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="px-4 py-2 rounded-full bg-yellow-700 text-white shadow-lg hover:scale-105 transition"
  >
    {darkMode ? "☀️ Light" : "🌙 Dark"}
  </button>
</div>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#facc15,_transparent_60%)]" />
        <div className="absolute top-10 left-10 text-5xl animate-bounce opacity-30">
        🌸
        </div>

        <div className="absolute top-20 right-16 text-4xl animate-pulse opacity-40">
        ✨
        </div>

        <div className="absolute bottom-10 left-1/4 text-6xl opacity-20 animate-pulse">
       🌼
        </div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#facc15,_transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-sm text-yellow-700 mb-4">
            Graduation Invitation
          </p>

          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-yellow-800">
            Zahara Chairani
          </h1>

          <p className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed">
            Dengan penuh rasa syukur, saya mengundang teman, keluarga,
            dan orang-orang tersayang untuk hadir dalam momen wisuda saya.
            Karena setelah sekian semester begadang, revisi, dan mental
            breakdown kecil yang dianggap "proses pendewasaan", akhirnya
            sampai juga di garis ini.
          </p>

          <div className="mt-10 inline-block rounded-3xl bg-white/80 backdrop-blur px-8 py-6 shadow-xl border border-yellow-100">
            <p className="text-sm uppercase tracking-widest text-neutral-500">
              Save The Date
            </p>
            <h2 className="mt-2 text-3xl font-bold text-yellow-700">
              May 24 2026
            </h2>
            <p className="mt-2 text-neutral-600">
              Kampus 1 UIN Syarif Hidayatullah Jakarta, Tangerang Selatan
              But maybe we would move to FISIP UIN Jakarta.
            </p>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-yellow-100">
            <h3 className="text-2xl font-bold text-yellow-700 mb-4">
              Detail Acara
            </h3>

            <div className="space-y-4 text-neutral-700">
              <div>
                <p className="font-semibold">Tanggal</p>
                <p>24 Mei 2026</p>
              </div>

              <div>
                <p className="font-semibold">Waktu</p>
                <p>10.00 WIB - selesai</p>
              </div>

              <div>
                <p className="font-semibold">Lokasi</p>

                <p className="mt-2"> 
                  Kampus 1 UIN Syarif Hidayatullah Jakarta, Tangerang Selatan
                  </p>
                  
                  https://maps.app.goo.gl/pTR9MBRMnkmMcyEp7
                  <a href="https://maps.app.goo.gl/pTR9MBRMnkmMcyEp7" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Lihat di Google Maps
                    </a>


                    <p className="mt-4">
              But maybe we would move to FISIP UIN Jakarta. <br />
              https://maps.app.goo.gl/4A3UXD8PfLcFeMXv5
              <a href="https://maps.app.goo.gl/4A3UXD8PfLcFeMXv5" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Lihat di Google Maps
                  </a>
                </p>
              </div>

              <div>
                <p className="font-semibold">Dresscode</p>
                <p>Semi formal (sing penting rapi dan nyaman aja!) </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-100 rounded-3xl p-8 shadow-lg border border-yellow-200 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">
              Pesan Kecil
            </h3>

            <p className="text-neutral-700 leading-relaxed text-lg">
              Terima kasih sudah menjadi bagian dari perjalanan saya.
              Kehadiran kalian di hari spesial ini akan sangat berarti.
              Dan ya, saya akhirnya berhasil menyelesaikan ini tanpa
              berubah menjadi villain akademik sepenuhnya.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-yellow-700 mb-10">
            Gallery
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["/publicfoto5.jpg", "/publicfoto3.jpg.jpg", "/publicfoto4.jpg.jpg", "/publicfoto6.jpg", "/publicfoto7.jpg"].map((photo, index) => (
  <div
    key={index}
    onClick={() => setSelectedImage(photo)}
    className="overflow-hidden rounded-3xl shadow-lg border border-yellow-200 cursor-pointer"
  >
    <img
      src={photo}
      alt={`Gallery ${index + 1}`}
      className="w-full h-full object-cover hover:scale-105 transition duration-500"
    />
  </div>
))}
            
          </div>
        </div>
      </section>

{/* Guestbook Section */}
<section className="px-6 py-16">
  <div className="max-w-3xl mx-auto">

    <h3 className="text-3xl font-bold text-center text-yellow-700 mb-10">
      Leave a Message 💌
    </h3>

    <div className="bg-white rounded-3xl p-8 shadow-lg border border-yellow-100">

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-4 p-3 rounded-xl border border-yellow-200"
      />

      <textarea
        placeholder="Write your wishes here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full mb-4 p-3 rounded-xl border border-yellow-200 h-32"
      />

      <button
        onClick={handleSubmit}
        className="px-6 py-3 bg-yellow-700 text-white rounded-full hover:scale-105 transition"
      >
        Send Message ✨
      </button>
    </div>

    <div className="mt-10 space-y-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className="bg-yellow-50 rounded-2xl p-5 shadow"
        >
          <h4 className="font-bold text-yellow-700">
            {msg.name}
          </h4>

          <p className="mt-2 text-neutral-700">
            {msg.message}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>
      {selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
    onClick={() => setSelectedImage(null)}
  >
    <img
      src={selectedImage}
      alt="Preview"
      className="max-h-[90vh] rounded-3xl shadow-2xl"
    />
  </div>
)}
      {/* Footer */}
      <footer className="px-6 py-12 text-center text-neutral-600">
        <p className="text-lg font-medium">
          Sampai jumpa di hari wisuda ✨
        </p>

        <p className="mt-3 text-sm text-neutral-500">
          Dibuat dengan kopi, revisi, curhat dengan chatgpt dan sisa kewarasan mahasiswa tingkat akhir.
        </p>
      </footer>
    </div>
    </>
  )
}