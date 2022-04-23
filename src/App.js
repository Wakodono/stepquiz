import React from 'react'
import { useState } from 'react'
import { questions } from './api/questions'

const App = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}

	};

  const handleRestart = () => {
    setCurrentQuestion(0)
    setShowScore(false)
    setScore(0)
  }

  return (
    <div className='app'>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button onClick={() => handleRestart()} className="restart">Want a redo?</button>
        </div>
      ) : (
        <>

         <div className="question-section">
           <div className="question-count">
           <span>Question {currentQuestion + 1}</span>/{questions.length}
           </div>
           <div className="qustion-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {
            
              questions[currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))
            
            }
          </div>

        </>
      )}
    </div>
  )
}

export default App
