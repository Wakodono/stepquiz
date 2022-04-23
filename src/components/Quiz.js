import React from 'react'
import Question from './Question'
import AnswerOption from './AnswerOption'
import QuestionCount from './QuestionCount'
import { CSSTransitionGroup } from 'react-transition-group'

const Quiz = (props) => {
    const renderAnswerOptions = (key) => {
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
    <CSSTransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
    >
        <div key={props.questionId}>
            <QuestionCount counter={props.questionId} total={props.questionTotal} />
            <Question content={props.question} />
            <ul className='answerOptions'>
                {props.answerOptions.map(renderAnswerOptions)}
            </ul>
        </div>
    </CSSTransitionGroup>
  )
}

export default Quiz