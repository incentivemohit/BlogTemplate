import React from "react";

export default function PostWithoutTag() {
  return (
    <>
      <div className="post-outer-body d-flex mt-2 ">
        <div
          className="post-image-outer-body "
          style={{ width: "220px", height: "70px" }}
        >
          <img
            src="/assets/images/web1.jpg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="post-detail mx-2 ">
          <p className="h5" style={{ fontSize: "12px" }}>
            How to make a website using Html, css and javascript without using
            nodejs and mongodb
          </p>
          <p
            className="post-upload-date"
            style={{ fontSize: "12px", fontWeight: "200" }}
          >
            Posted At: August 04,2014
          </p>
        </div>
      </div>
    </>
  );
}
