import React from "react";
import { Link } from "react-router-dom";

function Logout() {
  return (
    <section className="error-page">
      <div className="center">
        <h1>logged Out!</h1>
        <Link to="/" className="btn primary">
          Go Back to Home
        </Link>
      </div>
    </section>
  );
}

export default Logout;
