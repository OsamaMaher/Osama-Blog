import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { logout } = useContext(UserContext);
  const { currentUser } = useContext(UserContext);

  const handleClick = () => {
    logout();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            O.Blog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  navbar-nav-scroll">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/?cat=tech">
                  Tech
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/?cat=art">
                  Art
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/?cat=science">
                  Science
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="btn btn-secondary me-2" to="/write">
                  Write
                </Link>
              </li>
              {currentUser ? (
                <>
                  <li className="nav-item">
                    <button
                      type="submit"
                      className="btn btn-success me-2"
                      onClick={handleClick}
                    >
                      Logout
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-light">{currentUser}</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="btn btn-success me-2" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="btn btn-success" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
