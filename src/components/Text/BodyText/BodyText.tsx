import React from "react"

interface BodyTextProps {
  children: string
  link?: boolean
}

const BodyText = (props: BodyTextProps) => {
  let styles = "text-gray-50"

  if (props.link) {
    styles = "text-green-400"
  }

  return (
    <p className={"font-body mb-5 inline-block " + styles}>{props.children}</p>
  )
}

export default BodyText
