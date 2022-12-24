import React, { useState, useEffect } from "react";
import { ReactComponent as TimerSvg } from "../picture/clock.svg";
export default function Timer(props) {
  const { is, setIs } = props;
  const [current, setCurrent] = useState({ min: props.min, sec: props.sec });
  const DURATION = 1000;
  const adjust = (unit) => (unit < 10 ? `0${unit}` : unit);
  //function concerned with time
  useEffect(() => {
    setTimeout(() => {
      let currentMin = current.min;
      let currentSec = current.sec;
      // console.log(current)
      if (currentMin === 0 && currentSec === 0) {
        setIs({ ...is, timeUp: true });
      } else {
        if (currentSec === 0) {
          currentMin -= 1;
          currentSec = 60;
        }
        if (currentMin === 0 && currentSec === 2) {
          setIs({ ...is, sound: true });
        }
        currentSec -= 1;
        setCurrent({ min: currentMin, sec: currentSec });
      }
    }, DURATION);
  }, [current]);
  return (
    <span className="timer">
      <TimerSvg style={{ width: "50px", height: "50px" }} />
      <span>
        {adjust(current.min)} : {adjust(current.sec)}
      </span>
    </span>
  );
}
