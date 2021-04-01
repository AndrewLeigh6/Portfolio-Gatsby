import React from "react"
import Link from "../../Link/Link"
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
    <div className="flex mx-auto container justify-between mb-10 last:mb-0 pt-10 first:pt-0">
      <div className="max-w-md">
        <HeaderText marginBottom>{props.title}</HeaderText>
        <BodyText>{props.children}</BodyText>
        <SubheadingText>Tools</SubheadingText>
        <BodyText>{props.tools}</BodyText>
        <SubheadingText>Github</SubheadingText>
        <Link url={props.github}>
          <BodyText link>{props.github}</BodyText>
        </Link>
        <SubheadingText>Design</SubheadingText>
        <Link url={props.design}>
          <BodyText link>{props.design}</BodyText>
        </Link>
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
