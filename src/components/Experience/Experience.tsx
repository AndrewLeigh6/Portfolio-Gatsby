import React from "react"
import Heading from "../Heading/Heading"
import Thumbnail from "./Thumbnail/Thumbnail"
import RochValley from "../../images/thumbnails/rochvalley.png"
import RochValleyLarge from "../../images/advansys/rochvalley.png"
import Focusrite from "../../images/thumbnails/focusrite.png"
import FocusriteLarge from "../../images/advansys/focusrite.png"
import Smiffys from "../../images/thumbnails/smiffys.png"
import SmiffysLarge from "../../images/advansys/smiffys.png"
import Converj from "../../images/thumbnails/converj.png"
import ConverjLarge from "../../images/advansys/converj.png"
import Wowbbq from "../../images/thumbnails/wowbbq.png"
import WowbbqLarge from "../../images/advansys/wowbbq.png"
import BeHair from "../../images/thumbnails/behair.png"
import BeHairLarge from "../../images/advansys/behair.png"
import SubheadingText from "../Text/SubheadingText/SubheadingText"
import BodyText from "../Text/BodyText/BodyText"
import { useReducer } from "react"
import Modal from "./Modal/Modal"

interface Project {
  title: string
  url: string
  image: any
  imageLarge: any
}

type State = {
  showModal: boolean
  activeProject: string
}

export type Actions =
  | {
      type: "show"
      title: string
    }
  | { type: "hide" }

const initialState: State = {
  showModal: false,
  activeProject: "",
}

function modalReducer(state: State, action: Actions): State {
  switch (action.type) {
    case "show":
      return {
        showModal: true,
        activeProject: action.title,
      }

    case "hide":
      return {
        showModal: false,
        activeProject: "",
      }
    default:
      throw new Error()
  }
}

const Experience = () => {
  const projects: Project[] = [
    {
      title: "Roch Valley",
      url: "https://www.roch-valley.co.uk/",
      image: RochValley,
      imageLarge: RochValleyLarge,
    },
    {
      title: "Focusrite",
      url: "https://store.focusrite.com/en-gb",
      image: Focusrite,
      imageLarge: FocusriteLarge,
    },
    {
      title: "Smiffys Liverpool",
      url: "https://www.smiffys-liverpool.co.uk/",
      image: Smiffys,
      imageLarge: SmiffysLarge,
    },
    {
      title: "Converj Solutions",
      url: "http://converj.co.uk/",
      image: Converj,
      imageLarge: ConverjLarge,
    },
    {
      title: "WOW BBQ",
      url: "https://www.wowbbq.co.uk/",
      image: Wowbbq,
      imageLarge: WowbbqLarge,
    },
    {
      title: "Be Hair",
      url: "https://be-hair.co.uk/",
      image: BeHair,
      imageLarge: BeHairLarge,
    },
  ]

  const [state, dispatch] = useReducer(modalReducer, initialState)

  const renderThumbnails = () => {
    const thumbnails = projects.map(project => {
      return (
        <Thumbnail
          clicked={dispatch}
          image={project.image}
          title={project.title}
          key={project.title}
        />
      )
    })

    return thumbnails
  }

  const renderModal = () => {
    let modal: JSX.Element | null = null

    const project = projects.find(
      project => project.title === state.activeProject
    )

    if (state.showModal && project) {
      console.log("so far so good")

      modal = (
        <Modal
          name={project.title}
          image={project.imageLarge}
          url={project.url}
          clicked={() => dispatch({ type: "hide" })}
        />
      )
    }

    return modal
  }

  return (
    <div id="experience" className="bg-gray-900">
      {renderModal()}
      <Heading title="Experience" />
      <div className="flex container mx-auto py-10 justify-between">
        <div className="max-w-md">
          <SubheadingText marginBottom>Advansys</SubheadingText>
          <div className="font-body text-gray-50">
            <BodyText>
              Here are a few of the sites I worked on at Advansys between
              September 2015 and January 2018.
            </BodyText>
            <BodyText>
              This mainly consisted of converting designs into functional and
              responsive sites, implementing business logic, and adding any
              other required features.
            </BodyText>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-5 gap-y-5">
          {renderThumbnails()}
        </div>
      </div>
    </div>
  )
}

export default Experience
