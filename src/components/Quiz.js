import React from 'react'
import Question from './Question'
import AnswerOption from './AnswerOption'
import QuestionCount from './QuestionCount'

const Quiz = (props) => {
    const renderAnswerOptons = (key) => {
        return (
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        )
    }
  return (
    <div className='quiz'>
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <Question content={props.question} />
        <ul className='answerOptions'>
            {props.answerOptions.map(renderAnswerOptions)}
        </ul>
    </div>
  )
}

export default Quiz