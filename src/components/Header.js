import React from "react";
import "./styles/Header.scss";
import Badge from "@mui/material/Badge";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header-navbar">
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
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
          alt="Aayush"
          src="/static/images/avatar/1.jpg"
        />
      </div>
    </nav>
  );
};

export default Header;
