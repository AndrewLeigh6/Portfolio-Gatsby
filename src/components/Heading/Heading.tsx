import React from "react"

interface HeadingProps {
  title: string
}

const Heading = (props: HeadingProps) => {
  return (
    <div className="block p-6 text-white text-3xl font-bold bg-green-400">
      <div className="flex container mx-auto font-title">{props.title}</div>
    </div>
  )
}

export default Heading
