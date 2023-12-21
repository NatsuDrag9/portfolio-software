import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['R', 'o', 'h', 'i', 't', ' ', 'I', 'm', 'a', 'n', 'd', 'i']
  // const titleArray = ['P', 'a', 's', 's', 'i', 'o', 'n', 'a', 't', 'e', ' ', 'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D ', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);
  }, [])

  return (
    <>
      <div className="container home-page">
      <div className="text-zone">
        <h1>
          {/* <span className="letterClass">H</span> */}
          {/* Adding a delay of 1.2s along with the className for all letters */}
          <span className={`${letterClass} _12`}>H</span>
          <span className={`${letterClass} _13`}>e</span>
          <span className={`${letterClass} _14`}>l</span>
          <span className={`${letterClass} _15`}>l</span>
          <span className={`${letterClass} _16`}>o</span>
          <span className={`${letterClass} _17`}>,</span>
          <br />
          <span className={`${letterClass} _18`}>I</span>
          {/* <span className={`${letterClass} _12`}>'</span> */}
          <span className={`${letterClass} _19`}>'m</span>{' '}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={20}
          />
          <br />
          {/* <AnimatedLetters
            letterClass={letterClass}
            strArray={titleArray}
            idx={15 + nameArray.length}
          />
          <br /> */}
        </h1>
        <br />
        <h2>
          Full Stack Developer | Software developer
        </h2>
        {/* <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link> */}
      </div>
      <Logo />
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home
