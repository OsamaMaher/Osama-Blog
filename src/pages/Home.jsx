import React from "react";
import Posts from "../Posts";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-posts">
      {Posts.map((post) => {
        return (
          <div className="card" key={post.id}>
            <div>
              <h4 className="card-header">{post.title}</h4>

              <div
                className={post.id % 2 === 0 ? "card-body odd" : "card-body "}
              >
                <div className="card-img">
                  <img src={post.image} alt="nature" />
                </div>
                <div>
                  <p className="card-text">{post.content}</p>
                  <Link
                    to={"/post/" + post.id}
                    className="btn btn-outline-success"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
