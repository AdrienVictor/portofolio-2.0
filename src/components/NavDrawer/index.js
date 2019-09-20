import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import NavMenu from '../NavMenu'

const useStyles = makeStyles({
  list: {
    width: 300,
    backgroundColor: 'var(--violet)',
    height: '100vh',
  },
  listItem: {
    paddingTop: '10vh',
    paddingLeft: '1vw',
  },
})

export default function NavDrawer() {
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
  console.log(data.allContentfulNavBar.edges)

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
      <div
        style={{
          width: '30px',
          fontSize: '3rem',
          fontFamily: 'Bangers, cursive',
          marginLeft: 'auto',
        }}
      >
        x
      </div>
      <List className={classes.listItem}>
        {data.allContentfulNavBar.edges.map(({ node: item }) => (
          <ListItem button key={item.id}>
            <h3>{item.title}</h3>
            {/* <ListItemText primary={item.title} /> */}
          </ListItem>
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
