import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Profile  from '../images/profile8.jpg';
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const UserProfilePage = () => {
  const [avatar, setAvatar] = useState(Profile)
  const[name, setName] = useState()
  const[email, setEmail] = useState()
  const[currenttpassword, setCurrentPassword] = useState()
  const[newpassword, setNewPassword] = useState()
  const[confirmnewpassword, setConfirmNewPassword] = useState()
  
  return (
    <section className="profile">
      <div className="container profile_container">
        <Link to={`/dashboard/Bishal`} className='btn'>My Posts</Link>
        <div className="profile_details">
          <div className="avatar_wrapper">
              <div className="profile_avatar">
                <img src={Profile} alt="" />
              </div>
              { /* Form to update */}
              <form action="" className="avatar_form">
                <input type="file" name="avatar" id="avatar" accept='png, jpg, jpeg' onChange={e => setAvatar(e.target.files[0])} />
                <label htmlFor="avatar"><FaRegEdit /></label>
              </form>
              <button className='profile_avatar-btn'><FaCheck /></button>
        </div>
      </div>
      <h1>Bishal Phuyal</h1>
      <form action="" className="form profile_form">
            {/* <p className="form_error-message">This is a n error message</p> */}
            <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} name="name" id="name" />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} name="name" id="name" />
            <input type="password" placeholder="Current Password" value={currenttpassword} onChange={e => setCurrentPassword(e.target.value)} name="name" id="name" />
            <input type="password" placeholder="New Password" value={newpassword} onChange={e => setNewPassword(e.target.value)} name="name" id="name" />
            <input type="password" placeholder="Confirm New Password" value={confirmnewpassword} onChange={e => setConfirmNewPassword(e.target.value)} name="name" id="name" />
            <button type="submit" className='btn primary'>Update Details</button>
      </form>
      </div>
    </section>
  )
}

export default UserProfilePage