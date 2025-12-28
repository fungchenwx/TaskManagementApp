import { useState, useEffect } from "react"
import AuthPage from "../components/AuthPage"
import NavBar from "../components/NavBar"

function Register() {
    return (
        <div className="login-container">
            <NavBar/>
            <div className="login-header">
                <h2>Task Managements <br></br> </h2>
                <p>Transform your productivity with task managements</p>
            </div>
            <AuthPage/>
        </div>
    );
}

export default Register