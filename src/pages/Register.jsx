import React, { useContext, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Regester() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { register } = useContext(UserContext);

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    register(input)
      .then(() => {
        navigate("/");
      })
      .catch((err) => setError(err.response.data));
  }

  return (
    <div>
      <div className="reg">
        <h1>Register</h1>
        <form>
          <input
            required
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter Username"
            value={input.username}
            onChange={handleChange}
          />
          <input
            required
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your Email"
            value={input.email}
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
            Register
          </button>
          {error && <p>{error}</p>}
          <span>
            Have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Regester;
