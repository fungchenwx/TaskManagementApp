import { useState } from "react";
import Form from "../components/Form";

function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => setIsLogin(!isLogin);

    return (
        <div className="auth-container">
            <div className="auth-box">
                {isLogin ? <Form route="/api/token/" method="login" /> : <Form route="/api/user/register/" method="register" />}
            </div>
            <p className="register-text">
                {isLogin ? (
                    <> Don't have an account? 
                    <button className="toggle-button" onClick={toggleForm}>Register</button>
                    </>
                    ) : (
                    <> Already have an account?
                    <button className="toggle-button" onClick={toggleForm}>Login</button>
                    </>
                )}
            </p>
        </div>
    )
}

export default AuthPage;