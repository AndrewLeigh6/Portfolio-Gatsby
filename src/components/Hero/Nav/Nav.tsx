import React from "react"
import NavItem from "./NavItem/NavItem"

const Nav = () => {
  return (
    <div className="container mx-auto">
      <ul className="flex flex-col sm:flex-row justify-end font-title text-white text-md xl:text-2xl font-bold pt-10 sm:pt-20">
        <NavItem text="Skills" url="#skills" />
        <NavItem text="Personal Projects" url="#projects" />
        <NavItem text="Experience" url="#experience" />
        <NavItem text="Contact" url="#contact" />
      </ul>
    </div>
  )
}

export default Nav
