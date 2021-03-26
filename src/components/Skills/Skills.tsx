import React from "react"
import List from "./List/List"

const Skills = () => {
  return (
    <div>
      <div className="block p-6 bg-yellow-500 text-white text-3xl font-bold mb-10">
        <div className="flex container mx-auto">Skills</div>
      </div>
      <div className="flex container mx-auto justify-around items-center flex-col pl-5 sm:flex-row">
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
