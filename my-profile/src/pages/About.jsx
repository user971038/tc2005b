import { Link } from 'react-router'
import Navbar from '../components/Navbar.jsx'

const About = () => {
  return (
    <div>
      <Navbar />
      <h1>About Me</h1>  
      <p><Link to="/">Go Back</Link></p>
    </div>
  )
}

export default About