import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

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
    <section id="skills" className="section___Skills">
      <h1>Skills</h1>
      <div className="skills___Container">
        {data.allContentfulSkillsList.edges.map(({ node: item }, index) => {
          return (
            <div
              key={item.id}
              className="skill"
              data-sal="slide-right"
              data-sal-delay={`${300 + (index + 1) * 10}`}
              data-sal-duration="100"
              data-sal-easing="ease-in"
            >
              <Img
                style={{
                  width: '100%',
                  marginBottom: '10px',
                }}
                objectFit="scale-down"
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
