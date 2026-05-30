import resaleImage from "../assets/resale-panels.png"

const Resale = () => {
  return (
    <section className="bg-black text-white py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">

          For Resale

        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div>

            <img
              src={resaleImage}
              alt="Resale"
              className="w-full h-auto object-contain"
            />

          </div>

          {/* Text Content */}
          <div>

            <h3 className="text-3xl md:text-5xl font-bold mb-10">

              Benefits

            </h3>

            {/* Benefits List */}
            <div className="space-y-5 text-gray-300">

              <p>
                ➤ Tailored Solutions And Support Services
              </p>

              <p>
                ➤ Strategic Marketing And Branding Opportunities
              </p>

              <p>
                ➤ Best Discounted Price
              </p>

              <p>
                ➤ Exclusive Access To Cutting Edge Technology
              </p>

            </div>

            {/* Button */}
            <div className="mt-12">

              <button className="border border-white px-8 py-3 hover:bg-white hover:text-black transition duration-300">

                Contact Us

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Resale