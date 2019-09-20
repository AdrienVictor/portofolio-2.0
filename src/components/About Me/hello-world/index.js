import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import './styles.css'

function AboutMe() {
  const data = useStaticQuery(graphql`
    {
      contentfulSectionEntry {
        id
        subtitle
        content {
          json
          id
        }
        content2 {
          json
          id
        }
      }
    }
  `)

  const Text = ({ children }) => <p className="text">{children}</p>
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  }
  documentToReactComponents(data.contentfulSectionEntry.content.json, options)

  return (
    <div style={{ width: '100%', marginTop: '10%' }}>
      <h2 style={{ textAlign: 'center' }}>
        {data.contentfulSectionEntry.subtitle}
      </h2>
      <div className="entry___text">
        {documentToReactComponents(
          data.contentfulSectionEntry.content.json,
          options
        )}
      </div>
      <div className="entry___text">
        {documentToReactComponents(
          data.contentfulSectionEntry.content2.json,
          options
        )}
      </div>
    </div>
  )
}

export default AboutMe
