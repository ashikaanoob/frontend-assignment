import product1 from "../assets/product1.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"


const products = [
  {
    image: product1,
    name: "The Wall (P1.2)"
  },

  {
    image: product1,
    name: "The Wall (P1.6)"
  },

  {
    image: product2,
    name: "The Wall - Remote Power Ready"
  },

  {
    image: product3,
    name: "The Wall - Remote Power Ready (P1.2)"
  },

  {
    image: product3,
    name: "The Wall - Remote Power Ready (P1.6)"
  },

  {
    image: product3,
    name: "The Wall Professional Bundle"
  }
]

const Products = () => {
  return (
    <section className="bg-[#ededed] py-16 md:py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#30384c] mb-16">

          Shop The Wall Products

        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10">

          {products.map((product, index) => (

            <div
              key={index}
              className="flex flex-col items-center text-center"
            >

              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-[220px] h-auto object-contain mb-8 hover:scale-105 transition duration-300"
              />

              {/* Product Name */}
              <h3 className="text-[#30384c] font-medium mb-6 max-w-[250px]">

                {product.name}

              </h3>

              {/* Button */}
              <button className="border border-[#30384c] px-8 py-3 hover:bg-black hover:text-white transition duration-300">

                Buy Now

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Products