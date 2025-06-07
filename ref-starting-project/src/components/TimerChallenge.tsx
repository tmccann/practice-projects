import { useRef, useState } from "react";
import ResultsModal from "./ResultsModal";

type TimerChallengeProps = {
  title: string;
  targetTime: number;
};

const TimerChallenge = ({ title, targetTime }: TimerChallengeProps) => {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timer = useRef<NodeJS.Timeout | null>(null);
  const modal = useRef<{ open(): void }>(null);
  const millisecTargetTime = targetTime * 1000;
  const timerIsActive = timeRemaining > 0 && timeRemaining < millisecTargetTime;

  if (timeRemaining <= 0) {
    if (timer.current !== null) {
      clearInterval(timer.current);
    }
    modal.current?.open();
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimerRemaing) => prevTimerRemaing - 10);
    }, 10);
  };
  const handleStop = () => {
    modal.current?.open();
    if (timer.current !== null) {
      clearInterval(timer.current);
    }
  };

  const onReset = () => {
    setTimeRemaining(millisecTargetTime);
  };

  return (
    <>
      <ResultsModal
        ref={modal}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        onReset={onReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
