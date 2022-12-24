import React,{ useState, useEffect }  from "react"
import Timer from "./Timer"
import QUIZ from "../quiz"
import '../css/GoldenBell.css';

export default function GoldenBell (props) {
  const [ is, setIs ] = useState({questionOpen : false, answerOpen : false, timeUp : false, sound : false})
  const [ questionNumber, setQuestionNumber ] = useState(0)
  const { type, question , selection, answer, min, sec, score } = QUIZ[questionNumber]
  //event-handler
  const next = () => {
    if (questionNumber < QUIZ.length-1){
      setQuestionNumber(questionNumber+1);
      setIs({
        questionOpen : false,
        answerOpen : false,
        timeUp : false,
        sound : false
      })
    }
  }
  const before = () => {
    if (questionNumber >= 1){
      setQuestionNumber(questionNumber-1);
      setIs({
        questionOpen : false,
        answerOpen : false,
        timeUp : false,
        sound : false
      })
    }
  }
  const showQuestion = () =>{
    setIs({...is, questionOpen : true })
  }
  const showAnswer = () =>{
    if (is.questionOpen&&type==="shortAnswer"){
      setIs({...is, answerOpen : true })
    }
    else{
      setIs({...is, answerOpen : true })
    }
  }
  const checkAnswer = (index) => {
    if (index + 1 === answer && is.answerOpen){
      return "answer"
    }
  }
  return(
    <div className="question-wrap">
        <span className="logo">글경제 골든벨</span>
      <div className="question-nav">
        <span className="btn-before" onClick={before}>{"이전 문제"}</span>
        { !is.questionOpen && <span className="btn-answer" onClick={showQuestion}>문제 보기</span>}
        { is.questionOpen && <span className="btn-answer" onClick={showAnswer}>정답 보기</span>}
        <span className="btn-next" onClick={next}>{"다음 문제"}</span>
      </div>
        {is.questionOpen && <Timer min={min} sec={sec} is={is} setIs={setIs}/>}
        {is.sound&&
        <audio controls preload="auto" autoPlay={true}>
          <source src="MP_TaDa.mp3" type="audio/mpeg"/>
        </audio>}
        {!is.questionOpen &&
        <>
          <h1 className="name">Q{questionNumber+1}</h1> 
          <h1 className="time-limit">시간 {sec}초</h1> 
          <h1 className="score">점수 {score}점</h1> 
        </>}
        {type === "shortAnswer" &&
        <>
          {is.questionOpen &&
          <>
            <h1 className="question">{question}</h1>
          </> }
          { is.answerOpen &&
            <h1 className="short-answer">{answer}</h1> }
        </>}
        {type === "multipleChoice" && is.questionOpen &&
        <>
          <h1 className="question">{question}</h1>
          <ul className="selection">
            {selection.map((choice, index) =>
              <li
                key={choice}
                className={checkAnswer(index)}
              > {index+1}) {choice} </li>
            )}
          </ul>
        </>}
    </div>
  )
}