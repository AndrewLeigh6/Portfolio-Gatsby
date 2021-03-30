import * as React from "react"
import SEO from "../components/seo"
import "@fontsource/chivo"
import "@fontsource/overpass"

import Skills from "../components/Skills/Skills"
import Contact from "../components/Contact/Contact"
import Experience from "../components/Experience/Experience"

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" />
    <Skills />
    <Experience />
    <Contact />
  </React.Fragment>
)

export default IndexPage
