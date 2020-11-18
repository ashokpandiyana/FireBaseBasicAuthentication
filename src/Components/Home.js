import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [error, setError] = useState();
  const history = useHistory();

  const { currentUser, logout } = useAuth();
  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/signin");
    } catch (error) {
      setError("Failed to Logout");
    }
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          <p>Email:{currentUser && currentUser.email}</p>
        </Card.Body>
      </Card>
      {error && <Alert>{error}</Alert>}
      <div className="w-100 text-center mt-2">
        <Button varaint="link" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </>
  );
};

export default Home;
