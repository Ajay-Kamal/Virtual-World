import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div className="home-page">
      <img src="v-world/public/logo.svg" alt="">  
        <Navbar />
      </img>
    </div>
  );
};

export default Home;
