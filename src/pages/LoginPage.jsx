import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });
  const changeInputHandler = (e) => {
    setuserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form action="" className="form login_form">
          <p className="form_error-message">This is a n error message</p>
          <input
            type="email"
            name="email"
            id=""
            value={userData.email}
            placeholder="Email"
            onChange={changeInputHandler}
            autoFocus
          />
          <input
            type="password"
            name="password"
            id=""
            value={userData.password}
            placeholder="Password"
            onChange={changeInputHandler}
          />
          <button type="submit" class="btn primary">
            Login
          </button>
        </form>
        <small>
          Don't have an Account? <Link to="/signup">sign up</Link>
        </small>
      </div>
    </section>
  );
};

export default LoginPage;
