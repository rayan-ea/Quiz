import React, { useState, useEffect } from "react";
import NavBar from "../component/NavBar";
import SideBar from "../component/SideBar";

import "./main.css";
import { getHistoryQuestion } from "../services/api";
import { Question } from "../component/question";

const Main = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState({
    question: "",
    answers: [],
  });
  const [options, setOptions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHistoryQuestion();
      setQuestions(data);
      setQuestion(data[currentIndex]);
      setOptions(data[currentIndex].answers);
    };
    fetchData();
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    setTimeLeft(30);
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 0.01);
      }, 10);
      return () => clearInterval(intervalId);
    }
  }, [timeLeft]);

  return (
    <div className="main-div">
      <NavBar></NavBar>
      <SideBar></SideBar>
      <div className="main-content">
        <form>
          <div className="time-container">
            <div className="title-container">
              <h1>History Quiz</h1>
              <h2>Answer the question below</h2>
            </div>
            <div className="timer">Timer: {timeLeft.toFixed(0)}s</div>
          </div>
          <Question
            question={question}
            options={options}
            handleNext={handleNext}
          ></Question>
        </form>
      </div>
    </div>
  );
};
export default Main;
