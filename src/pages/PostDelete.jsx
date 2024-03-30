import React from "react";
import { Link } from "react-router-dom";

function PostDelete() {
  return <section className="delete-page">
      <div className="center">
        <h1>Post Deleted!!</h1>
        <Link to="/" className="btn primary">
          Go Back to Home
        </Link>
      </div>
    </section>
}

export default PostDelete;
