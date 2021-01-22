import React from 'react'
import './UserDetails.css'

function UserDetails() {
    return (
        <div>
            <div className="userBackground">
                <img className="backgroundImg" src="https://www.pixelstalk.net/wp-content/uploads/images2/Widescreen_Cafe_wallpaper.jpg" ></img>
            </div>
            <div className="userform">
                <input className="fullname" type="text" placeholder="Full Name"></input> 
                <input className="orgname" type="text" placeholder="Organization name" ></input>
                <input className="empid" type="text" placeholder="Employee ID no"></input>
                <input className="mobile" type="text" placeholder="Mobile no." ></input>
                <input className="email" type="text" placeholder="email"></input>
            </div>
        </div>
    )
}

export default UserDetails
