import React,  { useState, useEffect } from 'react'
import {DUMMY_WRITER} from '../data/writerdata.js'

import { Link } from 'react-router-dom';



function PostWriter({userId}) {
   const [writer, setWriter] = useState(DUMMY_WRITER);
  const id = parseInt(userId);
  useEffect(() => {
    const filteredWriter = DUMMY_WRITER.find(user => user.id === id);
        setWriter(filteredWriter);
  }, [id]);
  return (
    <Link to={`/posts/writer/${userId}`} className='post_writer'>

      <div className="post_writer_details">
        <h5>{writer.name}</h5>
        <small>Just Now</small>
      </div>
      <div className="post_writer_avatar">
        <img src={writer.thumbnail} alt="No Img" />
      </div>
    </Link>
  )
}



export default PostWriter