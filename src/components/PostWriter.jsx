import React,  { useState, useEffect } from 'react'
import {DUMMY_WRITER} from '../data.js'

import { Link } from 'react-router-dom';
// import writer10 from '../images/avatar10.jpg';
// import writer1 from '../images/avatar1.jpg';
// import writer2 from '../images/avatar2.jpg';
// import writer3 from '../images/avatar3.jpg';
// import writer4 from '../images/avatar4.jpg';
// import writer5 from '../images/avatar5.jpg';
// import writer6 from '../images/avatar6.jpg';
// import writer7 from '../images/avatar7.jpg';
// import writer8 from '../images/avatar8.jpg';
// import writer9 from '../images/avatar9.jpg';



function PostWriter({userId}) {
   const [writer, setWriter] = useState(DUMMY_WRITER);
  const id = parseInt(userId);
  useEffect(() => {
    const filteredWriter = DUMMY_WRITER.find(user => user.id === id);
        setWriter(filteredWriter);
  }, [userId]);
  return (
    <Link to={`/posts/writer/${userId}`} className='post_writer'>

      <div className="post_writer_avatar">
        

        <img src={writer.thumbnail} alt="No Img" />
      </div>
      <div className="post_writer_details">
        <h5>{writer.name}</h5>
        <small>Just Now</small>
      </div>
    </Link>
  )
}



export default PostWriter