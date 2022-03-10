import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCounter,
  increaseCounter,
} from "./redux/action-creators/counter-action-creators";

function Child1() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increaseCounter())}>Incrementa</button>
      <button onClick={() => dispatch(decreaseCounter())}>Decrementa</button>
    </>
  );
}

export default Child1;
