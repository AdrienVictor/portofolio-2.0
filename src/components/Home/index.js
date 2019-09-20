import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import SplitText from "react-pose-text"

import "./styles.css"

export default () => {
  const data = useStaticQuery(graphql`
    {
      contentfulHomeBanner {
        id
        title
        subtitle
        introduction
      }
    }
  `)

  useEffect(() => {
    // const script = document.createElement("script")
    // script.src =
    //   "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"
    // script.async = true
    // document.body.appendChild(script)
    // const textWrapper = document.querySelector(" .home___Hero")
    // textWrapper.innerHTML = textWrapper.textContent.replace(
    //   /\S/g,
    //   "<h1 class='letter'>$&</h1>"
    // )
    // anime
    //   .timeline({ loop: true })
    //   .add({
    //     targets: ".ml6 .letter",
    //     translateY: ["1.1em", 0],
    //     translateZ: 0,
    //     duration: 750,
    //     delay: (el, i) => 50 * i,
    //   })
    //   .add({
    //     targets: ".ml6",
    //     opacity: 0,
    //     duration: 1000,
    //     easing: "easeOutExpo",
    //     delay: 1000,
    //   })
  })

  const charPoses = {
    exit: { opacity: 0, y: 40 },
    enter: {
      opacity: 1,
      y: 0,
      transition: ({ charInWordIndex }) => ({
        type: "spring",
        delay: charInWordIndex * 150,
        stiffiness: 300 + charInWordIndex * 100,
        damping: 50 - charInWordIndex * 1,
      }),
    },
  }

  const { title, subtitle, introduction, id } = data.contentfulHomeBanner

  return (
    <>
      <section className="section___Home">
        <h1 className="home___Hero">
          <SplitText
            className="text___Home"
            pose="enter"
            initialPose="exit"
            charPoses={charPoses}
          >
            {title}
          </SplitText>
        </h1>
        <h1 className="home___Hero">
          <SplitText
            className="text___Home"
            pose="enter"
            initialPose="exit"
            charPoses={charPoses}
          >
            {subtitle}
          </SplitText>
        </h1>
        <h1 className="home___Hero" id={id}>
          <SplitText
            className="text___Home"
            pose="enter"
            initialPose="exit"
            charPoses={charPoses}
          >
            {introduction}
          </SplitText>
        </h1>
      </section>
    </>
  )
}
