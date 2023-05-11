import React from "react";
import Posts from "../Posts";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <h2>Posts you may like</h2>
      {Posts.map((post) => {
        return (
          <div className="menu-post">
            <h3>{post.title}</h3>
            <img src={post.image} alt="nature" />
            <div>
              <Link
                to={"/post/" + post.id}
                className="btn btn-outline-success bt-sm"
              >
                Read more
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
