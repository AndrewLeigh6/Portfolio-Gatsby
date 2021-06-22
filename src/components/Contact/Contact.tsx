import React from "react"
import Heading from "../Heading/Heading"
import ContactDetail from "./ContactDetail/ContactDetail"

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-900">
      <Heading title="Contact" />
      <div className="flex container mx-auto flex-col py-10">
        <ContactDetail heading="Email" body="andrewleigh6@gmail.com" email />
        <ContactDetail
          heading="Github"
          body="https://github.com/AndrewLeigh6"
        />
        <ContactDetail
          heading="LinkedIn"
          body="https://www.linkedin.com/in/andrew-leigh6/"
        />
        <ContactDetail
          heading="CV"
          body="https://drive.google.com/file/d/1hHDmT3y0zATKG2NvX0SUEAeMMyS1RIgX/view?usp=sharing"
        />
      </div>
    </div>
  )
}

export default Contact
