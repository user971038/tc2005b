import './Navbar.css'
import { Link } from 'react-router'

const Navbar = ({children}) => {
    return(
        <>
            <div className="container-navbar">
                <div className="links">
                    <p><Link className="nav-link" to="/">Home</Link></p>
                    <p><Link className="nav-link" to="/About">About Me</Link></p>
                    <p><Link className="nav-link" to="/Projects">Projects</Link></p>
                    <p><Link className="nav-link" to="/Contact">Contact Me</Link></p>
                </div>
            </div>
            {children}
        </>
    );
};

export default Navbar;