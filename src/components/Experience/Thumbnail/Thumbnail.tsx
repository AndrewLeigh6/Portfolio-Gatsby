import React from "react"
import { blue } from "tailwindcss/colors"

type Colour = "blue"

interface ThumbnailProps {
  image: string
  title: string
}

const Thumbnail = (props: ThumbnailProps) => {
  return (
    <div
      className="font-title font-bold text-white text-xl text-center p-10 bg-cover bg-top"
      style={{ backgroundImage: `url("${props.image}")` }}
    >
      {props.title}
    </div>
  )
}

export default Thumbnail
