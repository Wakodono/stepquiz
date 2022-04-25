import React from 'react'
import { useState } from 'react'
import steps from './StepOutput.json'

const App = () => {
  const scoreTotal = steps.data.getStep.stepQuiz.answerOptions.length
//   const questions = steps.data.getStep.stepQuiz.answerOptions.map((question) => {
// 	  return (question.answerText)
//   })
const questions = steps.data.getStep.stepQuiz

  console.log(questions)


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
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{false ? (
				<div className='score-section'>You scored 1 out of {scoreTotal}</div>
			) : (
				<>
					<div className='question-section'>
						{/* <div className='question-count'>
							<span>Question 1</span>/{questions.length + 1}
						</div> */}
						<div className='question-text'><h3>{questions.questionText}</h3></div>
					</div>
					<div className='answer-section'>
						{
							questions.answerOptions.map((answerOption, index) => (
								<button>{answerOption.answerText}</button>
							))
						}
					</div>
				</>
			)}
		</div>
	);
}

export default App
