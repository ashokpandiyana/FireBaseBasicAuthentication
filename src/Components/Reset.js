import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
const Reset = () => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const { resetpassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetpassword(emailRef.current.value);
      setMessage("Check Your Inbox For Further Instructions");
    } catch (error) {
      console.log(error);
      setError("Failed To Reset Password");
    }
    setLoading(false);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {message ? <Alert variant="danger">{message}</Alert> : null}
          {error ? <Alert variant="danger">{error}</Alert> : null}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Button type="submit" className="w-100" disabled={loading}>
              Reset Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Remember Your Password ? Try
        <Link to="/signin" className="mx-2">
          Sign In
        </Link>
      </div>
      <div className="w-100 text-center mt-2">
        Dont Have an Account ? Try
        <Link to="/signup" className="mx-2">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default Reset;
