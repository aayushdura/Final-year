import React from "react";
import "./styles/RightNavBar.scss";
import Button from "@mui/material/Button";
const RightNavBar = () => {
  return (
    <div className="rightnavbar-container">
      <Button
        variant="contained"
        style={{ backgroundColor: "rgb(62, 224, 124) " }}
      >
        +Start a New Topic
      </Button>
    </div>
  );
};

export default RightNavBar;
