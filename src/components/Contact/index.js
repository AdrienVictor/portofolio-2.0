import React from 'react'

import './styles.css'

function Contact() {
  return (
    <section id="contact" className="section___Contact">
      <h1
        style={{ textAlign: 'center', paddingTop: '15vh', marginBottom: '0vh' }}
      >
        Contact
      </h1>
      <form
        className="contact___Form"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <p>
          <input
            type="hidden"
            // type="text"
            name="subject"
            placeholder="subject"
            required
          />
        </p>
        <p>
          <input
            type="hidden"
            // type="text"
            name="name"
            placeholder="name"
            required
          />
        </p>
        <p>
          <input
            type="hidden"
            // type="email"
            name="email"
            placeholder="email"
            required
          />
        </p>

        <p>
          <textarea name="message" placeholder="message" required></textarea>
        </p>
        <p style={{ textAlign: 'center' }}>
          <button type="submit">Send</button>
        </p>
      </form>
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
