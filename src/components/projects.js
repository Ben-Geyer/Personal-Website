import React from "react"
import {StaticQuery, graphql} from "gatsby"
import {Container, Row, Col, Card} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"
import { faGitAlt } from "@fortawesome/free-brands-svg-icons"
import "./projects.scss"

const images = require.context("../assets");

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___order], order: DESC },
          filter: { fileAbsolutePath: {regex: "/(projects)\\/.*\\\\.md$/"}}
        ) {
          totalCount
          edges {
            node {
              frontmatter {
                title
                github_url
                hosted_url
                image
              }
              html
            }
          }
        }
      }
    `}
    render={data => (
      <div class="projects-component">
        <Container>
          <div class="projects-upper-padding"></div>

          <Row>
            <Col>
              <h1 class="projects-title">Projects</h1>
              <br />
            </Col>
          </Row>

          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Card>
              <Card.Header style={{ padding: 0 }}>
                <Row>
                  <Col lg={{ span: 2 }} md={{ span: 2 }} xs={{ span: 4 }} style={{ padding: 0 }}>
                    <img style={{ width: "100%" }} src={images(node.frontmatter.image)} alt="Logo" />
                  </Col>
                  <Col lg={{ span: 10 }} md={{ span: 10 }} xs={{ span: 8 }} style={{ padding: "0.2em 0 0.2em 0.5em" }}>
                    <Row>
                      <Col style={{ padding: 0 }}>
                        <h5 style={{ fontWeight: "bold" }}>
                          {node.frontmatter.title}
                        </h5>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ padding: 0 }}>
                        <a href={node.frontmatter.github_url}>
                          <FontAwesomeIcon icon={faGitAlt} />
                          &nbsp;View Git Repo
                        </a>
                      </Col>
                    </Row>
                    {node.frontmatter.hosted_url !== "" && (
                        <Row>
                          <Col style={{ padding: 0 }}>
                            <a href={node.frontmatter.hosted_url}>
                              <FontAwesomeIcon icon={faLaptopCode} />
                              &nbsp;View Website
                            </a>
                          </Col>
                        </Row>
                    )}
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body style={{ padding: "1em" }}>
                <Row>
                  <Col style={{ padding: 0 }}>
                    <p>
                      <div dangerouslySetInnerHTML={{ __html: node.html }} />
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </div>
    )}
  />
)
