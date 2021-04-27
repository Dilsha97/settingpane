import React from 'react'
import profilepic from './img/dummy.jpg'
import Nav from './edit'

export default function editProfile(){
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
                            <td><h4>Name</h4></td>
                            <td>
                                <input type="text" value="Current Name" />
                            </td>
                        </tr>
                        <tr>
                            <td><h4>User Name</h4></td>
                            <td>
                                <input type="text" value="Current User Name"/>
                            </td>
                        </tr>
                        <tr>
                            <td><h4>Web Site</h4></td>
                            <td>
                                <input type="text" value="Current Web Site"/>
                            </td>
                        </tr>
                        <tr>
                            <td><h4>Bio</h4></td>
                            <td>
                                <textarea name="bio" id="bio" className="bio">current bio</textarea>
                            </td>
                        </tr>
                        <tr>
                            <td><h4>Email</h4></td>
                            <td>
                                <input type="text" value="Current Email"/>
                            </td>
                        </tr>
                        <tr>
                            <td><h4>Phone Number</h4></td>
                            <td>
                                <input type="text" value="Current number"/>
                            </td>
                        </tr>
                        <tr>
                            <td><h4>Gender</h4></td>
                            <td>
                                <select name="gender" id="gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
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