import React from "react"
import Link from "../../Link/Link"
import BodyText from "../../Text/BodyText/BodyText"
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
        <BodyText link>{props.body}</BodyText>
      </Link>
    </div>
  )
}

export default ContactDetail
