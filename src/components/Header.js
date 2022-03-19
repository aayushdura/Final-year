import React from "react";
import "./styles/Header.scss";
import Badge from "@mui/material/Badge";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { randomArrayOfNames } from "../MockData/DemoArray";
import { generateRandomName } from "../MockData/DemoMethods";
const Header = () => {
  return (
    <nav className="header-navbar">
      <div>
        <Link to="/container" style={{ textDecoration: "none" }}>
          <h2>CSIT-FORUM</h2>
        </Link>
      </div>
      <div className="searchbar-navbar">
        <input type="search" placeholder="Search..."></input>
      </div>
      <div className="right-div-navbar">
        <IconButton>
          <Badge badgeContent={5} variant="dot" color="error">
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
        <Avatar
          style={{ color: "rgb(28, 36, 105)" }}
          alt={generateRandomName(randomArrayOfNames)}
          src="image-source"
        />
      </div>
    </nav>
  );
};

export default Header;
