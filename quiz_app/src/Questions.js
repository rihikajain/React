import React from "react";
import "./Questions.css";

const Question = ({ questionData, handleOptionClick, handleSkipClick, answerCorrect }) => {
  // Check if questionData is defined and has the required properties
  if (!questionData || !questionData.question || !questionData.options) {
    return null; // or you can display an error message or handle it in a way suitable for your application
  }

  const { question, options } = questionData;

  const handleButtonClick = (selectedOption) => {
    if (!answerCorrect) {
      handleOptionClick(selectedOption);
    }
  };

  return (
    <div className="question-container">
      <div
        className={`question-card ${
          answerCorrect === true
            ? "correct"
            : answerCorrect === false
            ? "incorrect"
            : ""
        }`}
      >
        <div className="card-inner">
          <h2>{question}</h2>
          <div className="options-container">
            {options.map((option, index) => (
              <button
                key={index}
                className={`option ${
                  answerCorrect !== null &&
                  option === questionData.correctAnswer
                    ? "correct"
                    : ""
                }`}
                onClick={() => handleButtonClick(option)}
              >
                {option}
              </button>
            ))}
            <button
              className="skip-button"
              onClick={() => handleSkipClick()}
              disabled={answerCorrect !== null} // Disable skip after an answer is given
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;  // Changed the component name to start with an uppercase letter (convention)
