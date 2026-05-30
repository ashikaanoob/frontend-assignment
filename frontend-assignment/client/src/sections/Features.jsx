import feature1 from "../assets/feature1.jpg"
import feature2 from "../assets/feature2.jpg"
import feature3 from "../assets/feature3.jpg"
import feature4 from "../assets/feature4.jpg"

const Features = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-20">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
        Key Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Card 1 */}
        <div className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition duration-300">

          <img
            src={feature1}
            alt=""
            className="w-full h-56 object-cover"
          />

          <div className="p-4">

            <h3 className="text-2xl font-semibold mb-2">
              Micro LED Technology
            </h3>

            <p className="text-gray-400 text-sm">
              Witness an unmatched image presentation on a whole new scale
            </p>

          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition duration-300">

          <img
            src={feature2}
            alt=""
            className="w-full h-56 object-cover"
          />

          <div className="p-4">

            <h3 className="text-2xl font-semibold mb-2">
              One-of-a-kind Visuals
            </h3>

            <p className="text-gray-400 text-sm">
              Experience pure visual innovation derived from best-in-class picture technologies
            </p>

          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition duration-300">

          <img
            src={feature3}
            alt=""
            className="w-full h-56 object-cover"
          />

          <div className="p-4">

            <h3 className="text-2xl font-semibold mb-2">
              Infinity Design
            </h3>

            <p className="text-gray-400 text-sm">
              Choose what you want to see from a diverse selection of entertainment and lifestyle content
            </p>

          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition duration-300">

          <img
            src={feature4}
            alt=""
            className="w-full h-56 object-cover"
          />

          <div className="p-4">

            <h3 className="text-2xl font-semibold mb-2">
              Total UX
            </h3>

            <p className="text-gray-400 text-sm">
              Make a statement with subtle refinement in a seamless sophisticated design
            </p>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Features