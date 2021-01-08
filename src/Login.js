import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>

            <div className="login">
            <img className="login_image" src="https://www.pixelstalk.net/wp-content/uploads/images1/Cafe-Wallpapers-HD-Free-download.jpg"></img>
            </div>
            <div className="signIn">
                <h1 className="login_signIn">Sign In</h1>
                <input className ="username" type="email" placeholder="Username" ></input>
                <input className="password" type="password" placeholder="Password"></input>
                <button className="signInBtn" >Sign In</button>
                <p className="signIn_para"> Do not have an account?</p>
                <Link to="/">
                <p className="signIn_signUp">Sign Up</p> 
                </Link>
                </div>

        </div>
    )
}

export default Login
