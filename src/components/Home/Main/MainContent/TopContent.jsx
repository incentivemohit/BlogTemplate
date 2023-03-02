import React from "react";
import PostWithTag from "../PostImages/PostWithTag";
import PostSection1 from "../PostSections/PostSection1";

import TopSidebar from "../Sidebar/TopSidebar";

function TopContent() {
  return (
    <>
      <div className="row ">
        <div className="col-md-8  ">
          <h4 className="text-center m-3 bg-warning p-1 ">Web Development</h4>
          <div>
            <PostSection1 />
          </div>
          <h4 className="text-center m-3 bg-warning p-1">Latest Posts</h4>
          <div>
            <PostWithTag />
            <PostWithTag />
          </div>
        </div>
        <div className="col-md-4 ">
          <div>
            <TopSidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopContent;
