import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";

import useInterval from "hooks/useInterval";

const calculateTimeLeft = (secondsLeft: number) => {
  const minutes = Math.floor(secondsLeft / 60) || 0;
  const seconds = Math.floor(secondsLeft - minutes * 60) || 0;

  return { minutes, seconds };
};

const PomodoroTimer = () => {
  const initialTime = 1500; // 25 minutes * 60 seconds

  const { minutes: initialMinutes, seconds: initialSeconds } =
    calculateTimeLeft(initialTime);

  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [minutesLeft, setMinutesLeft] = useState(initialMinutes);
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false)

  const updateTimer = () => {
    if (timeLeft > 0) {
      const newTimeLeft = timeLeft - 1;
      const { minutes, seconds } = calculateTimeLeft(newTimeLeft);
      setTimeLeft(newTimeLeft);
      setSecondsLeft(seconds);
      setMinutesLeft(minutes);
    }
  };

  const handlePlayPause = () => setIsRunning(!isRunning)

  const handleReset = () => {
    const { minutes, seconds } = calculateTimeLeft(initialTime);
      setTimeLeft(initialTime);
      setSecondsLeft(seconds);
      setMinutesLeft(minutes);
  }

  useInterval(() => {
    if(isRunning) {
      updateTimer();
    }
  }, 1000);

  const numberForTimer = (number: number) =>
    number < 0 ? "00" : number < 10 ? `0${number}` : number;

  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      <Heading size="3xl">Pomodoro</Heading>
      <button onClick={handlePlayPause}>{isRunning ? "PAUSE" : "PLAY"}</button>
      <button onClick={handleReset}>Reset</button>
      <Box bg="rgba(255, 255, 255, 0.1)">
        <Heading size="xl">
          {numberForTimer(minutesLeft)}:{numberForTimer(secondsLeft)}
        </Heading>
      </Box>
    </Box>
  );
};

export default PomodoroTimer;
