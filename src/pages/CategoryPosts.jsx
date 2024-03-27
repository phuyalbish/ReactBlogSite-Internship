import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import PostItem from "../components/PostItem";
import { DUMMY_POST } from "../data/postdata.js";
import { DUMMY_CATEGORY } from "../data/categorydata.js";
import Thumb1 from "../images/thumb1.jpg";

const CategoryPosts = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [posts, setPosts] = useState(DUMMY_POST);
  const [category, setCategory] = useState(DUMMY_CATEGORY);
  useEffect(() => {
    const filteredPost = DUMMY_POST.filter((user) => user.category == id);
    const filteredCategory = DUMMY_CATEGORY.find((user1) => user1.name == id);
    setPosts(filteredPost);
    setCategory(filteredCategory);
  }, [id]);

  return (
    <section className="category_posts">
      <div className="writerInfo-container">
        <div className="imgandinfo">
          <Link onClick={() => navigate(-1)} className="linktoback">
            <IoMdArrowRoundBack />
          </Link>
          <img src={category.thumbnail} alt="" />
          <div className="writerinfo">
            <h3>{category.name}</h3>
            <p>{category.des}</p>
            <p>{posts.length} posts</p>
          </div>
        </div>
      </div>
      <div></div>

      {/* <iframe
                width="600"
                height="450"
                style={{ border: "none" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" src={mapsrc}
                title="google map"
            ></iframe> */}
      {/* </div> */}
      {posts.length > 0 ? (
        <div className="container category_posts_container">
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
export default CategoryPosts;
