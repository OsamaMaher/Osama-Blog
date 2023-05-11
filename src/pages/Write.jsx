import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Write() {
  const [value, setValue] = useState("");

  return (
    <div className="container write">
      <div className="write-body">
        <input type="text" className="form-control" placeholder="Title" />
        <div className="text-box">
          <ReactQuill
            theme="snow"
            className="text-boxarea"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="write-menu">
        <div className="item">
          <h1>category</h1>
          <div className="category-element">
            <input type="radio" name="cat" value="tech" id="tech" />
            <label htmlFor="tech">Tech</label>
          </div>
          <div className="category-element">
            <input type="radio" name="cat" value="math" id="math" />
            <label htmlFor="math">Math</label>
          </div>
          <div className="category-element">
            <input type="radio" name="cat" value="science" id="science" />
            <label htmlFor="science">Science</label>
          </div>
          <div className="category-element">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
        </div>
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b>Draft
          </span>
          <span>
            <b>Visibility: </b>Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file" className="up-file">
            Upload image
          </label>
          <div className="buttons">
            <button className="btn btn-outline-success">Save Draft</button>
            <button className="btn btn-success">Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
