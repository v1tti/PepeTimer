import { useState, useEffect } from "react";
import timerSound from './timer.mp3'
import './timer.css';

export function Timer({ secondsGiven }) {
  const [timeRemaining, setTimeRemaining] = useState(3);

  useEffect(() => {
    if (timeRemaining <= 0) {
      const alarm = new Audio(timerSound); 
      alarm.play();
      return;
    }

    const interval = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="timer">
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}
