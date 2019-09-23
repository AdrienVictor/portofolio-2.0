import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Card from './Card'

import './styles.css'

function Projects() {
  const data = useStaticQuery(graphql`
    {
      allContentfulProjectsShowcase(sort: { fields: numberOrder, order: ASC }) {
        edges {
          node {
            id
            title
            date
            description
            linkCode
            linkDemo
            image {
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
            content {
              id
              json
            }
          }
        }
      }
    }
  `)

  const Text = ({ children }) => <p className="card___Text">{children}</p>
  const List = ({ children }) => <li className="card___List">{children}</li>
  const Bold = ({ children }) => <span className="card___Bold">{children}</span>
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.LIST_ITEM]: (node, children) => <List>{children}</List>,
    },
    renderMark: { [MARKS.BOLD]: text => <Bold>{text}</Bold> },
  }

  return (
    <section id="projects" className="section___Projects">
      <h1
        style={{ textAlign: 'center', paddingTop: '5vh', marginBottom: '5vh' }}
      >
        My Projects
      </h1>
      <div className="projects___Container">
        {data.allContentfulProjectsShowcase.edges.map(({ node: item }) => {
          return (
            <div>
              <Card
                key={item.id}
                title={item.title}
                date={item.date}
                image={item.image.fluid}
                description={item.description}
                linkCode={item.linkCode}
                linkDemo={item.linkDemo}
                textContent={documentToReactComponents(
                  item.content.json,
                  options
                )}
              ></Card>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
