import React from "react";
import "./RLforms.css";
import { Button, TextField } from "@mui/material";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

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
              type="text"
              variant="filled"
              className="w-75"
              label="Username..."
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-input-field mt-4">
            <TextField
              type="email"
              variant="filled"
              className="w-75"
              label="Email..."
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-input-field mt-4">
            <TextField
              type="password"
              className="w-75"
              variant="filled"
              label="Password..."
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="form-input-field mt-4">
            <TextField
              type="password"
              className="w-75"
              variant="filled"
              label="Confirm-Password..."
              name="cpassword"
              value={cpassword}
              onChange={(e) => {
                setCPassword(e.target.value);
              }}
            />
          </div>

          <div className="mt-4 mb-4 register-button-section">
            <Button type="submit" color="info" variant="contained">
              Register
            </Button>
            <span>
              <Link to="/login" style={{ fontSize: "12px" }}>
                Already Have an Account?
              </Link>
            </span>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Register;
