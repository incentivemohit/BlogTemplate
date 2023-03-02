import { Button } from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import PostWithoutTag from "../PostImages/PostWithoutTag";

export default function TopSidebar() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="m-auto">
        <form className="mb-2 text-center ">
          <h4 className="text-center m-3 bg-warning p-1"> Get Updates</h4>
          <div>
            <input
              type="text"
              placeholder="Enter Email id..."
              className="mb-2"
            />
          </div>

          <Button size="small" variant="contained">
            Submit
          </Button>
        </form>

        <div className="videos-section">
          <h4 className="text-center m-3 bg-warning p-1"> Videos</h4>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <div width="400px" height="300px">
                <iframe
                  style={{ width: "400px", height: "300px" }}
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        <h4 className="text-center m-3 bg-warning p-1"> Recent Posts</h4>
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

        <div className="post-outer-body d-flex mt-2 ">
          <div
            className="post-image-outer-body "
            style={{ width: "220px", height: "70px" }}
          >
            <img
              src="/assets/images/db2.jpg"
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
      </div>
    </>
  );
}
