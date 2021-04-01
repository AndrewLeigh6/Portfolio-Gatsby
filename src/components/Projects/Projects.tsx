import React from "react"
import Heading from "../Heading/Heading"
import Project from "./Project/Project"
import GamesWithFriends from "../../images/projects/games-with-friends-tablet.png"
import TVTimer from "../../images/projects/tv-timer.png"
import PurrfectPartners from "../../images/projects/purrfect-partners.png"

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-900">
      <Heading title="Personal Projects" />
      <div className="flex container flex-col mx-auto py-10 divide-y-2 divide-gray-800">
        <Project
          title="Games With Friends"
          tools="HTML, CSS, SCSS, Javascript, Typescript, React, NodeJS, Express, Jest, PostgreSQL, Docker, Nginx"
          github="https://github.com/AndrewLeigh6/GamesWithFriends"
          design="https://www.figma.com/file/J9PAMQlLNlV9BXUpRgTJCF/GamesWithFriends"
          siteUrl=""
          image={GamesWithFriends}
        >
          I built this site in order to make it easier for groups of people to
          choose a game to play together on Steam. It pulls data from the Steam
          API, caches it in a database, and determines which games the users
          have in common.
        </Project>
        <Project
          title="TV Timer"
          tools="HTML, CSS, Javascript, React, NodeJS, Express, Docker, Nginx"
          github="https://github.com/AndrewLeigh6/TV-Timer"
          design="https://www.figma.com/file/w86jWhO8yzfvUA4DUvfA6T/TV-Timer"
          siteUrl=""
          image={TVTimer}
          notes="NOTE: If this site seems like it's taking a while to load, don't worry. Heroku sites hosted using the free tier go to sleep if they haven't been accessed for a while. If this is the case, it should be visible within 15 seconds."
        >
          This site was developed in order to help calculate start or end times
          for films, taking into account both the length of the film and the
          number of breaks desired by the user.
        </Project>
        <Project
          title="Purrfect Partners"
          tools="HTML, CSS, SCSS, Javascript"
          github="https://github.com/AndrewLeigh6/Purrfect-Partners"
          design="https://www.figma.com/file/JymheioAuR6B9IrYLfv6OLST/Purrfect-Partners"
          siteUrl="https://andrewleigh6.github.io/Purrfect-Partners/"
          image={PurrfectPartners}
        >
          This site was built in order to practice CSS, SCSS, BEM, and learn
          Flexbox.
        </Project>
      </div>
    </div>
  )
}

export default Projects
