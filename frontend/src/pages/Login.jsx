import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

function Login() {
    return (
        <div className="landing-container">
            <nav className="navbar">
                <div className="nav-left">
                    <h2 className="nav-logo">Task Managements</h2>
                </div>

                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><Link to="/register">Login</Link></li>
                </ul>
            </nav>
            <header className="landing-header">
                <h1 className="landing-title">Task Managements</h1>
                <p className="landing-subtitle">
                Stay organized, focused, and productive — manage your tasks
                anywhere, anytime.
                </p>

                <Link to="/register" className="landing-button">
                Get Started
                </Link>
            </header>

            <section className="landing-features">
                <h2>Why Task Managements?</h2>
                <div className="features-grid">
                <div className="feature-card">
                    <h3>✅ Simple Interface</h3>
                    <p>Easily add, edit, and track your daily tasks.</p>
                </div>
                <div className="feature-card">
                    <h3>🔒 Secure Authentication</h3>
                    <p>Protect your account with secure JWT-based login.</p>
                </div>
                <div className="feature-card">
                    <h3>⚡ Staying Organized</h3>
                    <p>Write down tasks, ideas, and stay organized!</p>
                </div>
                </div>
            </section>

            <footer className="landing-footer">
                <p>© {new Date().getFullYear()} Task Managements — Built by Wen Xuan Fung Chen</p>
            </footer>
        </div>
    );
}

export default Login;
