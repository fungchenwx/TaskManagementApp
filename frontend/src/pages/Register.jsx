import Form from "../components/Form"

function Register() {
    return (
        <div className="login-container">
            <div className="login-header">
                <h2>Task Managements <br></br> </h2>
                <p>Transform your productivity with task managements</p>
            </div>
            <Form route="/api/user/register/" method="register" />
        </div>
    );
}

export default Register