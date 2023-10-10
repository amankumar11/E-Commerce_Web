import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import "../assets/css/login.css";
import loginImg from "../assets/img/login.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-left">
          <h1>Welcome</h1>
          <p>We are glad to see you back with us</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Id"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <button disabled={isLoading} className="login-btn">
              Log in
            </button>
            {error && <div className="error">{error}</div>}
          </form>
          <a className="signup-btn" href="/signup">
            I Dont have Account
          </a>
        </div>
        <div className="login-right">
          <img
            src={loginImg}
            width="600px"
            alt="login-img"
            className="login-img"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Login;
