import Form from "../components/Form"

function Login() {
    return (
        <div className="login-container">
            <Form route="/api/token/" method="login" />
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
}

export default Login