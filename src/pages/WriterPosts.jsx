import React,  { useState, useEffect } from 'react'
import PostItem from '../components/PostItem'

const WriterPosts = () => {

  const [posts, setPosts] = useState([]);
   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to ensure useEffect runs only once

return (
    <section className="writer_posts">
      <div className="container author_posts_container">
        {
        posts.map(({id, userId, title, body}) => <PostItem key={id} postId={id} thumbid={"Thumb"+id} userId={userId} title={title} body={body}/>)
      }
      </div>
    </section>
  )

}
export default WriterPosts