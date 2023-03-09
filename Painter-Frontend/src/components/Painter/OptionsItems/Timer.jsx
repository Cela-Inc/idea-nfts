import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { usePainterStore } from "../../../hooks/use-painter-store.hook";

const Timer = () => {
  const { timerOptions, gameFinished, timerPaused } = usePainterStore();
  const ref = useRef();
  const [percent, setPercent] = useState(0);
  const [duration, setDuration] = useState(60 * timerOptions.selected.time);

  useEffect(() => {
    let interval;
    if (!gameFinished || duration >= 0) {
      interval = setInterval(() => {
        if (timerPaused) return;
        setDuration(duration - 1);
        let timer = duration,
          minutes,
          seconds;
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        usePainterStore.setState({
          timerOptions: { ...timerOptions, timeLeft: timer },
        });

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        ref.current.textContent = minutes + ":" + seconds;

        if (gameFinished || duration <= 0) {
          usePainterStore.setState({ gameFinished: true });
          return clearInterval(interval);
        }
        setPercent(percent + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [percent, timerPaused]);

  return (
    <Flex flexDir={"column"} justifyContent={"center"} color={"#fff"}>
      <Text>Time Left</Text>
      <Text
        fontSize={["3em", "3em", "5em", "5em"]}
        lineHeight={[0.8, 0.8, 1, 1]}
        fontFamily={"DigitalDisplay"}
        ref={ref}
      >
        {timerOptions.selected.text}
      </Text>
    </Flex>
  );
};

export default Timer;
