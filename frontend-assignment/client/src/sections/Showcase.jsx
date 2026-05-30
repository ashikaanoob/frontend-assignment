import livingImage from "../assets/living.jpg"
import businessImage from "../assets/business.jpg"

const Showcase = () => {
  return (
    <section className="bg-black py-10 md:py-14 px-3 md:px-6">

      {/* Living Section */}
      <div className="mb-8">

        <img
          src={livingImage}
          alt="Living"
          className="w-full h-auto object-cover"
        />

      </div>

      {/* Business Section */}
      <div>

        <img
          src={businessImage}
          alt="Business"
          className="w-full h-auto object-cover"
        />

      </div>

    </section>
  )
}

export default Showcase