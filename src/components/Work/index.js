import './style.scss'
import Loader from 'react-loaders'

function Work() {
  return (
    <>
      <div className="container work-page">
        <div className="project">
          <h3>Netflix Clone</h3>
          <div className="card-wrapper">
            <div className="text-wrapper"></div>
            <div className="image-card"></div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Work
