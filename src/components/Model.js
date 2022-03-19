import React from "react";
import Button from "@mui/material/Button";
import "./styles/Modal.scss";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

const MyVerticallyCenteredModal = (props) => {
  const { title, Question } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>{title}</h4>
        </Modal.Title>
      </Modal.Header>
      {Question ? (
        <Modal.Body>
          <p>Hey This is the question asking section</p>
          <Form.Control
            type="text"
            placeholder="Question ... ?"
            className="questionbar"
          />
        </Modal.Body>
      ) : (
        <Modal.Body>
          <p>Hey This is the Answering section</p>
          <Form.Control
            as="textarea"
            placeholder="Write your own Answer ... "
            className="answerbar"
          />
        </Modal.Body>
      )}
      <Modal.Footer>
        <Button
          style={{
            backgroundColor: "aliceblue",
            color: "rgb(62, 224, 124)",
          }}
        >
          {Question ? "ASK" : "ANSWER"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
