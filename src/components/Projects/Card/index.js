import React from 'react'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import './styles.css'

const useStyles = makeStyles(theme => ({
  card: {
    // maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    minHeight: 480,
    width: 450,
    margin: 30,
    borderRadius: 0,
    backgroundColor: 'var(--violet)',
    border: '2px solid #000',
    boxShadow: '10px 10px 0 0 #000',
    transition: '.4s ease-in-out',
    //   -webkit-box-shadow: "6px 6px 0 0 #000",
    '&:hover': { transform: 'scale(1.1)' },
    ['@media only screen and (max-width: 900px)']: {
      width: 300,
      minHeight: 405,
      '&:hover': { transform: 'scale(1)' },
    },
  },
  header: {
    padding: '16px',
  },
  expand: {
    color: 'var(--yellow)',
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}))

export default function RecipeReviewCard({
  title,
  date,
  image,
  imageTitle,
  description,
  textContent,
  linkCode,
  linkDemo,
}) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  function handleExpandClick(e) {
    setExpanded(!expanded)
  }

  return (
    <Card id={title} className={classes.card}>
      <div className={classes.header}>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
      <Img fluid={image} title={imageTitle} />
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardActions style={{ marginTop: 'auto' }} disableSpacing>
        <a href={linkCode} target="_blank" rel="noopener noreferrer">
          <i class="fas fa-code"></i>
        </a>
        <a href={linkDemo} target="_blank" rel="noopener noreferrer">
          <i class="fas fa-external-link-alt"></i>
        </a>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className="text___Content">{textContent}</div>
      </Collapse>
    </Card>
  )
}
