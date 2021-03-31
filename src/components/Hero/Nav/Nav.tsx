import React from "react"
import NavItem from "./NavItem/NavItem"

const Nav = () => {
  return (
    <div className="container mx-auto">
      <ul className="flex justify-end font-title text-white text-2xl font-bold pt-20">
        <NavItem text="Skills" url="#skills" />
        <NavItem text="Personal Projects" url="#projects" />
        <NavItem text="Experience" url="#experience" />
        <NavItem text="Contact" url="#contact" />
      </ul>
    </div>
  )
}

export default Nav
