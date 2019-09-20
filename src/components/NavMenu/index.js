import React from "react"

import "./styles.css"

function NavMenu({ handleClick }) {
  return (
    // <div className="nav">
    <div className="burger___Menu" onClick={handleClick}>
      <h3>Menu</h3>
      <div className="menu___Switch">
        <div className="switch___One"></div>
        <div className="switch___Two"></div>
        <div className="switch___Three"></div>
      </div>
    </div>
    // </div>
  )
}

export default NavMenu
