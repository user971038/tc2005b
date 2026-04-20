import { Link } from 'react-router'
import Navbar from '../components/Navbar.jsx'
import './Pages.css'

const Projects = () => {
  return (
    <div className="body">
      <Navbar />
      <h1 style={{ color: '#00f0ff' }}>Projects</h1>
      <p className="description-text">A peek to some of the stuff I've done.</p>
      <div className="content-container">

      </div>
    </div>
  )
}

export default Projects