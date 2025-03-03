import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Name from "./components/Name";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Name/>
      <div className="bg-grad"></div>
      <img src="./src-bg.png" alt="bg-img" className="bg-img" />
    </div>
  );
};

export default Home;
