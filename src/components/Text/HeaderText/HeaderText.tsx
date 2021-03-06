import React from "react"

interface HeaderTextProps {
  children: string
  marginBottom?: boolean
}

const HeaderText = (props: HeaderTextProps) => {
  let styles: string = ""

  // These optional properties need a space afterwards to stop class strings combining
  if (props.marginBottom) {
    styles = styles + "mb-5 "
  }

  return (
    <p className={"text-3xl text-white font-title font-bold " + styles}>
      {props.children}
    </p>
  )
}

export default HeaderText
