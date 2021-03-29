import React from "react"
import Heading from "../Heading/Heading"
import ContactDetail from "./ContactDetail/ContactDetail"

const Contact = () => {
  return (
    <div>
      <Heading title="Contact" backgroundClass="bg-indigo-500" />
      <div className="flex container mx-auto flex-col">
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
          body="https://drive.google.com/file/d/1svJJ3JKGHcOPQm_NddCg4TzGWCimkeFM/view?usp=sharing"
        />
      </div>
    </div>
  )
}

export default Contact
