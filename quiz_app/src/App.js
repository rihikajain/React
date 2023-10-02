import React, { useState } from "react";
import "./App.css";
import Question from "./Questions";  // Updated import statement
import Score from "./Score";
import Result from "./Result";
import questionsData from "./questionsData";  // Corrected import statement for questions data

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [skippedQuestions, setSkippedQuestions] = useState([]);
  const [answerCorrect, setAnswerCorrect] = useState(null);

  const handleOptionClick = (selectedOption) => {
    const currentQuestion = questionsData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setAnswerCorrect(true);
    } else {
      setAnswerCorrect(false);
    }

    // Move to the next question
    setTimeout(() => {
      if (currentQuestionIndex < questionsData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswerCorrect(null);
      }
    }, 1000); // Delay to show correct/incorrect colors
  };

  const handleSkipClick = () => {
    // Mark the current question as skipped

    setAnswerCorrect(false); // Reset answer status
    // Move to the next question
    setTimeout(() => {
      // Mark the current question as skipped
      setSkippedQuestions([...skippedQuestions, currentQuestionIndex]);
      setAnswerCorrect(null); // Reset answer status

      // Move to the next question
      setTimeout(() => {
        if (currentQuestionIndex < questionsData.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
      }, 1000); // Delay to move to the next question
    }, 1000); // Delay to show the answer status
  };

  return (
    <div className="App">
      {currentQuestionIndex < questionsData.length ? (
        <>
          <Question
            questionData={questionsData[currentQuestionIndex]}  // Passing correct question data
            handleOptionClick={handleOptionClick}
            handleSkipClick={handleSkipClick}
            answerCorrect={answerCorrect}
          />
          <Score score={score} />
        </>
      ) : (
        <Result score={score} />
      )}
    </div>
  );
}

export default App;
