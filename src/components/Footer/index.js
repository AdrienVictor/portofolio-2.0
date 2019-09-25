import React from 'react'

import './styles.css'

function Footer() {
  return (
    <section className="section___Footer">
      <div className="footer___Social">
        <a
          href="https://www.instagram.com/adrienvictorfernandez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com/AdrienViktor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/adrien-victor-fernandez/"
          target="-blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/AdrienVictor"
          target="-blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <p>made with 💻 - Adrien Fernandez - 2019©</p>
    </section>
  )
}

export default Footer
