    "use client"
    import { motion } from "framer-motion"
    import { useState } from "react"

export default function GraduationInvitation() {
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const clickSound = () => {
  const audio = new Audio("/click.mp3")
  audio.play()
}

    if (!open) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-yellow-100 to-white px-6">

      <h1 className={`text-5xl md:text-7xl font-serif font-bold animate-pulse ${
  darkMode ? "text-white" : "text-yellow-800"
}`}
>
        Zahara Chairani
      </h1>

      <p className={`mt-6 text-lg ${
  darkMode ? "text-neutral-300" : "text-neutral-700"
}`}>
        Graduation Invitation 2026
      </p>

      <button
        onClick={() => setOpen(true)}
        className="mt-10 px-8 py-4 bg-yellow-700 text-white rounded-full shadow-lg hover:scale-105 transition duration-300"
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

    <div
  className={`min-h-screen font-sans transition-all duration-500 animate-fadeIn ${
    darkMode
      ? "bg-neutral-900 text-white"
      : "bg-gradient-to-b from-yellow-50 to-white text-neutral-800"
  }`}
>
  <div className="fixed top-5 right-5 z-50">
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="bg-yellow-700 text-neutral px-4 py-2 rounded-full shadow-lg"
    
  >
    {darkMode ? "☀️ Light" : "🌙 Dark"}
  </button>
</div>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 text-center min-h-screen flex flex-col items-center justify-center">
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_top,_#facc15,_transparent_60%)]" />
        <div className="absolute top-10 left-10 text-5xl animate-bounce opacity-30">
        🌸
        </div>
        <div className="absolute bottom-10 right-20 text-5xl animate-bounce opacity-20">
        🌸
        </div>

        <div className="absolute top-20 right-16 text-4xl animate-pulse opacity-40">
        ✨
        </div>
        <div className="absolute top-20 left-1/4 text-3xl animate-pulse opacity-20">
        ✨
        </div>

        <div className="absolute bottom-10 left-1/4 text-6xl opacity-20 animate-pulse">
       💫
        </div>
        <div className="absolute top-1/2 left-10 text-4xl animate-pulse opacity-10">
        💫
        </div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#facc15,_transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-sm text-yellow-700 mb-4">
            Graduation Invitation
          </p>

          <h1 className={`text-5xl md:text-7xl font-serif font-bold leading-tight ${
  darkMode ? "text-white" : "text-yellow-800"
}`}>
            Zahara Chairani
          </h1>

          <p className={`mt-6 text-lg md:text-xl leading-relaxed ${
  darkMode ? "text-neutral-300" : "text-neutral-700"
}`}>
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
              May 24th, 2026
            </h2>
            <p className="mt-2 text-neutral-600">
              Kampus 1 UIN Syarif Hidayatullah Jakarta, Tangerang Selatan
              But maybe we would move to FISIP UIN Jakarta.
            </p>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="px-6 py-16"
      >

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div
  className={`rounded-3xl p-8 shadow-lg ${
    darkMode
      ? "bg-neutral-800 text-white"
      : "bg-white text-neutral-800"
  }`}
>
            <h3 className="text-2xl font-bold text-yellow-700 mb-4">
              Detail Acara
            </h3>

            <div
  className={`space-y-4 ${
    darkMode ? "text-neutral-200" : "text-neutral-700"
  }`}
>
              <div>
                <p className="font-semibold">Tanggal</p>
                <p>May 24th, 2026</p>
              </div>

              <div>
                <p className="font-semibold">Waktu</p>
                <p>10.00 WIB - selesai (pulang duluan juga gapapa) </p>
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
                <p>Semi formal cenderung santai (sing penting rapi dan nyaman aja!) </p>
              </div>
            </div>
          </div>

          <div className={`bg-yellow-100 rounded-3xl p-8 shadow-lg border border-yellow-200 flex flex-col justify-center ${
    darkMode ? "bg-neutral-800 border-neutral-700" : ""
  }`}>
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">
              Pesan Kecil
            </h3>

            <p className="text-neutral-700 leading-relaxed text-lg">
              Terima kasih sudah menjadi bagian dari perjalanan saya.
              Kehadiran kalian di hari spesial ini akan sangat berarti.
              Dan ya, saya akhirnya berhasil menyelesaikan ini tanpa
              berubah menjadi villain akademik sepenuhnya (tolong segera dikicaukan).
            </p>
          </div>
        </div>
      </motion.section>

      {/* Gallery Placeholder */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-yellow-700 mb-10">
            Gallery
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["/foto4.jpg", "/foto8.jpg", "/foto3.jpg", "/foto6.jpg", "/foto5.jpg", "/foto7.jpg"].map((photo, index) => (
  <motion.div
    key={index}
    onClick={() =>
      setSelectedImage(selectedImage === index ? null : index)
    }

    whileHover={{ scale: 1.03, rotate: 1 }}

    className="relative bg-white p-3 rounded-2xl shadow-2xl cursor-pointer rotate-[-2deg]"
  >
    {selectedImage === index ? (
      <motion.img
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}

        src={photo}
        alt=""
        className="w-full aspect-[3/4] object-cover rounded-xl"
      />
    ) : (
      <div className="w-full aspect-[3/4] bg-yellow-100 rounded-xl flex items-center justify-center text-5xl">
        🎞️
      </div>
    )}
  </motion.div>
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

    <form
  action="https://formspree.io/f/xdajklkd"
  method="POST"
  className={`rounded-3xl p-8 shadow-lg border ${
    darkMode
      ? "bg-neutral-800 border-neutral-700"
      : "bg-white border-yellow-100"
  }`}
>

      <input
  type="text"
  name="name"
  placeholder="Your Name"
        className={`w-full mb-4 p-3 rounded-xl border ${
  darkMode
    ? "bg-neutral-700 border-neutral-600 text-white"
    : "border-yellow-200"
}`}
      />

      <textarea
  name="message"
  placeholder="Write your wishes here..."
        className={`w-full mb-4 p-3 rounded-xl border h-32 ${
  darkMode
    ? "bg-neutral-700 border-neutral-600 text-white"
    : "border-yellow-200"
}`}
      />

      <button
  type="submit"
        className="px-6 py-3 bg-yellow-700 text-white rounded-full hover:scale-105 transition"
      >
        Send Message ✨
      </button>
    </form>

  </div>
</section>
      {selectedImage !== null && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
    onClick={() => {
  clickSound()
  setSelectedImage(null)
}}
  >
    <img
      src={[
        "/foto4.jpg",
        "/foto8.jpg",
        "/foto3.jpg",
        "/foto6.jpg",
        "/foto5.jpg",
        "/foto7.jpg",
      ][selectedImage]}
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
          Dibuat dengan es chocolatos, revisi, curhat dengan chatgpt dan sisa kewarasan mahasiswa tingkat akhir.
        </p>
      </footer>
    </div>
    </>
  )
}