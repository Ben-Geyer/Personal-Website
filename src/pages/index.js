import React, { useRef } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "./index.scss"
import Header from "../components/header.js"
import Home from "../components/home.js"
import About from "../components/about.js"
import Work from "../components/work.js"
import Projects from "../components/projects.js"


export default () => {
  const homepageScrollRef = useRef(null);

    return (
      <div>
        <Header ids={["home", "about", "work", "projects", "skills", "contact"]}
                clickRef={homepageScrollRef}
                clickId="about"
                homepageId="home" />
        <div id="home">
          <Home scrollFunc={() => {homepageScrollRef.current.click()}} />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="work">
          <Work />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <div style={{height: "100vh"}}></div>
        </div>
        <div id="contact">
          <div style={{height: "100vh"}}></div>
        </div>
      </div>
  )
}
