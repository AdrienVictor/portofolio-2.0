import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './styles.css'

function Skills() {
  const data = useStaticQuery(graphql`
    {
      allContentfulSkillsList(sort: { fields: number, order: ASC }) {
        edges {
          node {
            id
            skill
            skillLogoOrIcon {
              id
              fluid {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }
      }
    }
  `)
  return (
    <section className="section___Skills">
      <h1>Skills</h1>
      <div className="skills___Container">
        {data.allContentfulSkillsList.edges.map(({ node: item }) => {
          return (
            <div className="skill">
              <Img
                style={{
                  width: '110px',
                  marginBottom: '10px',
                }}
                fluid={item.skillLogoOrIcon.fluid}
              ></Img>
              <p>{item.skill}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
