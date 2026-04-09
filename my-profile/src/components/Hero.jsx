import './Hero.css'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <div>
        <div className="main-text-container">
            <p className="main-text">
                Welcome. {/*<span className="secondary-text">Digital Artifacts</span>*/}
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div className="btn-container">
            <button className="btn">
                <Link to="/Projects">View Projects</Link>
            </button>
            <button className="btn">
                <Link to="/About">About Me</Link>
            </button>
        </div>
    </div>
  );
};

export default Hero