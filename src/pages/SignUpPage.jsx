import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignUpPage = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const changeInputHandler = (e) => {
    setuserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form action="" className="form register_form">
          <p className="form_error-message">This is a n error message</p>
          <input
            type="text"
            name="name"
            id=""
            value={userData.name}
            placeholder="Full Name"
            onChange={changeInputHandler}
          />
          <input
            type="email"
            name="email"
            id=""
            value={userData.email}
            placeholder="Email"
            onChange={changeInputHandler}
          />
          <input
            type="password"
            name="password"
            id=""
            value={userData.password}
            placeholder="Password"
            onChange={changeInputHandler}
          />
          <input
            type="password"
            name="password2"
            id=""
            value={userData.password2}
            placeholder="Confirm Password"
            onChange={changeInputHandler}
          />
          <button type="submit" class="btn primary">
            Register
          </button>
        </form>
        <small>
          Already have an Account? <Link to="/login">sign in</Link>
        </small>
      </div>
    </section>
  );
};

export default SignUpPage;
