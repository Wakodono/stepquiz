import React from 'react'

const Result = (props) => {
  return (
    <div className='result'>
        You prefer <strong>{props.quizResult}</strong>
    </div>
  )
}

export default Result