import React from "react";
import "./RecentPost.css";

function RecentPost() {
  return (
    <>
      <div className="row outer-body my-2 ">
        <div className="col-md-6">
          <div className="position-relative my-1">
            <p className="post-tag">Android</p>
            <img
              src="/assets/images/and2.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            <p className="post-image-title">How to make a website</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row inner-row-1 mb-1">
            <div className="col-md-6">
              <div className="position-relative my-1">
                <p className="post-tag">Android</p>
                <img
                  src="/assets/images/db1.jpg"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
                <p className="post-image-title">How to make a website</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="position-relative my-1">
                <p className="post-tag">Android</p>
                <img
                  src="/assets/images/web1.jpg"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
                <p className="post-image-title">How to make a website</p>
              </div>
            </div>
          </div>
          <div className="row inner-row-2 mt-2">
            <div className="col-md-6">
              <div className="position-relative my-1">
                <p className="post-tag">Android</p>
                <img
                  src="/assets/images/and3.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
                <p className="post-image-title">How to make a website</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="position-relative my-1">
                <p className="post-tag">Android</p>
                <img
                  src="/assets/images/web3.jpg"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
                <p className="post-image-title">How to make a website</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentPost;
