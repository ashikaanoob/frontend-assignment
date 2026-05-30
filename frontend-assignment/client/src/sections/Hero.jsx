import hero from "../assets/hero.jpg"

const Hero = () => {
  return (
    <section className="relative w-full h-[135vh] overflow-hidden bg-black">

      <img
        src={hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-[center_top]"
      />

      <div className="absolute inset-0 bg-black/25"></div>

      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-black to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center text-center pt-28 px-4">

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">

          Samsung the Wall Series

        </h1>

        <div className="flex items-center gap-6 md:gap-10 text-xl md:text-3xl text-white mt-8">

          <span>110 2K</span>

          <span>|</span>

          <span>146 2K</span>

          <span>|</span>

          <span>146 4K</span>

        </div>

        <div className="h-[420px]"></div>

        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8">

          Offer Price : 34,399 AED

        </h2>

        <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">

          Buy Now

        </button>

        <p className="mt-20 text-xl md:text-2xl text-gray-200">

          World’s first MICROLED technology

        </p>

      </div>

    </section>
  )
}

export default Hero