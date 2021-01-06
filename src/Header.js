import React from 'react'
import './Header.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Header() {
    return (
        <div>
            <div className="header">

           <div className="header_search">
                <input className="search" type="text" placeHolder="Search"></input>
                <SearchOutlinedIcon className="search_logo"></SearchOutlinedIcon>
                <div className="header_right">
                <div className="header_signIn">
                    <span className="signIn">Sign In</span>
                </div>
                <div className="header_menu">
                    <span className="menu">Menu</span>
                </div>
                <div className="header_profile">
                    <span className="profile">My ID</span>
                </div>
            </div>    
            </div>
        
            </div>
            
            
        </div>
    )
}

export default Header
