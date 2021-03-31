import React from "react"
import Heading from "../Heading/Heading"
import Thumbnail from "./Thumbnail/Thumbnail"
import RochValley from "../../images/thumbnails/rochvalley.png"
import Focusrite from "../../images/thumbnails/focusrite.png"
import Smiffys from "../../images/thumbnails/smiffys.png"
import Converj from "../../images/thumbnails/converj.png"
import Wowbbq from "../../images/thumbnails/wowbbq.png"
import BeHair from "../../images/thumbnails/behair.png"
import HeaderText from "../Text/HeaderText/HeaderText"
import SubheadingText from "../Text/SubheadingText/SubheadingText"
import BodyText from "../Text/BodyText/BodyText"

const Experience = () => {
  return (
    <div id="experience" className="bg-gray-900">
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
        <div className="grid grid-cols-2 gap-x-5 gap-y-5">
          <Thumbnail image={RochValley} title="Roch Valley" />
          <Thumbnail image={Focusrite} title="Focusrite" />
          <Thumbnail image={Smiffys} title="Smiffys Liverpool" />
          <Thumbnail image={Converj} title="Converj Solutions" />
          <Thumbnail image={Wowbbq} title="WOW BBQ" />
          <Thumbnail image={BeHair} title="Be Hair" />
        </div>
      </div>
    </div>
  )
}

export default Experience
