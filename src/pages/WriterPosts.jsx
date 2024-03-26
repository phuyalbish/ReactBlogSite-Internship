import React,  { useState, useEffect } from 'react'
import PostItem from '../components/PostItem'
import {DUMMY_JSON} from '../data.js'
import { useParams } from 'react-router-dom';

const WriterPosts = () => {
   const { id } = useParams();
  const postid = parseInt(id);
  const [posts, setPosts] = useState(DUMMY_JSON);
    useEffect(() => {

       const filteredPost = DUMMY_JSON.filter(user => user.userId == postid);
        setPosts(filteredPost);
    }, [postid]);



return (
    <section className="posts">
      {
        (posts.length > 0) ? <div className="container author_posts_container">
         {
        posts.map(({id, userId, title, body, thumbnail, category}) => <PostItem key={id} category={category} postId={id} thumbnail={thumbnail} userId={userId} title={title} body={body}/>)
      }
      </div>:
      <div className="author_posts_container"><h3>No Posts Found!</h3></div>
      }
    </section>
  )

}
export default WriterPosts