import React from "react";

type Props = {
  step?: number;
  increment?: any;
  decrement?: any;
  children?: React.ReactNode;
};

const Counter = (props: Props) => {
  const step = props.step ? props.step : 1;

  const [count, setCount] = React.useState(0); //App state

  const decrement = () => {
    setCount(count - step);

    if (props.decrement) {
      props.decrement();
    }
  };

  const increment = () => {
    setCount(count + step);
    if (props.increment) {
      props.increment();
    }
  };

  // Prev state -> Next state (Change detection = Angular, Svelte = Reactivity, React= reconciliation)
  return (
    <span>
      <button onClick={decrement}>-</button>
      <span>{props.children ? props.children : count}</span>
      <button onClick={increment}>+</button>
    </span>
  );
};

export default Counter;
