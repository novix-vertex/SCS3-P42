import AboutHero from "../components/about/AboutHero"
import AboutStats from "../components/about/AboutStats"
import CTASection from "../components/about/CTASection"
import OurStory from "../components/about/OurStory"
import Team from "../components/about/Team"
import WhatWeStandCard from "../components/about/WhatWeStandCard"
const About = () => {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 space-y-24">
        <AboutHero />
        <AboutStats />
        <OurStory />
        <WhatWeStandCard />
        <Team />
        <CTASection />
      </div>
    </div>
  )
}

export default About