import React from "react"

interface LinkProps {
  children: JSX.Element | JSX.Element[]
  url: string
}

const Link = (props: LinkProps) => {
  return (
    <a href={props.url} target="_blank">
      {props.children}
    </a>
  )
}

export default Link
