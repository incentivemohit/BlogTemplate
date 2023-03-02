import React from "react";

export default function SidebarCategories() {
  return (
    <>
      <h4 className="text-center m-3 bg-warning p-1"> Categories</h4>
      <div className="sidebar-categories mb-2 ">
        <button className="btn btn-primary m-1">Web</button>
        <button className="btn btn-success m-1">Android</button>
        <button className="btn btn-info m-1">Reactjs</button>
        <button className="btn btn-danger m-1">Nodejs</button>
        <button className="btn btn-dark m-1">Data Structure</button>
        <button className="btn btn-info m-1">Java</button>
        <button className="btn btn-danger m-1">MongoDB</button>
        <button className="btn btn-dark m-1">Python</button>
      </div>
    </>
  );
}
