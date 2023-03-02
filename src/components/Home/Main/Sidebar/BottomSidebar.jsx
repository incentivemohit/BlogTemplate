import React from "react";
import PostSection1 from "../PostSections/PostSection1";
import SidebarCategories from "./SidebarCategories";

export default function BottomSidebar() {
  return (
    <>
      <div>
        <SidebarCategories />
        <h4 className="text-center m-3 bg-warning p-1"> Popular Posts</h4>
        <PostSection1 />
      </div>
    </>
  );
}
