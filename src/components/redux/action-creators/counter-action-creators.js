import {
  DECREASE_COUNTER,
  INCREASE_COUNTER,
} from "../action-types/counter-action-types";

export function increaseCounter() {
  return {
    type: INCREASE_COUNTER,
  };
}

export function decreaseCounter() {
  return {
    type: DECREASE_COUNTER,
  };
}
