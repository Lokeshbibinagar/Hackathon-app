import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

function Register() {
    return (
        <div>
              <div className="register">
            <img className="register_image" src="https://www.pixelstalk.net/wp-content/uploads/images1/Cafe-Wallpapers-HD-Free-download.jpg"></img>
            </div>
            <div className="signUp">
                <h1 className="register_signIn">Sign Up</h1>
                <input className ="register_username" type="email" placeholder="Username" ></input>
                <input className="register_password" type="password" placeholder="Password"></input>
                <input className="re-register_password" type="password" placeholder="Re-enter Password"></input>
                <button className="register_signUpBtn" >Sign Up</button>
                <p className="register_signUp_para">Have an account?</p>
                <Link to="/login">
                <p className="signUp_signIn">Sign In</p> 
                </Link>
                </div>
        </div>
    )
}

export default Register
