import React, { useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Register.css'
import { auth } from './firebase';

function Register() {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signUp = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            console.log(auth);

            if(auth)
            {
                history.push("/login");
            }

        }).catch( error => alert(error.message))

        
    }

    return (
        <div>
              <div className="register">
            <img className="register_image" src="https://www.pixelstalk.net/wp-content/uploads/images1/Cafe-Wallpapers-HD-Free-download.jpg"></img>
            </div>
            <div className="signUp">
                <h1 className="register_signIn">Sign Up</h1>
                <input className ="register_username" type="email" placeholder="Username" value={email} onChange={e => setEmail(e.target.value)} ></input>
                <input className="register_password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                <input className="re-register_password" type="password" placeholder="Re-enter Password"></input>
                <button className="register_signUpBtn" onClick={signUp} >Sign Up</button>
                <p className="register_signUp_para">Have an account?</p>
                <Link to="/login">
                <p className="signUp_signIn">Sign In</p> 
                </Link>
                </div>
        </div>
    )
}

export default Register
