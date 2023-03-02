import React from "react";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <>
      <div className="card p-2">
        <div className="bg-dark text-info px-4 py-2 text-center">
          <div className="footer-wrapper">
            <div className="footer-header d-flex justify-content-between text-white">
              <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                Coding Tools
                <div style={{ fontSize: "12px", fontWeight: "bold" }}>
                  <i>Become Next Coder</i>
                </div>
              </div>

              <Box className="list-group list-group-horizontal ">
                <a
                  href=""
                  className="list-group-item  bg-dark text-white  nav-links"
                >
                  <i className="fa fa-facebook "></i>
                </a>
                <a
                  href=""
                  className="list-group-item bg-dark text-white  nav-links"
                >
                  <i className="fa fa-youtube-play"></i>
                </a>
                <a
                  href=""
                  className="list-group-item bg-dark text-white  nav-links"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </Box>
            </div>

            <div className="row">
              <div className="col-md-6 py-4">
                <p className="footer-about-us-description">
                  Learn coding languages such as c++,java and python etc as well
                  as Data structures,Databases and Development Technologies such
                  as Web Development and Android Development.Also, you get here
                  asked coding questions in Top IT companies such as
                  google,microsoft etc. Learn Important subjects for jobs such
                  as DBMS,Networking and Computer fundamentals etc.
                </p>
              </div>
              <div className="col-md-6 py-4">
                <div className="row">
                  <div className="col-6 col-md ">
                    <h5>Features</h5>
                    <ul className="list-unstyled ">
                      <li>
                        <a className=" text-white" href="#">
                          Cool stuff
                        </a>
                      </li>
                      <li>
                        <a className="text-white" href="#">
                          Random feature
                        </a>
                      </li>
                      <li>
                        <a className="text-white" href="#">
                          Team feature
                        </a>
                      </li>
                      <li>
                        <a className="text-white" href="#">
                          Stuff for developers
                        </a>
                      </li>
                      <li>
                        <a className="text-white" href="#">
                          Another one
                        </a>
                      </li>
                      <li>
                        <a className="text-white" href="#">
                          Last time
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                      <li>
                        <a className="text-white" href="#">
                          Team
                        </a>
                      </li>
                      <li>
                        <a className="text-white" href="#">
                          Locations
                        </a>
                      </li>
                      <li>
                        <a className="text-white" href="#">
                          Privacy
                        </a>
                      </li>
                      <li>
                        <a className="text-white" href="#">
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h6 className="bg-light p-3 text-dark">Copyright@2021</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
