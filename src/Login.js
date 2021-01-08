import React from 'react'
import './Login.css'

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
                </div>

        </div>
    )
}

export default Login
