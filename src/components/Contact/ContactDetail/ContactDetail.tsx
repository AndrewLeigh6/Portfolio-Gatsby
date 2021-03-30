import React from "react"
import Link from "../../Link/Link"
import HeaderText from "../../Text/HeaderText/HeaderText"
import SubheadingText from "../../Text/SubheadingText/SubheadingText"

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
      <SubheadingText>{props.heading}</SubheadingText>
      <Link url={url}>
        <p className="font-body text-green-500 text-xl inline">{props.body}</p>
      </Link>
    </div>
  )
}

export default ContactDetail
