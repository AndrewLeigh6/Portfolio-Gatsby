import React from "react"
import HeaderText from "../../Text/HeaderText/HeaderText"

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
        <p className="text-gray-50 font-body mb-5">{props.children}</p>
        <p className="font-title font-bold text-gray-50 text-xl mb-2">Tools</p>
        <p className="text-gray-50 font-body mb-5">{props.tools}</p>
        <p className="font-title font-bold text-gray-50 text-xl mb-2">Github</p>
        <p className="text-green-400 font-body mb-5">{props.github}</p>
        <p className="font-title font-bold text-gray-50 text-xl mb-2">Design</p>
        <p className="text-green-400 font-body mb-5">{props.design}</p>
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
