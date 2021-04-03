import * as React from "react"
import SEO from "../components/seo"
import "@fontsource/chivo"
import "@fontsource/overpass"

import Skills from "../components/Skills/Skills"
import Contact from "../components/Contact/Contact"
import Experience from "../components/Experience/Experience"
import Projects from "../components/Projects/Projects"
import Hero from "../components/Hero/Hero"

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Portfolio" />
    <Hero />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
  </React.Fragment>
)

export default IndexPage
