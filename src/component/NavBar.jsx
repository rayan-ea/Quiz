import React, { useState } from "react";
import "./NavBar.css";
import { FaSearch } from "react-icons/fa";
import person from "../assets/Ellipse 6.jpg";

function NavBar() {
  return (
    <div className="container">
      <nav>
        <div className="nav-left">
          <label className="logo">Quiz Time</label>
        </div>
        <div className="nav-middle">
          <div className="search-container">
            <input
              type="text"
              placeholder={"Search... "}
              style={{ paddingLeft: "35px" }}
            ></input>
          </div>
        </div>
        <div className="nav-right">
          <button className="btn-start">Start Quiz</button>
          <div className="profile-container">
            <img src={person} alt="profile-picture" />
            <label className="user-name">Oluwatabi</label>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
