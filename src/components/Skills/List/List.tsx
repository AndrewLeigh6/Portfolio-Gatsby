import React from "react"

interface ListProps {
  title: string
  skills: string[]
}

const List = (props: ListProps) => {
  return (
    <div className="container mx-auto mb-8 sm:mb-0">
      <p className="text-3xl font-bold mb-3 text-white font-title">
        {props.title}
      </p>
      <ul className="list-disc ml-5">{renderSkills(props.skills)}</ul>
    </div>
  )
}

function renderSkills(skills: string[]) {
  return skills.map(skill => {
    return <li className="text-white">{skill}</li>
  })
}

export default List
