import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import './styles.css'

function MyPassions() {
  const data = useStaticQuery(graphql`
    {
      allContentfulPassions(sort: { fields: number, order: ASC }) {
        edges {
          node {
            id
            passionName
            logo {
              id
              fluid(maxWidth: 1000) {
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
      contentfulSectionEntry {
        id
        subtitle2
      }
    }
  `)

  return (
    <div
      className="passions___Container"
      data-sal="slide-left"
      data-sal-delay="300"
      data-sal-easing="ease-in"
    >
      <h2 style={{ textAlign: 'center' }}>
        {data.contentfulSectionEntry.subtitle2}
      </h2>
      <div className="entry___media">
        {data.allContentfulPassions.edges.map(({ node: item }) => {
          return (
            <div key={item.id} className="media___wrapper">
              <Img
                style={{ width: '110px', marginRight: '50px' }}
                fluid={item.logo.fluid}
              />
              <h3>{item.passionName}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyPassions
