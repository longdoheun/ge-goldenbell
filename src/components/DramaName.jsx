import React,{ useState }  from "react"
import '../css/DramaName.css';

function DramaName (props) {
  console.log(props.question)
  const [ defaultIdx, setDefaultIdx ] = useState(0)
  const { setQuestion, setIsHome, question } = props
  const { quiz, tries, image, name } = question.type
  const [ isQuestionOpen, setIsQuestionOpen ] = useState(false)
  const [ isAnswerOpen, setIsAnswerOpen ] = useState(false)

  const showQuestion= () =>{
    setIsQuestionOpen(true)
  }
  const answer = () =>{
    if (quiz){
      setIsAnswerOpen(true)
    }
    else if (image[tries][2]){
      setDefaultIdx(2);
      setIsAnswerOpen(true)
    } else{
    setIsAnswerOpen(true)
    }
  }
  const sucess = () => {
    question.finish = 0.6;
    setQuestion();
    setIsHome(true);
    question.type.tries+=1
  }
  const fail = () => {
    setQuestion()
    setIsHome(true)
    question.type.tries+=1
  }
  const checkQuestion = (tries, quiz) => {
    if (quiz&&tries<quiz.length){
      return true;
    } 
    else{
      return false;
    }
  }
  return(
    <div className="question-wrap">
      <div>
        <span className="btn-answer" onClick={showQuestion}>문제</span>
        <span className="btn-answer" onClick={answer}>정답</span>
        <span className="btn-sucess" onClick={sucess}>성공</span>
        <span className="btn-fail" onClick={fail}>실패</span>
      </div>
        {!isQuestionOpen&&<h1 className="name">{name}</h1>}
        {isQuestionOpen&&checkQuestion(tries, quiz)&&
          <h1 className="question">{quiz[tries][0]}</h1>}
        {isAnswerOpen&&checkQuestion(tries, quiz)&&
          <h1 className="answer">{quiz[tries][1]}</h1> }
        {isQuestionOpen&&checkQuestion(tries, image)&&
          <img
            className="img-question"
            src={image[tries][defaultIdx]}
          />}
        {isAnswerOpen&&checkQuestion(tries, image)&&
          <h1 className="answer">{image[tries][1]}</h1> }
    </div>
  )
}
export default DramaName;