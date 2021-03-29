import React from "react"

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
      <p className="font-title text-3xl font-bold mb-3">{props.heading}</p>
      <a href={url} target="_blank">
        <p className="font-body text-green-500 text-xl">{props.body}</p>
      </a>
    </div>
  )
}

export default ContactDetail
