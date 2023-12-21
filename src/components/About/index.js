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
          <div className="text-wrapper">
            <p>
              I hold a master degree in Sustainable Energy from DTU but my
              passion for software has driven me to continuously expand my
              knowledge and expertise in software engineering and full stack
              development.
            </p>
            <p>
              A nerdy researcher at heart, equipped wtih practical software
              skills who enjoys making inanimate objects come alive.
            </p>
          </div>
          <p className="skill-wrapper">
            <div className="skill">
              <h4>Experience:</h4>
              <small>Frontend developer at Savart and Allincall</small>
              <small>
                <span className="bold">Framework: </span>React + Typescript +
                vite
              </small>
              <small>
                <span className="bold">Key Learnings: </span>Engineer software
                products catering to both, customer-centric and for company’s
                internal usage.
              </small>
            </div>
            <div className="skill">
              <h4>Tech stack: </h4>
              <small>
                <span className="bold">Languages: </span> C/C++, Python
              </small>
              <small>
                <span className="bold">Frontend: </span> HTML, CSS, JS, React
                JS, Typescript, Node, Vite, State management libraries
              </small>
              <small>
                <span className="bold">Backend: </span> Express server, RDBMS -
                MySQL
              </small>
            </div>
            <div className="skill">
              <h4>Other Skills and Tools: </h4>
              <small>
                Linux and shell scripting, TDD using JEST and Vitest,
                Documentaion, Object-oriented programming, Git and Github,
                VSCode, CI
              </small>
            </div>
          </p>
        </div>
        <div className="stage-cube-container">
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
