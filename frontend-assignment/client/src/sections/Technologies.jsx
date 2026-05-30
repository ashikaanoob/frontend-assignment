import TechSection from "../components/TechSection"

import blackSeal from "../assets/black-seal.jpg"
import ultraChroma from "../assets/ultra-chroma.jpg"
import aiUpscaling from "../assets/ai-upscaling.jpg"

const Technologies = () => {
  return (
    <>

      <TechSection
        title="Black Seal Technology"
        description="The fusion of an exceptionally black base with specialised Black Seal Technology delivers deep black levels for intense contrast and immaculate detail."
        image={blackSeal}
      />

      <TechSection
        title="Ultra Chroma Technology"
        description="The Wall’s inherent colour qualities produce vibrant and natural colour for an awe-inspiring visual experience."
        image={ultraChroma}
      />

      <TechSection
        title="AI Upscaling Technology"
        description="An intuitive resolution-to-screen size adaption powered by Quantum Processor Flex delivers a perfect view of reality."
        image={aiUpscaling}
      />

    </>
  )
}

export default Technologies