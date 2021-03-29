import React from "react"
import Heading from "../Heading/Heading"
import List from "./List/List"

const Skills = () => {
  return (
    <div>
      <Heading title="Skills" backgroundClass="bg-yellow-500" />
      <div className="flex container mx-auto justify-around items-center flex-col pl-5 sm:pl-0 sm:flex-row font-body">
        <List
          title="Front End"
          skills={["HTML", "CSS", "SCSS / SASS", "JSX", "Bootstrap"]}
        />
        <List
          title="Javascript"
          skills={["React", "Typescript", "Jest", "NodeJS", "Express"]}
        />
        <List
          title="Other Tools"
          skills={["Docker", "Nginx", "MySQL / PostgreSQL", "Vim", "Figma"]}
        />
      </div>
    </div>
  )
}

export default Skills
