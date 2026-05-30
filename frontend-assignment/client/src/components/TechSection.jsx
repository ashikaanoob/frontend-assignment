const TechSection = ({
  title,
  description,
  image,
}) => {
  return (
    <section className="bg-black py-10 md:py-14 px-6">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">

          {title}

        </h2>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-8">

          {description}

        </p>

        <div className="relative bg-zinc-900/40 p-5 md:p-7 overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-b from-zinc-700/10 to-black"></div>

          <img
            src={image}
            alt={title}
            className="relative z-10 w-full h-auto object-contain border border-zinc-700 hover:scale-[1.02] transition duration-500"
          />

        </div>

      </div>

    </section>
  )
}

export default TechSection