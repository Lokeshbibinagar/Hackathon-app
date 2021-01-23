import React, { useState }  from 'react'
import './UserDetails.css'
import { auth, db } from './firebase';
import { Link, useHistory } from 'react-router-dom'

function UserDetails() {

   function onsubmit() {

    var _name = document.getElementById("full-name").value;
    var _org = document.getElementById("org-name").value;
    var _empId = document.getElementById("emp-id").value;
    var _mobile = document.getElementById("phone-no").value;
    var _email = document.getElementById("email-id").value;

    try{
    var userId = auth.currentUser.uid;
    
    db.ref("Users/" + userId + "/userDetails").set({
        name: _name,
        org: _org,
        empid: _empId,
        mobile: _mobile,
        email: _email

    });

    
   
    window.alert("Successfully Updated your details");

    }catch( error){
        window.alert("Please Login/Register before getting your ID.");
    }     
   }

    return (
        <div>
            <div className="userBackground">
                <img className="backgroundImg" src="https://www.pixelstalk.net/wp-content/uploads/images2/Widescreen_Cafe_wallpaper.jpg" ></img>
            </div>
            <div className="userform">
                <input className="fullname" id="full-name" type="text" placeholder="Full Name"></input> 
                <input className="orgname"  id = "org-name" type="text" placeholder="Organization name" ></input>
                <input className="empid"  id="emp-id" type="text" placeholder="Employee ID no"></input>
                <input className="mobile" id="phone-no" type="text" placeholder="Mobile no." ></input>
                <input className="email" id="email-id" type="text" placeholder="email"></input>
                <button className="submit" onClick={onsubmit}>Submit</button>
            </div>
        </div>
    
    )
        
}


export default UserDetails
