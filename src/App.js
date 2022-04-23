import './App.css';
import { useState, useEffect } from 'react';
import update from 'react-addons-update' 
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

  const handleAnswerSelected = (event) => {
    setUserAnswer(event.currentTarget.value);

    if (state.questionId < quizQuestions.length) {
      setTimeout(() => setNextQuestion(), 300);
    } else {
      setTimeout(() => setResults(getResults()), 300);
    }
  }

  const setUserAnswer = (answer) => {
    setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  const setNextQuestion = () => {
    const counter = state.counter + 1;
    const questionId = state.questionId + 1;

    setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  const getResults = () => {
    const answersCount = state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  const setResults = (result) => {
    if (result.length === 1) {
      setState({ result: result[0] });
    } else {
      setState({ result: 'Undetermined' });
    }
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
