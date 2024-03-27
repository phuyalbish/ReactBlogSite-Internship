import React from 'react'
import { Link } from 'react-router-dom'
import {FaGithubSquare , FaLinkedin,FaTwitterSquare,FaMapMarkerAlt,FaFacebook ,FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
function Footer() {
  return (
   <footer>
    {/* <ul className='footer_categories'>
    <li><Link to='posts/categories/Agriculture'>Agriculture</Link></li>
    <li><Link to='posts/categories/Business'>Business</Link></li>
    <li><Link to='posts/categories/Education'>Education</Link></li>
    <li><Link to='posts/categories/Entertainment'>Entertainment</Link></li>
    <li><Link to='posts/categories/Art'>Art</Link></li>
    <li><Link to='posts/categories/Investment'>Investment</Link></li>
 </ul> */}

<div className="mainFooterInfo">
  
 <div className="contact_footer footer_outer">
  <h2>Contact us:</h2>
    <div className="inner_footer">
        <FaPhoneAlt className='footer-icon'/>
        <p>+977 9869023901</p>
    </div> 
    <div className="inner_footer">
        <FaMapMarkerAlt className='footer-icon'/>
        <p>Kathmandu, Nepal KTM 44600</p>
    </div>
     <div className="inner_footer">
        <MdEmail className='footer-icon'/>
        <p>webodleinc@gmail.com</p>
    </div>
 </div>

 <div className="sm_footer footer_outer">
  <h2>Follow us:</h2>
    <div className="inner_footer">
        <FaFacebook className='footer-icon'/>
        <p>facebook.com/webodle</p>
    </div> 
    <div className="inner_footer">
        <FaInstagram className='footer-icon'/>
        <p>instagram.com/webodle</p>
    </div>
     <div className="inner_footer">
        <FaTwitterSquare className='footer-icon'/>
        <p>twitter.com/webodle</p>
    </div>
    <div className="inner_footer">
        <FaLinkedin className='footer-icon'/>
        <p>linkedin.com/company/webodle</p>
    </div>
     <div className="inner_footer">
        <FaGithubSquare className='footer-icon'/>
        <p>github.com/webodle</p>
    </div>
 </div>

 <div className="about_footer footer_outer">
      <h2>About Us;</h2>
      <p>Webodle Inc.  is the  common place for web-developers and clients. Join webodle family to showcase your talent.  </p>
      <h2>Webodle Inc</h2>
 
 </div>
 
</div>
 <div className="footer_copyright">All rights reserved 2024. Webodle. Inc</div>
   </footer>
  )
}

export default Footer