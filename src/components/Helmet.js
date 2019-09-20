import React from "react"
import Helmet from "react-helmet"

const HelmetComponent = () => {
  return (
    <Helmet>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Bangers|Cairo&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  )
}
export default HelmetComponent
