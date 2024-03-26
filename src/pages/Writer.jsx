import React,  { useState, useEffect } from 'react'
import {DUMMY_WRITER} from '../data.js'

import WriterItem from '../components/WriterItem'

import { Link } from 'react-router-dom';


function Writer() {
  const [writer, setWriter] = useState(DUMMY_WRITER);
  
  return (
          <section className="authors">
      {writer.length > 0 ? <div className="container writers_container">
      {
          
      writer.map(({id, post, thumbnail, name, username, email}) => {

        return <Link key={id} to={`/posts/users/${id}`} className='author'>
          <div className="author_avatar">
            <img src={`${thumbnail}`} alt={`Image of ${name}`} />
          </div>
          <div className="author_info">
            <h4>{name}</h4>
            <p>@{username}</p>
            <p>{post} posts</p>
          </div>
        </Link>

      })
      }
      </div>: 
      <h2 className="center">No Writers Found</h2>
      }
    </section>
  )
}

export default Writer


