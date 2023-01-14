import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import {
  AiFillPlayCircle as PlayIcon,
  AiFillPauseCircle as PauseIcon,
  AiOutlineReload as ResetIcon,
} from "react-icons/ai";

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
  const [isRunning, setIsRunning] = useState(false);

  const updateTimer = () => {
    if (timeLeft > 0) {
      const newTimeLeft = timeLeft - 1;
      const { minutes, seconds } = calculateTimeLeft(newTimeLeft);
      setTimeLeft(newTimeLeft);
      setSecondsLeft(seconds);
      setMinutesLeft(minutes);
    }
  };

  const handlePlayPause = () => setIsRunning(!isRunning);

  const handleReset = () => {
    const { minutes, seconds } = calculateTimeLeft(initialTime);
    setTimeLeft(initialTime);
    setSecondsLeft(seconds);
    setMinutesLeft(minutes);
  };

  useInterval(() => {
    if (isRunning) {
      updateTimer();
    }
  }, 1000);

  const numberForTimer = (number: number) =>
    number < 0 ? "00" : number < 10 ? `0${number}` : number;

  return (
    <Box bg="purple.500" w="100%" borderRadius="lg">
      <Box
        w="100%"
        h="100%"
        bg="rgba(255, 255, 255, 0.1)"
        p={8}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading size="2xl" mb="8" color="purple.700">
          Pomo
        </Heading>

        <Heading
          size="4xl"
          borderRadius="md"
          mb="4"
          color={isRunning ? "" : "purple.700"}
        >
          {numberForTimer(minutesLeft)}:{numberForTimer(secondsLeft)}
        </Heading>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb="4"
          color="purple.700"
        >
          <button onClick={handlePlayPause}>
            {isRunning ? <PauseIcon size={40} /> : <PlayIcon size={40} />}
          </button>
          <button onClick={handleReset}>
            <ResetIcon size={40} />
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default PomodoroTimer;
