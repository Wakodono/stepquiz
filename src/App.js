import './App.css';
import { useState, useEffect } from 'react'; 
import Question from './components/Question';
import Quiz from './components/Quiz';
import quizQuestions from './api/quizQuestions';
import stepOutput from './StepOutput.json';

function App() {
  const question = stepOutput.data.getStep
  const [state, setState] = useState({
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    answerCount: {
      nintendo: 0,
      microsoft: 0,
      sony: 0,
    },
    result: ''
  })

  useEffect(() => {
    const shuffleAnswerOptions = quizQuestions.map((question) => shuffleArray(question.answers))
    setState({
      question: quizQuestions[0].question,
      answerOptions: shuffleAnswerOptions[0]
    })
  
  }, [])

  const shuffleArray = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex

    //while there remain elements to shuffle
    while (0 !== currentIndex) {
      //pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      //swap it with the current element
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }
  
  
  return (
    <div className="App">
      <div className='App-header'>
        <h2>React Quiz</h2>
      </div>
      <Quiz 
        answer={state.answer}
        answerOptions={state.answerOptions}
        questionId={state.questionId}
        question={state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={(e) => handleAnswerSelected(e)}
      />
    </div>
  );
}

export default App;
