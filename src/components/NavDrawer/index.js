import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import './styles.css'
import NavMenu from '../NavMenu'

const useStyles = makeStyles({
  list: {
    width: 300,
    backgroundColor: 'var(--violet)',
    minHeight: '100vh',
  },
  listItem: {
    paddingTop: '10vh',
    paddingLeft: '1vw',
  },
})

export default function NavDrawer() {
  if (typeof window !== 'undefined') {
    require('smooth-scroll')('a[href*="#"]')
  }
  const data = useStaticQuery(graphql`
    {
      allContentfulNavBar(sort: { fields: orderNumber, order: ASC }) {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
  `)

  const classes = useStyles()
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List className={classes.listItem}>
        {data.allContentfulNavBar.edges.map(({ node: item }) => (
          <Link key={item.id} to={`#${item.slug}`}>
            <ListItem button>
              <h3 className="nav___Link">{item.title}</h3>
              {/* <ListItemText primary={item.title} /> */}
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <NavMenu handleClick={toggleDrawer('left', true)}></NavMenu>
      {/* <div>Open Left</div> */}

      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  )
}
