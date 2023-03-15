import React from 'react'
import { questions } from './quetions'
import './home.css'
const Quizresult = (props) => {
  return (
    <>


    <div className='quizresultpage'>

      <h2>Quiz completed ! </h2>
      <h3>Your Score : {props.score}</h3>
      <h3>Your correct ans is : {props.correctans} out of {questions.length}</h3>
      <button onClick={props.playAgain}>play again !</button>
    </div>
   

    </>
  )
}

export default Quizresult
