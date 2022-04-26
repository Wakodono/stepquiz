import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import steps from "./StepOutput.json";

const App = () => {
//   const stepQuiz = steps.data.getStep.stepQuiz;
//   Object.entries(stepQuiz)

//   console.log(stepQuiz);

  const questions = steps.data.getStep.stepQuiz;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    // const nextQuestion = currentQuestion + 1;
    // if (nextQuestion < questions.length) {
    // 	setCurrentQuestion(nextQuestion);
    // } else {
    // 	setShowScore(true);
    // }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <Container>
    	<Row>
    		<Col xs={6}>
    			<div className="app">
			      {showScore ? (
			        <div className="score-section">
			          You scored {score} out of {questions.length}
			        </div>
			      ) : (
			        <>
			          <div className="question-section">
			            {/* <div className='question-count'>
										<span>Question 1</span>/{questions.length + 1}
									</div> */}
			            <div className="question-text">
			              <h3>{questions.questionText}</h3>
			            </div>
			            <div className="question-text">
			              <p>Choose all the correct options</p>
			            </div>
			          </div>
			          <div className="answer-section">
			            {questions.answerOptions.map((answerOption, index) => (
			              <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} key={index}>
			                {answerOption.answerText}
			              </button>
			            ))}
			          </div>
			        </>
			      )}
			    </div>
    		</Col>
    	</Row>
    </Container>
  );
};

export default App;
