import React, { useState } from "react";
import NavBar from "../component/NavBar";
import SideBar from "../component/SideBar";
import "./introduction.css";
import history from "../assets/Rectangle 274.jpg";
import { useNavigate } from "react-router-dom";

const Introduction = () => {
  const navigate = useNavigate();
  const today = new Date();
  const date = useState(
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()
  );
  return (
    <div className="main-div">
      <NavBar></NavBar>
      <SideBar></SideBar>
      <div className="main-content">
        <form>
          <div className="title-container">
            <h1>History Quiz</h1>
            <h2>Read the following instructions</h2>
          </div>
          <div className="first-container">
            <div className="image-button">
              <img src={history} alt="image1" style={{ width: "700px" }} />
            </div>
            <div className="info-container">
              <div className="line-container">
                <div className="static-div">Date:</div>
                <div className="dynamic-div">{date}</div>
              </div>
              <div className="line-container">
                <div className="static-div">Time Limite:</div>
                <div className="dynamic-div">30 Mins</div>
              </div>
              <div className="line-container">
                <div className="static-div">Attempts:</div>
                <div className="dynamic-div">Once</div>
              </div>
              <div className="line-container">
                <div className="static-div">Points:</div>
                <div className="dynamic-div">200 Points</div>
              </div>
            </div>
          </div>
          <div className="second-container">
            <p className="instruction">Instructions</p>
            <p className="paragraph">
              This quiz consists of 5 multiple-choice questions. To be
              successful with the quizzes, it’s important to conversant with the
              topics. Keep the following in mind: <br></br> <br></br>
              Timing - You need to complete each of your attempts in one
              sitting, as you are allotted 30 minutes to each attempt. Answers -
              You may review your answer-choices and compare them to the correct
              answers after your final attempt.<br></br> <br></br> To start,
              click the "Start" button. When finished, click the "Submit "
              button.
            </p>
          </div>

          <div className="start-button-container">
            <button
              className="start-button"
              onClick={() => navigate("/Question1")}
            >
              Start
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Introduction;
