import { useEffect, useState } from "react";
import { Timer } from "../components/timer/timer";
import Dino from "../components/Dino/Dino";

export function Home() {
  const [shouldRenderDino, setShouldRenderDino] = useState(false);
  const [timerScore, setTimerScore] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    const handleSpaceKey = (e) => {
      if (e.code === "Space") {
        setShouldRenderDino(true);
        setStartTimer(false);
      }
    };

    document.addEventListener("keydown", handleSpaceKey);

    return () => {
      document.removeEventListener("keydown", handleSpaceKey);
    };
  }, []);

  const handleStartTimer = () => {
    setStartTimer(true);
  };

  return (
    <>
      <div>Pressione espaço para começar</div>
      {shouldRenderDino && (
        <Dino
          shouldRender={shouldRenderDino}
          setShouldRender={setShouldRenderDino}
          setTimerScore={setTimerScore}
        />
      )}
      {timerScore !== 0 && (
        <>
          <div>
            Timer disponível: {Math.floor(timerScore / 60)} minuto(s) e{" "}
            {timerScore % 60} segundos
          </div>
          {!startTimer && (
            <div>
              <button type="button" onClick={handleStartTimer}>
                Começar Timer de {timerScore} segundos
              </button>
            </div>
          )}
          {startTimer && <Timer secondsGiven={timerScore} />}
        </>
      )}
    </>
  );
}
