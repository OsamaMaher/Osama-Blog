import React from "react";
import profile from "../images/crop-circle.png";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Single() {
  return (
    <div className="post container">
      <div className="post-body">
        <img src="https://picsum.photos/1000/500" alt="test" />
        <div className="profile">
          <img src={profile} alt="profile" />
          <div className="user-info">
            <span>Osama</span>
            <p>posted 2 months ago</p>
          </div>
          <div>
            <Link to="/write/3">
              <EditIcon fontSize="medium" />
            </Link>
            <DeleteIcon sx={{ color: red[500] }} fontSize="medium" />
          </div>
        </div>
        <h2>Post title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia lorem mi, quis semper metus vulputate at. Nam tempor odio
          vitae turpis fringilla, nec egestas elit cursus. Aenean in risus a
          turpis ultrices posuere non sit amet tortor. Suspendisse potenti. In
          hac habitasse platea dictumst. Nunc viverra nisi vitae est bibendum
          sagittis. Vestibulum leo velit, ornare suscipit quam ut, imperdiet
          vehicula tortor. In tincidunt egestas dapibus. Vestibulum vel nunc
          eget justo vestibulum eleifend tempus sit amet arcu. Curabitur quis
          ante sed metus blandit eleifend a ut est. Sed dui magna, condimentum
          ut viverra vitae, dignissim vitae erat. Pellentesque efficitur nisl
          sollicitudin lacus varius, sit amet consequat purus suscipit.
          <br />
          <br />
          Curabitur rutrum risus eu massa efficitur, eu gravida nisi ultrices.
          Etiam vulputate semper consectetur. Aenean tincidunt volutpat ornare.
          Aliquam risus nisl, rutrum in lacus eu, aliquam dictum est. Donec
          hendrerit malesuada metus ac mattis. Nam vitae eros elit. Morbi est
          libero, scelerisque id consequat quis, lobortis id diam. Proin
          lobortis vulputate volutpat. Nam ligula elit, porttitor at iaculis
          sed, dictum tincidunt nisi. Praesent vitae dolor erat. Aliquam aliquam
          magna et interdum imperdiet. Donec posuere ipsum erat, id lacinia
          mauris pharetra eget. Pellentesque mattis feugiat malesuada.
          <br />
          <br /> Aliquam accumsan iaculis metus, vel ornare nulla pharetra ut.
          Curabitur bibendum orci elit, et dictum ante elementum ut. Maecenas
          nec magna commodo, elementum mi lobortis, semper purus. Ut bibendum
          cursus quam, eu semper velit congue quis. Mauris tristique quis risus
          at consequat. Morbi ullamcorper est vitae justo scelerisque, et tempor
          eros accumsan. Etiam tempus sem et erat rhoncus blandit. Phasellus
          interdum nulla nec tincidunt tempor.
        </p>
      </div>
      <div className="post-menu">
        <Menu />
      </div>
    </div>
  );
}

export default Single;
