import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGit,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faTerminal, faC } from '@fortawesome/free-solid-svg-icons'
import { faLinux } from '@fortawesome/free-brands-svg-icons'

function About() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I graduated with a master degree from DTU and am passionate about
            software development as they automate and make inanimate objects
            come alive. My passion for technology has driven me to continuously
            expand my knowledge and expertise in software and embedded systems
            thus developing skills in full stack and embedded software.{' '}
          </p>
          <p>
            Keeping a holistic approach to software development, I've practiced
            test-driven development (TDD) and implemented unit tests using
            GitHub Actions to ensure software quality. Whether it's optimizing
            software systems or ensuring top-notch quality, I am committed to
            leveraging my skills and curiosity to drive innovation and
            excellence in the world of technology.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner one">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGithub} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
          </div>
          <div className="cubespinner two">
            <div className="face7">
              <FontAwesomeIcon icon={faDatabase} color="#F06529" />
            </div>
            <div className="face8">
              <FontAwesomeIcon icon={faC} color="#28A4D9" />
            </div>
            <div className="face9">
              <FontAwesomeIcon icon={faC} color="#5ED4F4" />
              <span style={{ color: '#5ED4F4' }}>++</span>
            </div>
            <div className="face10">
              <FontAwesomeIcon icon={faTerminal} />
            </div>
            <div className="face11">
              <FontAwesomeIcon icon={faLinux} color="#FCAF3E" />
            </div>
            <div className="face12">
              <FontAwesomeIcon icon={faGit} color="#EFD81D" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
