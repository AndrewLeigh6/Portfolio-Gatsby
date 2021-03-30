import React from "react"

interface SubheadingTextProps {
  children: string
  marginBottom?: boolean
}

const SubheadingText = (props: SubheadingTextProps) => {
  let styles: string = ""

  // These optional properties need a space afterwards to stop class strings combining
  if (props.marginBottom) {
    styles = styles + "mb-2 "
  }

  return (
    <p className={"font-title font-bold text-gray-50 text-xl " + styles}>
      {props.children}
    </p>
  )
}

export default SubheadingText
