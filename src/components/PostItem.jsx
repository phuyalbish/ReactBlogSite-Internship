import React from "react";
import { Link } from "react-router-dom";
import PostWriter from "./PostWriter";

const PostItem = ({ postId, category, thumbnail, userId, title, body }) => {
  const truncateTitle =
    title.length > 40 ? title.substring(0, 40) + "..." : title;
  const capitalizedTitle =
    truncateTitle.charAt(0).toUpperCase() + truncateTitle.slice(1);
  const truncateBody =
    body.length > 100 ? body.substring(0, 100) + "..." : body;
  const capitalizedBody =
    truncateBody.charAt(0).toUpperCase() + truncateBody.slice(1);
  return (
    <article className="post">
      <div className="post__thumbnail">
        <div className="img_and_category">
          <img src={thumbnail} alt="waa" className="post_thumbnail_main_img" />
          <Link to={`/posts/categories/${category}`} className="btn sm">
            {category}
          </Link>
        </div>

        <div className="post__footer">
          <div></div>
          <PostWriter userId={userId} />
        </div>
        <div className="post_content">
          <Link to={`/posts/${postId}`}>
            <h3>{capitalizedTitle}</h3>
          </Link>
          <p>{capitalizedBody}</p>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
