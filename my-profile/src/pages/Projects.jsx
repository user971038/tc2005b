import { Link } from 'react-router'
import Navbar from '../components/Navbar.jsx'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <h1>Projects</h1>  
      <p><Link to="/">Go Back</Link></p>
    </div>
  )
}

export default Projects