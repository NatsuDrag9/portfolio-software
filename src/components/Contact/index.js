import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const email = 'rohitimandi9@zoho.com'
  const markerRef = useRef()
  const timeoutRef = useRef()

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      // Clear the timeout when the component unmounts
      clearTimeout(timeoutRef.current)
    }
  }, [timeoutRef.current])

  const handleMouseOver = () => {
    if (markerRef.current) {
      markerRef.current.openPopup()
    }
  }

  const handleMouseOut = () => {
    if (markerRef.current) {
      markerRef.current.closePopup()
    }
  }

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
              Feel free to send me a mail at {email} or connect with me on{''}
            </p>
            <div className="icons">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/rohit-imandi/"
              >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/NatsuDrag9"
              >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://rohitimandi.medium.com/"
              >
                <FontAwesomeIcon icon={faMedium} color="#4d4d4e" />
              </a>
            </div>
          </div>
        </div>
        <div className="map-wrap">
          <MapContainer center={[55.6761, 12.5683]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
              ref={markerRef}
              position={[55.6761, 12.5683]}
              eventHandlers={{
                mouseover: () => handleMouseOver(),
                mouseout: () => handleMouseOut(),
              }}
            >
              <Popup>
                Copenhagen
                <br />
                DK
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
