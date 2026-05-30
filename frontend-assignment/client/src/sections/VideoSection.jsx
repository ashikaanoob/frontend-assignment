import banner from "../assets/video-banner.jpg"

const VideoSection = () => {
  return (
    <section className="bg-black px-3 md:px-6 py-6">

      <div className="relative w-full h-[75vh] overflow-hidden">

        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover"
        />

      </div>

    </section>
  )
}

export default VideoSection