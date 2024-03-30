import React, { useState, useEffect } from "react";
import PostItem from "./PostItem";
import { DUMMY_POST } from "../data/postdata.js";

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POST);
  //  useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(data => setPosts(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container posts_container">
          {posts.map(({ id, userId, title, body, thumbnail, category }) => (
            <PostItem
              key={id}
              category={category}
              postId={id}
              thumbnail={thumbnail}
              userId={userId}
              title={title}
              body={body}
            />
          ))}
        </div>
      ) : (
        <div className="posts_container">
          <h3>No Posts Found!</h3>
        </div>
      )}
    </section>
  );
};

export default Posts;
