import emailIcon from "../assets/email.png"
import phoneIcon from "../assets/phone.png"
import locationIcon from "../assets/location.png"

import instagramIcon from "../assets/instagram.png"
import facebookIcon from "../assets/facebook.png"
import linkedinIcon from "../assets/linkedin.png"

const ContactFooter = () => {
  return (
    <section className="bg-black text-white py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">

              Get In Touch

            </h2>

            <p className="text-gray-400 leading-relaxed mb-12 max-w-md">

              Get in touch with our sales team to discuss tailored solutions
              for your business. You can call us directly or reach out via
              the form below.

            </p>

            {/* Contact Info */}
            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-center gap-4">

                <img
                  src={emailIcon}
                  alt="email"
                  className="w-5 h-5"
                />

                <span className="text-gray-300">

                  loremipsum@gmail.com

                </span>

              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">

                <img
                  src={phoneIcon}
                  alt="phone"
                  className="w-5 h-5"
                />

                <span className="text-gray-300">

                  9385 01 12 25

                </span>

              </div>

              {/* Location */}
              <div className="flex items-center gap-4">

                <img
                  src={locationIcon}
                  alt="location"
                  className="w-5 h-5"
                />

                <span className="text-gray-300">

                  Lorem Ipsum

                </span>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="border border-zinc-700 p-8">

            <h3 className="text-3xl font-bold mb-8">

              Message

            </h3>

            <form className="space-y-5">

              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border border-zinc-700 px-4 py-3 outline-none focus:border-white transition duration-300"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Your Mail"
                className="w-full bg-transparent border border-zinc-700 px-4 py-3 outline-none focus:border-white transition duration-300"
              />

              {/* Message */}
              <textarea
                rows="6"
                placeholder="Message"
                className="w-full bg-transparent border border-zinc-700 px-4 py-3 outline-none resize-none focus:border-white transition duration-300"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="w-full border border-zinc-700 py-3 hover:bg-white hover:text-black transition duration-300"
              >

                Submit

              </button>

            </form>

          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-20">

          <img
            src={instagramIcon}
            alt="instagram"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition duration-300"
          />

          <img
            src={facebookIcon}
            alt="facebook"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition duration-300"
          />

          <img
            src={linkedinIcon}
            alt="linkedin"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition duration-300"
          />

        </div>

        {/* Footer Logo */}
        <div className="text-center mt-14">

          <h2 className="text-3xl font-bold">

            The Wall

          </h2>

        </div>

      </div>

    </section>
  )
}

export default ContactFooter