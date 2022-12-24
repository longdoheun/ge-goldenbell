import React from "react"
import '../css/background.css';

function  Background (props) {
  return(
    <>
      <div className="clouds">
        <img className="cloud-1" src="./picture/cloud1.svg"/>
        <img className="cloud-2" src="./picture/cloud2.svg"/>
        <img className="cloud-3" src="./picture/cloud1.svg"/>
        <img className="cloud-4" src="./picture/cloud2.svg"/>
      </div>
    <div className="con2">
      {false&&<div className="downgrass">
        <img className="green-1" src="./picture/green-1.svg"/>
        <span/>
        <img className="green-2" src="./picture/green-2.svg"/>
      </div>}
      <div className="img-wrap">
        <div className="ongrass">
          <div/>
          <img className="dragon" src="./picture/dragon.svg"/>
          <span/>
          <img className="coin" src="./picture/coin.svg"/>
          <img className="coin" src="./picture/coin.svg"/>
          <img className="coin" src="./picture/coin.svg"/>
        </div>
          <img className="grass" src="./picture/grass.svg"/>
      </div>
    </div>
    </>
  )
}
export default Background;