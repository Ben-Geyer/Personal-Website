import React from "react"
import {Row, Col, Container} from "react-bootstrap"
import Pdf from "../assets/resume.pdf"
import "./home.scss"


export default props => (
  <div class="home-component">
    <Container>
      <div class="homepage-upper-padding"></div>

      <Row>
        <Col>
          <h3 class="before-name-headline">Hello World,</h3>
          <h1 class="name-headline">I'm Ben Geyer</h1>
        </Col>
      </Row>

      <div class="bottom-section">
        <Row>
          <Col>
            <h5 class="personal-description">
              Computer Science Student
            </h5>
          </Col>
        </Row>

        <Row>
          <Col>
            <a class="resume-btn btn btn-sm btn-outline-light" href={ Pdf }>
              Resume
            </a>
          </Col>
        </Row>

        <Row>
          <Col>
            <div class="bouncing">
              <span onClick={props.scrollFunc} class="scroll-down-btn fa fa-chevron-down"></span>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  </div>
)
