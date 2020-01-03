import React, {useRef} from "react"
import ScrollspyNav from "react-scrollspy-nav"
import {Navbar, Nav} from "react-bootstrap"
import Image from "../../static/logo64.png"
import "./header.scss"


export default props => {
  const homepageRef = useRef(null);

  return (
    <Navbar fixed="top" bg="light" expand="sm">
      <Navbar.Brand onClick={() => {homepageRef.current.click();}}>
        <img class="brand-img" alt="BG" src={Image} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="navbar-pages">
        <div class="ml-auto">
          <ScrollspyNav scrollTargetIds={ props.ids } activeNavClass="active" scrollDuration="500">
            <ul class="navbar-nav nav-pills">
              { props.ids.map(id => (
                <li class="nav-item">
                  {(() => {
                    switch (id) {
                      case props.clickId:
                        return <Nav.Link href={ "#" + id } ref={props.clickRef}>{ id }</Nav.Link>;
                      case props.homepageId:
                        return <Nav.Link href={ "#" + id } ref={homepageRef}>{ id }</Nav.Link>;
                      default:
                        return <Nav.Link href={ "#" + id }>{ id }</Nav.Link>;
                    }
                  })()}
                </li>
              ))}
            </ul>
          </ScrollspyNav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}
