import { Link } from 'react-router'
import Navbar from '../components/Navbar.jsx'
import './Pages.css'

const About = () => {
  return (
    <div className="body">
      <Navbar />
      <h1 style={{ color: '#ff00e5' }}>About <span style={{ color: 'white' }}>Me</span></h1>
      <div className="content-container">
        <div className="content-row" id="about-left">
          <img style={{ width: '79%' }} src="https://plus.unsplash.com/premium_photo-1664299749481-ac8dc8b49754?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="lit me" />
          <h3>A picture of me (2022).</h3>
          <p>Texto</p>
        </div>
        <div className="content-row" id="about-right">
          <h3 style={{ color: '#00f0ff' }}>Who am I?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet consectetur turpis, non tempus sem volutpat finibus. Curabitur sed dui eleifend, pellentesque augue et, elementum neque. Pellentesque euismod ante sit amet fringilla commodo. Donec justo nisl, convallis aliquet magna eget, viverra aliquam risus. Sed ac iaculis nisl. Sed at purus varius, dictum mauris vel, egestas nunc. Etiam sit amet mollis velit. Suspendisse id lacus feugiat, mollis risus at, lobortis leo. Quisque vel dui vel neque mollis eleifend et eu urna.</p>
          <p>Cras quis erat lorem. Sed convallis, massa in convallis pharetra, augue sem porttitor risus, nec finibus justo leo eu justo. Mauris nec consequat dolor, vel scelerisque massa. Phasellus imperdiet orci est, vel aliquet velit cursus tincidunt. Aliquam ultrices rhoncus lectus, in laoreet diam convallis nec. Etiam rutrum mi sit amet arcu condimentum ultricies. Nunc vehicula arcu id elit consequat, quis ornare velit iaculis.</p>
        </div>
      </div>
    </div>
  )
}

export default About