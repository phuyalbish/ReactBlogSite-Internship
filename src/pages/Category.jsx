import React,  { useState, useEffect } from 'react'
import {DUMMY_CATEGORY} from '../data/categorydata.js'


import { Link } from 'react-router-dom';


function Category() {
  const [category, setWriter] = useState(DUMMY_CATEGORY);
  
  return (
          <section className="authors">
      {category.length > 0 ? <div className="container writers_container">
      {
          
      category.map(({id, name, thumbnail, des}) => {
            
         const truncateDes = des.length > 40 ? des.substring(0, 40) + '...' : des;   
        return <Link key={id} to={`/posts/categories/${name}`} className='category'>
          <div className="author_avatar">
            <img src={`${thumbnail}`} alt={`Image of ${name}`} />
          </div>
          <div className="author_info">
            <h4>{name}</h4>
            <p>{truncateDes}</p>
            <p>6 posts</p>
          </div>
        </Link>

      })
      }
      </div>: 
      <h2 className="center">No Categories Found!</h2>
      }
    </section>
  )
}

export default Category


