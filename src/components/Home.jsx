import React, { useState } from 'react'
import './home.css'
import { questions } from './quetions'
import Quizresult from './Quizresult'
const Home = () => {

  const [question, setquestion] = useState(0)
  const [score, setscore] = useState(0)
  const [correctans, setcorrectans] = useState(0)
  const [showresult, setshowresult] = useState(false)
  const [clicked, setclicked] = useState(false)


  function handleanswer(iscorrect) {
    if (iscorrect) {
      setscore(score + 1)
      setcorrectans(correctans + 1)
    }
    setclicked(true)
  }
  function nextQuestion() {
    setclicked(false)
    const listofquestion = question + 1;
    if (listofquestion < questions.length) {

      setquestion(listofquestion)
    } else {
      setshowresult(true)
    }
  }

const playAgain=()=>{
  setquestion(0)
  setshowresult(false)
  setcorrectans(0)
  setscore(0)
}


  return (
    <>
      <div className='container'>
        { showresult ? (<Quizresult score={score} correctans={correctans} playAgain={playAgain} />) : (<>

          <div className='bodydiv1'>
            <h2>PLAY QUIZ</h2>
            <div className='score'>current score:{ score }</div>
          </div>


          <div className='bodydiv2'>

            <div className='listofquestion'>Question { question + 1 } out of { questions.length }</div>

            <div className="questiondiv">
              { questions[question].Questiontag }
            </div>


            <div className="optiondiv">

              { questions[question].answeroptions.map((ele, i) => {
                return <div  className={`${clicked && ele.iscorrect ?'correct':'options'}`} disabled={clicked} key={ i } onClick={ () => handleanswer(ele.iscorrect) }> { ele.answeroption } </div>
              }) }

              <div className='buttons'>
                <button onClick={playAgain}>reset</button>
                <button disabled={!clicked} onClick={ nextQuestion }>next</button>
              </div>
            </div>


          </div>

        </>) }


      </div>
    </>
  )
}

export default Home;
