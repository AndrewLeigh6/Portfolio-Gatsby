import React from "react"

interface ModalProps {
  name: string
  url: string
  image: string
  clicked: () => void
}

const Modal = (props: ModalProps) => {
  return (
    <div className="h-screen w-screen bg-gray-900 fixed top-0 left-0">
      <div className="container mx-auto font-title text-xl pt-20">
        <p className="text-gray-50 font-bold">{props.name}</p>
        <a href={props.url} target="_blank" className="text-green-400">
          {props.url}
        </a>
        <div className="mt-5 relative">
          <img src={props.image} alt={props.name} />
          <div
            onClick={props.clicked}
            className="rounded-full text-gray-900 bg-gray-100 absolute -top-5 -right-5 py-2 px-4 border-2 border-gray-900 cursor-pointer"
          >
            x
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
