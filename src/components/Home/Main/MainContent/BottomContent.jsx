import React, { useState } from "react";
import "../RecentPost/RecentPost.css";
import PostSection1 from "../PostSections/PostSection1";
import BottomSidebar from "../Sidebar/BottomSidebar";
import Carousel from "react-bootstrap/Carousel";

export default function BottomContent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="row my-3">
        <div className="col-md-8 card p-2">
          <h4 className="text-center m-3 bg-warning p-1"> Programming</h4>
          <PostSection1 />
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="mt-2"
          >
            <Carousel.Item>
              <div className="position-relative">
                <p className="post-tag">Android</p>
                <img
                  src="/assets/images/and3.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
                <p className="post-image-title">How to make a website</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="position-relative">
                <p className="post-tag">Database</p>
                <img
                  src="/assets/images/db2.jpg"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
                <p className="post-image-title">How to make a website</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="position-relative">
                <p className="post-tag">Web</p>
                <img
                  src="/assets/images/web3.jpg"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
                <p className="post-image-title">How to make a website</p>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-4 card p-2">
          <BottomSidebar />
        </div>
      </div>
    </>
  );
}
