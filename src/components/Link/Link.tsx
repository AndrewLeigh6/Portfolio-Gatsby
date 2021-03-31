import React from "react"

interface LinkProps {
  children: JSX.Element | JSX.Element[] | string
  url: string
}

const Link = (props: LinkProps) => {
  return (
    <a href={props.url} target="_blank" className="inline">
      {props.children}
    </a>
  )
}

export default Link
