import React from "react";
import Button from "@mui/material/Button";
import "./styles/Modal.scss";
import Modal from "react-bootstrap/Modal";

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Ask Anything</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Hey This is the question asking section</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
// onClick={() => showModal(false)}
