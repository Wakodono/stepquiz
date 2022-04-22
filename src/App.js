import './App.css';
import { useState, useEffect } from 'react'; 
import Question from './components/Question';
import quizQuestions from './api/quizQuestions';
import stepOutput from './StepOutput.json';

function App() {
  const question = stepOutput.data.getStep
  const [state, setstate] = useState({
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
        <h2>Step Quiz</h2>
        <Question content={question.stepQuiz.questionText} />
      </div>
    </div>
  );
}

export default App;
