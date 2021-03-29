import React from "react"

interface HeadingProps {
  title: string
  backgroundClass: string
}

const Heading = (props: HeadingProps) => {
  return (
    <div
      className={
        "block p-6 text-white text-3xl font-bold mb-10 " + props.backgroundClass
      }
    >
      <div className="flex container mx-auto font-title">{props.title}</div>
    </div>
  )
}

export default Heading
