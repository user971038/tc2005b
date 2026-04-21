import { Link } from 'react-router'
import Navbar from '../components/Navbar.jsx'
import './Pages.css'

const Projects = () => {
  return (
    <div className="body">
      <Navbar />
      <h1 style={{ color: '#00f0ff' }}>Projects</h1>
      <p className="description-text">A peek into some of the stuff I've done.</p>
      <div className="content-container" id="container-projects">
        <div className="content-projects">
          <h3>Graphic Design Portfolio</h3>
          <p className="date">May 2024</p>
          <p><span style={{  fontWeight: 'bold' }}>Description: </span>
          Development of several web portfolios for different graphic designers.</p>
          <p><span style={{  fontWeight: 'bold' }}>Abilities & Tools: </span>
          HTML5, CSS, WordPress, Hostinger.</p>
        </div>

        <div className="content-projects">
          <h3>Snakes & Ladders Game</h3>
          <p className="date">April 2025</p>
          <p><span style={{  fontWeight: 'bold' }}>Description: </span>
          Creation, testing and publishing of a text-based game of Snakes & Ladders.</p>
          <p><span style={{  fontWeight: 'bold' }}>Abilities & Tools: </span>
          C++, VSCode, GitHub.</p>
        </div>

        <div className="content-projects">
          <h3>Chatify</h3>
          <p className="date">April 2026</p>
          <p><span style={{  fontWeight: 'bold' }}>Description: </span>
          Design and testing of a web-based texting app. Currently still in development.</p>
          <p><span style={{  fontWeight: 'bold' }}>Abilities & Tools: </span>
          HTML, CSS, React, Railway, Postgress.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects