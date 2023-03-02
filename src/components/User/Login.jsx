import "./RLforms.css";
import { Button, TextField } from "@mui/material";
import { Container } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Container
        className=" d-flex justify-content-center align-items-center
      "
        style={{ height: "100vh" }}
      >
        <form id="login-form" className="card p-2 text-center ">
          <p style={{ fontSize: "2rem" }}>BlogMaker</p>
          <div className="form-input-field mt-4">
            <TextField
              type="email"
              variant="filled"
              className="w-75"
              label="Email..."
              name="email"
              value={user.email}
              onChange={handleInputs}
            />
          </div>
          <div className="form-input-field mt-4">
            <TextField
              type="password"
              className="w-75"
              variant="filled"
              label="Password..."
              name="password"
              value={user.password}
              onChange={handleInputs}
            />
          </div>

          <div className="mt-4 mb-4 login-button-section">
            <Button type="submit" color="info" variant="contained">
              Login
            </Button>
            <span>
              <Link
                to="/register"
                style={{ fontSize: "12px", marginLeft: "3rem" }}
              >
                Don't have an Account?
              </Link>
            </span>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Login;
