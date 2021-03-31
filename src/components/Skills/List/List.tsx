import React from "react"
import SubheadingText from "../../Text/SubheadingText/SubheadingText"

interface ListProps {
  title: string
  skills: string[]
}

const List = (props: ListProps) => {
  return (
    <div className="container mx-auto mb-8 sm:mb-0">
      <SubheadingText marginBottom>{props.title}</SubheadingText>
      <ul className="list-disc ml-5">{renderSkills(props.skills)}</ul>
    </div>
  )
}

function renderSkills(skills: string[]) {
  return skills.map(skill => {
    return (
      <li key={skill} className="text-gray-50">
        {skill}
      </li>
    )
  })
}

export default List
