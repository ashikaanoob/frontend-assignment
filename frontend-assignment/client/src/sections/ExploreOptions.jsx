import option1 from "../assets/option1.png"
import option2 from "../assets/option2.png"

const ExploreOptions = () => {
  return (
    <section className="bg-[#ededed] py-16 md:py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-center text-[#30384c] mb-16">

          Explore Our Other Options

        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT CARD */}
          <div className="text-center">

            {/* Image */}
            <img
              src={option1}
              alt="All In One"
              className="w-full h-auto object-cover shadow-xl mb-8"
            />

            {/* Title */}
            <h3 className="text-3xl md:text-5xl font-bold text-[#30384c] leading-tight mb-4">

              The Wall
              <br />
              (All-In-One-Series)

            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-3">

              Speaker And Control Unit In-Built

            </p>

            <p className="text-gray-600 mb-2">

              Variants Available:

            </p>

            <p className="text-gray-600">

              A) 110 And 146 Inches In 2K Resolution

            </p>

            <p className="text-gray-600 mb-8">

              B) 110 And 146 Inches In 4K Resolution

            </p>

            {/* Centered Button */}
            <div className="flex justify-center">

              <button className="border border-[#30384c] px-8 py-3 hover:bg-black hover:text-white transition duration-300">

                Get Quote

              </button>

            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="text-center pt-24">

            {/* Image */}
            <img
              src={option2}
              alt="Custom Wall"
              className="w-full h-auto object-cover shadow-xl mb-8"
            />

            {/* Title */}
            <h3 className="text-3xl md:text-5xl font-bold text-[#30384c] leading-tight mb-4">

              The Wall
              <br />
              (Custom-In Wall Series)

            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-3">

              Speaker And Control Unit Sold Separately

            </p>

            <p className="text-gray-600">

              Started With 250” Can Be Expanded

            </p>

            <p className="text-gray-600">

              To Your Imagination

            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ExploreOptions