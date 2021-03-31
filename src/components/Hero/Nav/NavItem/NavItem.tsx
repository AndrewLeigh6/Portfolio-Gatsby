import React from "react"
import Link from "../../../Link/Link"

interface NavItemProps {
  url: string
  text: string
}

const NavItem = (props: NavItemProps) => {
  return (
    <li className="ml-10 hover:text-yellow-500" key={props.text}>
      {/* <Link url={props.url}>{props.text}</Link> */}
      <a href={props.url}>{props.text}</a>
    </li>
  )
}

export default NavItem
