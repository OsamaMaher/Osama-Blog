import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);
  const getLocation = useLocation();
  useEffect(() => {
    const fetchposts = async () => {
      await axios
        .get(`posts${getLocation.search}`)
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchposts();
  }, [getLocation]);
  return (
    <div className="home-posts">
      {posts.map((post) => {
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
                    to={`/post/${post.id}`}
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
