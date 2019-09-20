import React from 'react'
import './styles.css'
import Home from './Home'
import Helmet from './Helmet'
import NavDrawer from './NavDrawer'
import AboutMe from './About Me'
import Skills from './Skills'

export default function App() {
  return (
    <div>
      <Helmet></Helmet>
      <NavDrawer></NavDrawer>
      <Home></Home>
      <AboutMe></AboutMe>
      <Skills></Skills>
    </div>
  )
}
