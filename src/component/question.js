import React, { useState, useEffect } from "react";
import shakespear from "../assets/shakespear.png";
import { getHistoryQuestion } from "../services/api";
import "./question.css";

export const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState({
    question: "",
    answers: [],
    correctAnswer: "",
  });
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHistoryQuestion();
      setQuestions(data);
      setQuestion(data[currentIndex]);
      setOptions(data[currentIndex].answers);
    };
    fetchData();
  }, [currentIndex]);

  const handleNext = (event) => {
    event.preventDefault();

    setCurrentIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
  };

  return (
    <div className="main-container">
      <div className="first-container">
        <div className="image-button">
          <img src={shakespear} alt="question" style={{ width: "700px" }} />
        </div>
        <div className="info-container">
          <div className="line-container">
            <div className="static-div">
              Question {currentIndex + 1}/{questions.length}
            </div>
            <div className="dynamic-div">{question.question}</div>
          </div>
        </div>
      </div>
      <div className="answer-container">
        <div className="answer-title">Choose answer</div>
        {options.map((option, index) => (
          <div className="answer" key={index}>
            <input
              type="radio"
              className="checkbox-round"
              name="selectedOption"
              value={option}
              checked={selectedOption === option}
              onChange={(event) => setSelectedOption(event.target.value)}
            />
            <label className="label">{option}</label>
          </div>
        ))}
      </div>
      <div className="next-button-container">
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};
