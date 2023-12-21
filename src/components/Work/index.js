import './style.scss'
import Loader from 'react-loaders'
import NetflixWebpImg from '../../assets/images/work/netflix-clone.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

function Work() {
  return (
    <>
      <div className="container work-page">
        <div className="project">
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
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Work
