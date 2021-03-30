import React from "react"
import BodyText from "../../Text/BodyText/BodyText"
import HeaderText from "../../Text/HeaderText/HeaderText"
import SubheadingText from "../../Text/SubheadingText/SubheadingText"

interface ProjectProps {
  title: string
  tools: string
  github: string
  design: string
  children: string
  image: string
}

const Project = (props: ProjectProps) => {
  return (
    <div className="flex mx-auto container justify-between mb-20">
      <div className="max-w-md">
        <HeaderText marginBottom>{props.title}</HeaderText>
        <BodyText>{props.children}</BodyText>
        <SubheadingText>Tools</SubheadingText>
        <BodyText>{props.tools}</BodyText>
        <SubheadingText>Github</SubheadingText>
        <a href={props.github} target="_blank">
          <BodyText link>{props.github}</BodyText>
        </a>
        <SubheadingText>Design</SubheadingText>
        <a href={props.design} target="_blank">
          <BodyText link>{props.design}</BodyText>
        </a>
        <button className="bg-green-400 font-body text-gray-900 text-l pt-3 pb-2 px-8">
          View Site
        </button>
      </div>
      <div className="max-w-2xl">
        <img src={props.image} />
      </div>
    </div>
  )
}

export default Project
