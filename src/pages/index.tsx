import * as React from "react"
import SEO from "../components/seo"
import "@fontsource/chivo"
import "@fontsource/overpass"

import Skills from "../components/Skills/Skills"
import Contact from "../components/Contact/Contact"

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" />
    {/* <Skills /> */}
    <Contact />
  </React.Fragment>
)

export default IndexPage
