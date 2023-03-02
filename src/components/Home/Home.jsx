import React from "react";
import RecentPost from "../Home/Main/RecentPost/RecentPost";
import Footer from "./Footer/Footer";
import MainContent from "./Main/MainContent/MainContent";
import Header from "./Header/Header";
import Navbar from "./Main/MainContent/Navbar";

function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <Navbar />
      </div>
      <div className="container blog-wrapper">
        <div className="recent-posts card my-2 p-2">
          <RecentPost />
        </div>
        <div className="main-content  ">
          <MainContent />
        </div>
        <div className="footer card my-2">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
