import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';

function Login() {

    const login_history = useHistory();

    const [login_email, setLoginEmail] = useState('');
    const [login_password, setLoginPassword] = useState('');

    const signIn = e => { 
        e.preventDefault();

        auth.signInWithEmailAndPassword(login_email,login_password).then(auth => {
            login_history.push('/');
        }).catch( error => alert(error.message))

        
    }

    return (
        <div>

            <div className="login">
            <img className="login_image" src="https://www.pixelstalk.net/wp-content/uploads/images1/Cafe-Wallpapers-HD-Free-download.jpg"></img>
            </div>
            <div className="signIn">
                <h1 className="login_signIn" id="signIn">Sign In</h1>
                <input className ="username" type="email" placeholder="Username" value={login_email} onChange={e => setLoginEmail(e.target.value)}></input>
                <input className="password" type="password" placeholder="Password" value={login_password} onChange={ e => setLoginPassword(e.target.value)}></input>
                <button className="signInBtn" onClick={signIn} >Sign In</button>
                <p className="signIn_para"> Don't have an account?</p>
                <Link to="/register">
                <p className="signIn_signUp">Sign Up</p> 
                </Link>
                </div>

        </div>
    )
}

export default Login
