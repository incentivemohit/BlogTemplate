import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark w-100">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="row w-100">
            <div className="col-md-8">
              <ul class="navbar-nav  navbar-links">
                <li class="nav-item active">
                  <Link class="nav-link" to="#">
                    Android
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="#">
                    Web development
                  </Link>
                </li>
                <li class="nav-item dropdown active">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Programming
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="#">
                      Java
                    </Link>
                    <Link class="dropdown-item" to="#">
                      C++
                    </Link>
                    <Link class="dropdown-item" to="#">
                      Python
                    </Link>
                    <Link class="dropdown-item" to="#">
                      C#
                    </Link>
                    <div class="dropdown-divider"></div>
                  </div>
                </li>
                <li class="nav-item dropdown active">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Databases
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="#">
                      MySQL
                    </Link>
                    <Link class="dropdown-item" to="#">
                      MongoDB
                    </Link>
                    <div class="dropdown-divider"></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <form className=" w-100">
                <input
                  className="form-control mr-sm-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
