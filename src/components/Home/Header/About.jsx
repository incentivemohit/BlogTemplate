import React from "react";
import Navbar from "../Main/MainContent/Navbar";
import Header from "./Header";

function About() {
  return (
    <>
      <div className="container">
        <Header />
        <Navbar />
      </div>
      <div className="card w-75 mt-2 m-auto">
        <div className="card-body">
          <h3 className="text-center">About</h3>
          <p>
            Learn coding languages such as c++,java and python etc as well as
            Data structures,Databases and Development Technologies such as Web
            Development and Android Development.Also, you get here asked coding
            questions in Top IT companies such as google,microsoft etc. Learn
            Important subjects for jobs such as DBMS,Networking and Computer
            fundamentals etc.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
