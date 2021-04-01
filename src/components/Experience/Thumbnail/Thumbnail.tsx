import React from "react"
import { Actions } from "../Experience"

type Colour = "blue"

interface ThumbnailProps {
  image: string
  title: string
  clicked: React.Dispatch<Actions>
}

const Thumbnail = (props: ThumbnailProps) => {
  return (
    <div
      className="font-title font-bold text-white text-xl text-center p-10 bg-cover bg-top cursor-pointer"
      style={{ backgroundImage: `url("${props.image}")` }}
      onClick={() => props.clicked({ type: "show", title: props.title })}
    >
      {props.title}
    </div>
  )
}

export default Thumbnail
