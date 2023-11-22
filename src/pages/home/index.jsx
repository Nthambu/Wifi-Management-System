import { useState } from "react";

import "./home.css";

function Home() {
  const [login, setLogIn] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setLogIn({ ...login, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(login.password);
  };

  return (
    <section className="home container">
      <div className="login_container">
        <h3 className="login_title">Welcome back</h3>
        <h6 className="login_subtitle">
          Use your login details to log into system
        </h6>
        <form action="" onSubmit={handleLoginSubmit}>
          <input
            placeholder="Email Address"
            id="email"
            name="email"
            value={login.email}
            onChange={handleInputChange}
            className="form_control"
          />
          <input
            placeholder="Password"
            name="password"
            value={login.password}
            onChange={handleInputChange}
            className="form_control"
          />
          <p className="forgot_password">
            <a href="#">Forgot Password?</a>
          </p>

          <button type="submit" className="button login_button">
            Login in
          </button>
        </form>
        <p className="create_account">
          Not registered yet? <a href="">Create an Account</a>
        </p>
      </div>
    </section>
  );
}
export default Home;
