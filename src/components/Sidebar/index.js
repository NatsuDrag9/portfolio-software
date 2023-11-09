import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoD1 from '../../assets/images/logo-d1.svg'
// import LogoSubtitle from '../../assets/images/logo_sub_2.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faMedium} from '@fortawesome/free-brands-svg-icons';

function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoD1} alt="logo" className="logo" />
        {/* <img className="sub-logo" src={LogoSubtitle} alt="logo-subtitle" /> */}
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/rohit-imandi/'>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://github.com/NatsuDrag9'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://rohitimandi.medium.com/'>
                <FontAwesomeIcon icon={faMedium} color="#4d4d4e" />
            </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
