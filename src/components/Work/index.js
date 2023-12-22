import './style.scss'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import NetflixWebpImg from '../../assets/images/work/netflix-clone.webp'
import DsAlgoWebpImg from '../../assets/images/work/ds-algo.webp'
import NatoursWebpImg from '../../assets/images/work/natours.webp'
import TrilloWebpImg from '../../assets/images/work/trillo.webp'
import TetrisWebpImg from '../../assets/images/work/tetris-react.webp'

function Work() {
  return (
    <>
      <div className="container work-page">
        <div className="project-style-1">
          <h2>Netflix Clone</h2>
          <div className="card-wrapper">
            <div className="card-image">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://natsudrag9.github.io/netflix-clone/"
              >
                <img src={NetflixWebpImg} alt="netflix-clone" />
              </a>
            </div>
            <div className="card-text">
              <p>
                A fullstack application providing access to entertainment. The
                user authentication and login is implemented using JSW.
              </p>
              <div className="text-element">
                <span className="bold">Frontend: </span>
                <p>React JS</p>
              </div>
              <div className="text-element">
                <span className="bold">Backend: </span>
                <p>Express server</p>
              </div>
              <div className="text-element">
                <span className="bold">Database: </span>
                <p>MongoDB</p>
              </div>
              <div className="links">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://natsudrag9.github.io/netflix-clone/"
                >
                  <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/NatsuDrag9/netflix-clone"
                >
                  <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
                </a>
                {/* To do: Replace with medium article's link */}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/NatsuDrag9/netflix-clone"
                >
                  <FontAwesomeIcon icon={faMedium} color="#4d4d4e" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-style-2">
          <h2>React Projects</h2>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://natsudrag9.github.io/tetris-react/"
                >
                  <img src={TetrisWebpImg} alt="tetris-react" />
                </a>
              </div>
              <div className="card-text">
                <p>Tetris game</p>
                <div className="links">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://natsudrag9.github.io/tetris-react/"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/NatsuDrag9/tetris-react"
                  >
                    <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://rohitimandi.medium.com/tetris-game-using-react-hooks-daf958b90ed0"
                  >
                    <FontAwesomeIcon icon={faMedium} color="#4d4d4e" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://natsudrag9.github.io/ds-algo/"
                >
                  <img src={DsAlgoWebpImg} alt="ds-algo" />
                </a>
              </div>
              <div className="card-text ds-algo">
                <p>Visualizing Data Structures and Algorithms using Typescript + Vite (Work in progress...)</p>
                <div className="links">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://natsudrag9.github.io/ds-algo/"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/NatsuDrag9/ds-algo"
                  >
                    <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
                  </a>
                  {/* To do: Replace with medium article's link */}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://rohitimandi.medium.com/tetris-game-using-react-hooks-daf958b90ed0"
                  >
                    <FontAwesomeIcon icon={faMedium} color="#4d4d4e" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-style-2">
          <h2>Other Projects</h2>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://natsudrag9.github.io/natours/"
                >
                  <img src={NatoursWebpImg} alt="natours" />
                </a>
              </div>
              <div className="card-text">
                <p>Natours - Tours and Travels</p>
                <div className="links">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://natsudrag9.github.io/natours/"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/NatsuDrag9/natours"
                  >
                    <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://natsudrag9.github.io/trillo/"
                >
                  <img src={TrilloWebpImg} alt="trillo" />
                </a>
              </div>
              <div className="card-text trillo">
                <p>Trillo</p>
                <div className="links">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://natsudrag9.github.io/trillo/"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/NatsuDrag9/trillo"
                  >
                    <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Work
