import React from 'react'

import './styles.css'

function Contact() {
  return (
    <section className="section___Contact">
      <h1
        style={{ textAlign: 'center', paddingTop: '15vh', marginBottom: '0vh' }}
      >
        Contact
      </h1>
      <div className="pow___Email">
        <h3
          style={{
            paddingTop: '30%',
            textAlign: 'center',
            paddingRight: '10%',
          }}
        >
          Email me!
        </h3>
      </div>
      <div className="pow___Follow">
        <h3
          style={{
            paddingTop: '30%',
            textAlign: 'center',
            paddingRight: '10%',
            fontSize: '2.5rem',
          }}
        >
          Follow me!
        </h3>
      </div>
      <div className="pow___Find">
        <h3
          style={{
            paddingTop: '30%',
            textAlign: 'center',
            paddingRight: '10%',
            fontSize: '3rem',
          }}
        >
          Find me!
        </h3>
      </div>
    </section>
  )
}

export default Contact
