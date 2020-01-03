import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import Image from "../../static/portrait.jpg"
import "./about.scss"


export default () => (
  <div class="about-component">
    <Container>
      <div class="about-upper-padding"></div>

      <Row>
        <Col>
          <h1 class="about-title">About</h1>
          <br />
        </Col>
      </Row>

      <div class="about-content">
        <Row>
          <Col md={{ span: 4 }}>
            <img src={Image} alt="Portrait" class="about-portrait" />
          </Col>
          <Col md={{ order: 1, offset: 1, span: 7 }}>
            <br />
            <p class="about-description">
              I'm a third-year undergraduate student pursuing a B.S. in Computer Science at
              Oregon State University. I have experience building products from end-to-end at
              ShoeBio Inc and the City of Salem IT Department, contributing to the full development
              stack. Additionally, I have experience working with machine learning algorithms
              at two research internships. I aspire to work as a Software Engineer and am especially
              interested in machine learning and distributed systems.
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  </div>
)
