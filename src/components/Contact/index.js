import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const email = 'rohitimandi9@zoho.com'

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  //   const refForm = useRef()
  //   const sendEmail = (e) => {
  //     e.preventDefault()
  //     emailjs.sendForm(
  //       'portfolio_contact_form',
  //       'contact_form_portfolio',
  //       refForm.current,
  //       'IGSXwpZYGD2qmHHsS'
  //     )
  //     .then(
  //         () => {
  //             alert('Message sent successfully!');
  //             window.location.reload(false);
  //         },
  //         () => {
  //             alert('Failed to send the message, please try again!');
  //         }
  //     )
  //   }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="body">
          <p>
            I am looking for full-time opportunities in Denmark and other
            European countries and, am open to relocating. Feel free to send me
            a mail at {email}{' '}
            <span className="email-wrapper">
              <a href={`mailto:${email}`}>
                <FontAwesomeIcon icon={faEnvelope} color="#5ED4F4" />
              </a>
            </span>
          </p>
          </div>

          {/* <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email id"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div> */}
        </div>
        <div className="info-map">
            Rohit Imandi,
            <br />
            Copenhagen
            <br />
            Denmark
        </div>
        <div className="map-wrap">
            <MapContainer center={[55.6761, 12.5683]} zoom={13} >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[55.6761, 12.5683]}></Marker>
            </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
