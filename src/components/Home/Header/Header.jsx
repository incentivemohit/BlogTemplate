import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      {/*topbar with navlinks and social links*/}

      <div className="row  ">
        <div className="col-md-6">
          <ul className="list-unstyled d-flex top-nav-links ">
            <li className=" bg-dark">
              <a href="/">Home</a>
            </li>
            <li className=" bg-dark">
              <a href="/about">About</a>
            </li>
            <li className=" bg-dark">
              <a href="/contact">Contact</a>
            </li>
            <li className=" bg-dark">
              <a href="/login">Login</a>
            </li>
            <li className=" bg-dark">
              <a href="/register">Register</a>
            </li>
          </ul>
        </div>

        <div className="col-md-6">
          <ul className="list-unstyled   d-flex justify-content-end top-nav-links">
            <li className="-item bg-dark">
              <a href="/">
                <i className="fa fa-facebook "></i>
              </a>
            </li>
            <li class=" bg-dark">
              <a href="/">
                <i className="fa fa-youtube-play "></i>
              </a>
            </li>
            <li class=" bg-dark">
              <a href="/">
                <i className="fa fa-twitter "></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/*header with blog name and ad poster*/}
      <div className="row header my-3">
        <div className="col-md-4 d-flex align-items-center text-center justify-content-center">
          <div style={{ fontSize: "30px", fontWeight: "bold" }}>
            Coding Tools
            <div style={{ fontSize: "12px", fontWeight: "bold" }}>
              <i>Become Next Coder</i>
            </div>
          </div>
        </div>
        <div className="col-md-8 ">
          <div
            style={{ width: "720px", height: "90px" }}
            id="header-responsive-ads"
          >
            <img
              src="/assets/images/ads.png"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
