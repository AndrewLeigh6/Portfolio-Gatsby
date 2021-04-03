import React from "react"
import Heading from "../Heading/Heading"
import List from "./List/List"

const Skills = () => {
  return (
    <div id="skills" className="bg-gray-900">
      <Heading title="Skills" />
      <div className="flex container mx-auto justify-around items-center flex-col pl-5 py-10 sm:pl-0 sm:flex-row font-body">
        <List
          title="Front End"
          skills={[
            "HTML",
            "CSS",
            "SCSS / SASS",
            "Tailwind CSS",
            "BEM",
            "Bootstrap",
          ]}
        />
        <List
          title="Javascript"
          skills={[
            "React",
            "Typescript",
            "Jest",
            "NodeJS",
            "Express",
            "jQuery",
          ]}
        />
        <List
          title="Other Tools"
          skills={[
            "Docker",
            "Nginx",
            "MySQL / PostgreSQL",
            "Vim",
            "Git",
            "Figma",
          ]}
        />
      </div>
    </div>
  )
}

export default Skills
