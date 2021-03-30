import React from "react"
import HeaderText from "../Text/HeaderText/HeaderText"

interface HeadingProps {
  title: string
}

const Heading = (props: HeadingProps) => {
  return (
    <div className="block py-5 bg-green-400">
      <div className="flex container mx-auto">
        <HeaderText>{props.title}</HeaderText>
      </div>
    </div>
  )
}

export default Heading
