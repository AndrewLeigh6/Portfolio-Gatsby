import React from "react"
import HeroBannerLarge from "../../images/hero/hero-l.png"
import Nav from "./Nav/Nav"

const Hero = () => {
  const styles = {
    backgroundImage: `url("${HeroBannerLarge}")`,
  }

  return (
    <div id="hero">
      <div className="h-screen bg-cover bg-bottom" style={styles}>
        <Nav />
        <div className="font-title text-white container mx-auto flex flex-col mt-28">
          <p className="font-bold text-7xl">Andrew Leigh</p>
          <p className="text-5xl">Front End</p>
          <p className="text-5xl">Web Developer</p>
          <a
            className="text-4xl bg-yellow-500 py-4 px-8 mt-10 max-w-xs text-center"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
