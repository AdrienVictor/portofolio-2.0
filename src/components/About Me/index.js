import React from 'react'
import HelloWorld from './hello-world'
import MyPassions from './my-passions'

import './styles.css'

export default function AboutMe() {
  return (
    <section id="about-me" className="section___AboutMe">
      <HelloWorld></HelloWorld>
      <MyPassions
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease"
      ></MyPassions>
    </section>
  )
}
