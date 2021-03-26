import * as React from "react"
import SEO from "../components/seo"
import "@fontsource/chivo"
import "@fontsource/overpass"

import Skills from "../components/Skills/Skills"

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" />
    <Skills />
  </React.Fragment>
)

export default IndexPage
