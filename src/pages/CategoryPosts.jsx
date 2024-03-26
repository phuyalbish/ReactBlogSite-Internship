import React,  { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PostItem from '../components/PostItem'
import {DUMMY_JSON} from '../data.js'
import Dropdown from 'react-bootstrap/Dropdown';
const CategoryPosts = () => {
   const { id } = useParams();
  const [posts, setPosts] = useState(DUMMY_JSON);
    useEffect(() => {

       const filteredPost = DUMMY_JSON.filter(user => user.category == id);
        setPosts(filteredPost);
    }, [id]);



return (
    <section className="category_posts">
      {
        (posts.length > 0) ? <div className="container category_posts_container">
         {
        posts.map(({id, userId, title, body, thumbnail, category}) => <PostItem key={id} category={category} postId={id} thumbnail={thumbnail} userId={userId} title={title} body={body}/>)
      }
      </div>:
      <div className="posts_container"><h3>No Posts Found!</h3></div>
      }
    </section>
  )

}
export default CategoryPosts