import React from "react";
import Navbar from "../Main/MainContent/Navbar";
import Header from "./Header";

function Contact() {
  return (
    <>
      <div className="container">
        <Header />
        <Navbar />
      </div>
      <div className="card w-75 mt-2 m-auto">
        <div className="card-body">
          <h3 className="text-center">Contact Me</h3>
          <p className="text-center">
            Business Email: mohitkumar.e21@nsut.ac.in
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
