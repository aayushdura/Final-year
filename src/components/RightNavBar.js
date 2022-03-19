import React, { useState } from "react";
import "./styles/RightNavBar.scss";
import Button from "@mui/material/Button";
import MyVerticallyCenteredModal from "./Model";

const RightNavBar = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="rightnavbar-container">
      <Button
        variant="contained"
        style={{ backgroundColor: "rgb(62, 224, 124) " }}
        onClick={() => setModalShow(true)}
      >
        +Start a New Topic
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default RightNavBar;
