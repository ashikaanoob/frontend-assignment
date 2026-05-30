const Navbar = () => {
  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] z-50 bg-white">

      <div className="flex items-center justify-between px-6 md:px-14 py-5">

        <h1 className="text-black text-3xl font-semibold">
          The Wall
        </h1>

        <ul className="hidden md:flex gap-12 text-black text-sm">

          <li className="cursor-pointer hover:text-gray-500 transition">
            About
          </li>

          <li className="cursor-pointer hover:text-gray-500 transition">
            Features
          </li>

          <li className="cursor-pointer hover:text-gray-500 transition">
            Applications
          </li>

          <li className="cursor-pointer hover:text-gray-500 transition">
            Products
          </li>

          <li className="cursor-pointer hover:text-gray-500 transition">
            Resale
          </li>

        </ul>

        <button className="bg-black text-white px-6 py-2 rounded-full hover:scale-105 transition duration-300">

          Contact

        </button>

      </div>

    </nav>
  )
}

export default Navbar