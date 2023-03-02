import React from "react";
import "../RecentPost/RecentPost.css";
import PostWithoutTag from "../PostImages/PostWithoutTag";

export default function PostSection1() {
  return (
    <div>
      <div className="row m-auto">
        <div className="col">
          <div
            style={{ position: "relative", width: "23rem", height: "22rem" }}
          >
            <p className="post-tag">Database</p>
            <img
              src="/assets/images/db3.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            <p className="post-image-title">How to make a website</p>
          </div>
        </div>
        <div className="col">
          <div className="post-outer-body d-flex mt-2 ">
            <div
              className="post-image-outer-body "
              style={{ width: "220px", height: "70px" }}
            >
              <img
                src="/assets/images/web3.jpg"
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="post-detail mx-2 ">
              <p className="h5" style={{ fontSize: "12px" }}>
                How to make a website using Html, css and javascript without
                using nodejs and mongodb
              </p>
              <p
                className="post-upload-date"
                style={{ fontSize: "12px", fontWeight: "200" }}
              >
                Posted At: August 04,2014
              </p>
            </div>
          </div>
          <div className="post-outer-body d-flex mt-2 ">
            <div
              className="post-image-outer-body "
              style={{ width: "220px", height: "70px" }}
            >
              <img
                src="/assets/images/db1.jpg"
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="post-detail mx-2 ">
              <p className="h5" style={{ fontSize: "12px" }}>
                How to make a website using Html, css and javascript without
                using nodejs and mongodb
              </p>
              <p
                className="post-upload-date"
                style={{ fontSize: "12px", fontWeight: "200" }}
              >
                Posted At: August 04,2014
              </p>
            </div>
          </div>
          <div className="post-outer-body d-flex mt-2 ">
            <div
              className="post-image-outer-body "
              style={{ width: "220px", height: "70px" }}
            >
              <img
                src="/assets/images/and1.jpg"
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="post-detail mx-2 ">
              <p className="h5" style={{ fontSize: "12px" }}>
                How to make a website using Html, css and javascript without
                using nodejs and mongodb
              </p>
              <p
                className="post-upload-date"
                style={{ fontSize: "12px", fontWeight: "200" }}
              >
                Posted At: August 04,2014
              </p>
            </div>
          </div>
          <PostWithoutTag />
        </div>
      </div>
    </div>
  );
}
