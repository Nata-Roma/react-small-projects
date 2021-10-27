import { useEffect, useState } from 'react';
import './countdownTimer.css';

export const timeInit = {
  minute10: '0',
  minute: '0',
  second10: '0',
  second: '0',
};

export const getCurrentTime = (time: number) => {
  const minutes = Math.floor(time / 1000 / 60);
  const seconds = (time / 1000) % 60;
  const currentTime = {
    minute10: `${minutes < 10 ? '0' : minutes.toString()[0]}`,
    minute: `${minutes < 10 ? minutes.toString()[0] : minutes.toString()[1]}`,
    second10: `${seconds < 10 ? '0' : seconds.toString()[0]}`,
    second: `${seconds < 10 ? seconds.toString()[0] : seconds.toString()[1]}`,
  };
  return currentTime;
};

export const timerInit = 500000;

export const CountdownTimer = () => {
  const [timer, setTimer] = useState(timerInit);
  const [currentTime, setCurrentTime] = useState(timeInit);
  const [isStart, setStart] = useState(false);
  const [isResume, setResume] = useState(false);

  const onStartTimer = () => {
    if (!isStart) {
      setStart((prev) => !prev);
      setResume((prev) => !prev);
    } else {
      setStart(false);
      setResume(false);
      setTimer(timerInit);
      setCurrentTime(getCurrentTime(timerInit));
    }
  };

  const onResumeTimer = () => {
    if (isStart) {
      setResume((prev) => !prev);
    }
  };

  useEffect(() => {
    let countDownTimer = 0;
    if (isResume) {
      const start = (time: number) => {
        if (timer <= 0) {
          clearTimeout(countDownTimer);
        } else {
          countDownTimer = window.setTimeout(() => {
            setCurrentTime(getCurrentTime(time - 1000));
            setTimer((prev) => prev - 1000);
            start(time - 1000);
          }, 1000);
        }
      };
      start(timer);
    }
    return () => {
      clearTimeout(countDownTimer);
    };
  }, [isResume, timer]);

  useEffect(() => {
    setCurrentTime(getCurrentTime(timerInit));
  }, []);

  return (
    <div>
      <div className='timer-container'>
        <div className='timer-number timer-number-left'>
          {currentTime.minute10}
        </div>
        <div className='timer-number timer-number-left'>
          {currentTime.minute}
        </div>
        <div className='timer-number timer-divider'>:</div>
        <div className='timer-number timer-number-right'>
          {currentTime.second10}
        </div>
        <div className='timer-number timer-number-right'>
          {currentTime.second}
        </div>
      </div>
      <div className='timer-controls'>
        <button className='timer-button' onClick={onStartTimer}>
          {isStart ? 'Clear' : 'Start'}
        </button>
        <button className='timer-button' onClick={onResumeTimer}>
          {!isStart ? 'Stop' : isStart && isResume ? 'Stop' : 'Resume'}
        </button>
      </div>
    </div>
  );
};
