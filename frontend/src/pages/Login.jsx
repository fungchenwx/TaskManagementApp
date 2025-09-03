import Form from "../components/Form"

function Login() {
    return (
        <div className="login-container">
            <div className="login-header">
                <h2>Task Managements <br></br> </h2>
                <p>Transform your productivity with task managements</p>
            </div>
            <Form route="/api/token/" method="login" />
        </div>
    );
}

export default Login