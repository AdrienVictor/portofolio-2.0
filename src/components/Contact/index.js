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
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input
          type="hidden"
          name="bot-field"
          data-sal="slide-down"
          data-sal-delay="400"
          date-sal-duration="100"
          data-sal-easing="ease-out"
        />
        <input
          type="hidden"
          name="form-name"
          value="contact"
          data-sal="slide-down"
          data-sal-delay="400"
          date-sal-duration="100"
          data-sal-easing="ease-out"
        />
        <p>
          <input
            type="text"
            name="subject"
            placeholder="subject"
            required
            data-sal="slide-down"
            data-sal-delay="400"
            date-sal-duration="100"
            data-sal-easing="ease-out"
          />
        </p>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            required
            data-sal="slide-down"
            data-sal-delay="400"
            date-sal-duration="100"
            data-sal-easing="ease-out"
          />
        </p>
        <p>
          <input
            type="email"
            name="email"
            placeholder="email"
            required
            data-sal="slide-down"
            data-sal-delay="400"
            date-sal-duration="100"
            data-sal-easing="ease-out"
          />
        </p>

        <p>
          <textarea
            name="message"
            placeholder="message"
            required
            data-sal="slide-down"
            data-sal-delay="400"
            date-sal-duration="100"
            data-sal-easing="ease-out"
          ></textarea>
        </p>
        <p style={{ textAlign: 'center' }}>
          <button
            type="submit"
            data-sal="slide-down"
            data-sal-delay="400"
            date-sal-duration="100"
            data-sal-easing="ease-out"
          >
            Send
          </button>
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
