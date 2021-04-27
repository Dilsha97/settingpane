import React from 'react'
import profilepic from './img/dummy.jpg'
import Nav from './edit'

export default function chngPwd(){
    return(
        <div className="pageBody">
            <Nav />
            <div className="editPage">
                <form id="editForm">
                    <table className="editTable">
                        <tr>
                            <td><img src={profilepic} className="profilePic" alt="dummy" /></td>
                            <td><h2>user_name_id</h2><button className="edittxt">Change Profile Photo</button></td>
                        </tr>
                        <tr>
                            <td><h4>Old Password</h4></td>
                            <td>
                                <input type="password"/>
                            </td>
                        </tr>
                        <tr>
                            <td><h4>New Password</h4></td>
                            <td>
                                <input type="password"/>
                            </td>
                        </tr>
                        <tr>
                            <td><h4>Confirm New Password</h4></td>
                            <td>
                                <input type="password"/>
                            </td>
                        </tr>
                        
                        <tr>
                            <td></td>
                            <td className="submitPanle">
                                <button className="submit">Submit</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
}