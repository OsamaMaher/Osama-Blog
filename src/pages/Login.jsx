import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    axios
      .post("login", input)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => setError(err.response.data));
  }

  return (
    <div>
      <div className="reg">
        <h1>Login</h1>
        <form>
          <input
            required
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter your Username"
            value={input.username}
            onChange={handleChange}
          />
          <input
            required
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            value={input.password}
            onChange={handleChange}
          />
          <button
            className="btn btn-success"
            type="submit"
            onClick={handleClick}
          >
            Login
          </button>
          {error && <p>{error}</p>}
          <span>
            Don't have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
