import React from "react"
import HeaderText from "../../Text/HeaderText/HeaderText"

interface ContactDetailProps {
  heading: string
  body: string
  email?: boolean
}

const ContactDetail = (props: ContactDetailProps) => {
  let url = props.body

  if (props.email) {
    url = "mailto:" + url
  }

  return (
    <div className="mb-7">
      <HeaderText>{props.heading}</HeaderText>
      <a href={url} target="_blank">
        <p className="font-body text-green-500 text-xl inline">{props.body}</p>
      </a>
    </div>
  )
}

export default ContactDetail
