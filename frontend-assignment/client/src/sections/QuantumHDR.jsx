import hdrImage from "../assets/quantum-hdr.jpg"

const QuantumHDR = () => {
  return (
    <section className="bg-black py-10 md:py-14 px-6">

      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">

          Quantum HDR Technology

        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-8">

          Boosting the industry’s best picture quality engine, The Wall utilises
          advanced HDR picture refinement technologies to render optimum peak
          brightness and contrast in every single scene.

        </p>

        {/* Image Container */}
        <div className="relative bg-zinc-900/40 p-5 md:p-7 overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-b from-zinc-700/10 to-black"></div>

          <img
            src={hdrImage}
            alt="Quantum HDR"
            className="relative z-10 w-full h-auto object-contain border border-zinc-700"
          />

        </div>

      </div>

    </section>
  )
}

export default QuantumHDR