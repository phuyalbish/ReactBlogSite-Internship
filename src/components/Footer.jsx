import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <footer>
    <ul className='footer_categories'>
    <li><Link to='posts/categories/Agriculture'>Agriculture</Link></li>
    <li><Link to='posts/categories/Business'>Business</Link></li>
    <li><Link to='posts/categories/Education'>Education</Link></li>
    <li><Link to='posts/categories/Entertainment'>Entertainment</Link></li>
    <li><Link to='posts/categories/Art'>Art</Link></li>
    <li><Link to='posts/categories/Investment'>Investment</Link></li>
 </ul>

 <div className="footer_copyright">All rights reserved 2024. Webodle. Inc</div>
   </footer>
  )
}

export default Footer