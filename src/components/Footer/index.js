import React from 'react'

import './styles.css'

function Footer() {
  return (
    <section className="section___Footer">
      <div className="footer___Social">
        <a href target="_blank" rel="noopener noreferrer">
          <i class="fab fa-instagram"></i>
        </a>
        <a href target="_blank" rel="noopener noreferrer">
          <i class="fab fa-twitter"></i>
        </a>
        <a href target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <p>made with 💻 - Adrien Fernandez - 2019©</p>
    </section>
  )
}

export default Footer
