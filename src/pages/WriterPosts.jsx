import React, { useState, useEffect } from "react";
import PostItem from "../components/PostItem";
import { DUMMY_POST } from "../data/postdata.js";
import { DUMMY_WRITER } from "../data/writerdata.js";
import { useParams, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const WriterPosts = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const postid = parseInt(id);
  const [posts, setPosts] = useState(DUMMY_POST);
  const [writer, setWriter] = useState(DUMMY_WRITER);
  useEffect(() => {
    const filteredPost = DUMMY_POST.filter((user) => user.userId == postid);
    const filteredWriter = DUMMY_WRITER.find((user1) => user1.id == postid);
    setPosts(filteredPost);
    setWriter(filteredWriter);
  }, [postid]);

  const uniqueUserCategories = new Set();
  posts.map(({ category }) => uniqueUserCategories.add(category));
  const userCategories = Array.from(uniqueUserCategories);
  return (
    <section className="posts">
      <div className="writerInfo-container">
        <div className="imgandinfo">
          <Link onClick={() => navigate(-1)} className="linktoback">
            <IoMdArrowRoundBack />
          </Link>
          <img src={writer.thumbnail} alt="" />
          <div className="writerinfo">
            <h3>{writer.name}</h3>
            <p>@{writer.address && writer.address.geo && writer.address.geo.lat}</p>
            <p>{writer.post} posts</p>
            <div className="categoriesOfWriter">
              {userCategories.map((category) => (
                <Link
                  to={`/posts/categories/${category}`}
                  className="btn sm primary"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="visitbuttons">
          <Link to={`mailto:${writer.username}`} target="_blank">
            <button className="btn primary"> Mail {writer.username}</button>
          </Link>
          <Link to={`https://www.${writer.website}`} target="_blank">
            <button className="btn primary">
              {" "}
              Visit Site <FaExternalLinkAlt />
            </button>
          </Link>
        </div>

        {/* <iframe
                width="600"
                height="450"
                style={{ border: "none" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" src={mapsrc}
                title="google map"
            ></iframe> */}
      </div>
      {posts.length > 0 ? (
        <div className="container author_posts_container">
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
        <div className="author_posts_container">
          <h3>No Posts Found!</h3>
        </div>
      )}
    </section>
  );
};
export default WriterPosts;
