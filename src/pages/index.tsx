import * as React from "react"
import SEO from "../components/seo"
import "@fontsource/chivo"
import "@fontsource/overpass"

import Skills from "../components/Skills/Skills"
import Contact from "../components/Contact/Contact"
import Experience from "../components/Experience/Experience"
import Projects from "../components/Projects/Projects"
import Hero from "../components/Hero/Hero"
import Modal from "../components/Experience/Modal/Modal"

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" />
    <Hero />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
    {/* <Modal name="Roch Valley" url="www.roch-valley.co.uk" image="blah" /> */}
  </React.Fragment>
)

export default IndexPage
