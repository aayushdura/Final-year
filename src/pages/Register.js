import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../components/styles/register.scss";

const Register = () => {
  const [formValues, setFormValues] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main>
      <h1 className="primary-title">Welcome To CS-hive</h1>
      <p className="text-muted1">Hive For Computer Science associates</p>
      <Form className="form-container">
        <h4 className="primary-title-form">Register</h4>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full-Name"
            value={formValues?.userName}
            onChange={(e) => {
              setFormValues({ ...formValues, userName: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formValues?.email}
            onChange={(e) => {
              setFormValues({ ...formValues, email: e.target.value });
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          value={formValues?.password}
          onChange={(e) => {
            setFormValues({ ...formValues, password: e.target.value });
          }}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember-Me" />
        </Form.Group>
        <Button variant="primary" type="submit" onSubmit={handleSubmit}>
          Submit
        </Button>
        <p className="text-muted" id="text-muted2">
          Already a member{" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            LogIn
          </Link>
        </p>
      </Form>
    </main>
  );
};

export default Register;
