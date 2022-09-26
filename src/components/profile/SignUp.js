import React, { useState, useContext } from "react";
import { Context } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Alert } from "react-bootstrap";

export const SignUp = () => {
  const { auth } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      navigate("/profile");
    } catch (e) {
      setError(e);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Sign up</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleEmailChange}
          value={email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={handlePassChange}
          value={password}
        />
      </Form.Group>
      {error && <Alert>{error.toString()}</Alert>}

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <hr />
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </Form>
  );
};
