/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-29 18:59:51
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-30 16:47:03
 */
import React, { useEffect } from "react";

const init = (initCount: number) => {
  return { count: initCount };
};

const reducer = (state: { count: number }, action: { type: string, payload?: number }) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload || 0);
    default:
      throw new Error();
  }
};

const Counter = (props: { initCount: number, title: string }) => {
  const { initCount = 0, title } = props;
  const [state, dispatch] = React.useReducer(reducer, initCount, init);

  useEffect(() => {
    document.title = `${title} ${state.count}`
  }, []);

  return (
    <div>
      <p>Counter: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset", payload: initCount })}>
        reset
      </button>
    </div>
  );
};

export default Counter

