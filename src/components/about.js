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
              A fourth-year Computer Science undergraduate student at Oregon State University with a passion for software engineering and machine learning. I have professional experience creating websites with the ASP.NET MVC framework, developing back-end APIs with Python and Flask, and training machine learning models with both supervised learning and reinforcement learning.
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  </div>
)
