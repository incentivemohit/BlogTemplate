import React from "react";

export default function PostWithTag() {
  return (
    <>
      <div className="post-outer-body d-flex mb-2 justify-content-center">
        <div className="post-image-outer-body " style={{ width: "550px" }}>
          <p className="post-tag">Android</p>
          <img
            src="/assets/images/web1.jpg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="post-detail p-2">
          <p className="h5">
            How to make a website using Html, css and javascript without using
            nodejs and mongodb
          </p>
          <p
            className="post-upload-date"
            style={{ fontSize: "12px", fontWeight: "200" }}
          >
            Posted At: August 04,2014
          </p>
          <p
            className="post-description"
            style={{ fontWeight: "400", fontSize: "12px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            consequatur expedita maxime laborum nihil, eaque nesciunt cum fugit
            quas aperiam!<span>...</span>
          </p>
          <button className="btn btn-info" style={{ fontSize: "12px" }}>
            Read More
          </button>
        </div>
      </div>
    </>
  );
}
