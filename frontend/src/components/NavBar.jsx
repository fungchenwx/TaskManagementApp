import { Link } from "react-router-dom"
import "../styles/LandingPage.css"
import { useNavigate } from "react-router-dom"
import { ACCESS_TOKEN } from "../constants"

function NavBar({ onLogout }) {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem(ACCESS_TOKEN);

    return (
        <nav className="navbar">
            <h2 className="nav-logo">
                <img src="/logo.png" alt="Logo" className="logo-image" />
                <Link to="/login" className="nav-logo-link">Task Managements</Link>
            </h2>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Contact</a></li>
                {isLoggedIn ? (
                    <li><Link to="/">Home</Link></li>
                ) : (
                    <li><Link to="/register">Login</Link></li>
                )}
            </ul>
        </nav>
    )
}

export default NavBar