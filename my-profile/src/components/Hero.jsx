import './Hero.css'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <div>
        <div className="main-text-container">
            <div className="blur-background"></div>
            <p className="main-text">Welcome. {/*<span className="secondary-text">Digital Artifacts</span>*/}</p>
        </div>
        <div className="description-container">
            <p className="description-text" id="description">Computer Science Student –– Videogame Enthusiast –– Aspiring Web Developer</p>
            <p className="description-text" id="welcome">Welcome to my portfolio.</p>
            <div className="btn-container">
                <Link className="btn" to="https://github.com/user971038">GitHub</Link>
                <Link className="btn" to="/About">About Me</Link>
            </div>
        </div>
    </div>
  );
};

export default Hero