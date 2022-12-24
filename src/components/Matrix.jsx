import React from "react"
import '../css/matrix.css';
import INFO from "../info"

function Matrix (props) {
  const { setIsHome, setQuestion } = props
  
  const onClick = (e) => {
    setIsHome(false)
    setQuestion(INFO[e.target.id])
  }
  return(
    <div className="matrix-wrap">
      <div className="matrix-padding"/>
      <ul className="matrix">
        {[1,2,3,4,5].map(row=>
          <li>
            <ul>
              {[1,2,3,4,5].map(col=>
                <li 
                    key={`num${(row-1)*5 + col}`}
                    id= {`num${(row-1)*5 + col}`}
                    style={{opacity:INFO[`num${(row-1)*5 + col}`].finish}}
                >
                  <img
                    className="star"
                    id= {`num${(row-1)*5 + col}`}
                    onClick={onClick}
                    src="./picture/starblock.svg"
                  />
                  <p
                    id= {`num${(row-1)*5 + col}`}
                    onClick={onClick}
                  >{(row-1)*5 + col}</p>
                </li>
              )}
            </ul>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Matrix;