import React, { useEffect, useState } from 'react'

import './styles.css'

function NavMenu({ handleClick }) {
  const [position, setPosition] = useState(1)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        setPosition(window.pageYOffset / window.innerHeight)
      })
    }
  }, [position])

  return (
    // <div className="nav">
    <div
      className={position > 1 ? 'burger___Menu scrolled' : 'burger___Menu'}
      onClick={handleClick}
    >
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
