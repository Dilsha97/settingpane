import React from 'react'
import {Link} from 'react-router-dom'

export default function edit(){
    return(
        <div className="sideBar">
            <ul>
                <Link to='/edit-profile'>
                    <li>Edit Profile</li>
                </Link>
                <Link to='/change-password'>
                    <li>Change Password</li>
                </Link>
            </ul>
        </div>
    );
}