import { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  align-self: center;
  border-radius: 12px;
  padding: 32px;
  background: #fafafa;
`;

const Button = styled.button`
  width: 120px;
  margin: ${(props) => (props.withHorizontalMargin ? "12px" : "12px 0")};
  padding: 12px;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) => (props.disabled ? "#9aa7f0" : "#f1f5ff")};
  background: ${(props) => (!props.disabled ? "#9aa7f0" : "#f1f5ff")};

  &:active {
    opacity: 0.7;
  }
`;

const ClockFace = styled.div`
  text-align: center;

  & > div {
    border-radius: 12px;
    margin-bottom: 16px;
    padding: 32px;
    border: 3px solid #efefef;

    h1 {
      color: #989898;
      font-size: 5rem;
    }
  }
`;

function StyledTimer() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const interval = useRef();

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      interval.current = setInterval(() => {
        setTimer((oldTimer) => oldTimer + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(interval.current);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsRunning(false);
    clearInterval(interval.current);
  };

  return (
    <Container>
      <ClockFace>
        <div>
          <h1>{timer}</h1>
        </div>
      </ClockFace>
      <Button disabled={isRunning} onClick={startTimer}>
        Avvia
      </Button>
      <Button
        disabled={!isRunning}
        withHorizontalMargin={true}
        onClick={stopTimer}
      >
        Stop
      </Button>
      <Button onClick={resetTimer}>Reset</Button>
    </Container>
  );
}

export default StyledTimer;
