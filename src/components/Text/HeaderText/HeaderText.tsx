import React from "react"

type Size = "small" | "large"

interface HeaderTextProps {
  children: string
  marginBottom?: boolean
}

const HeaderText = (props: HeaderTextProps) => {
  let styles: string = "text-3xl "

  // These optional properties need a space afterwards to stop class strings combining
  if (props.marginBottom) {
    styles = styles + "mb-5 "
  }

  return (
    <p className={"text-white font-title font-bold " + styles}>
      {props.children}
    </p>
  )
}

export default HeaderText
