import React from "react";

type ItemProps = {
  children?: React.ReactNode;
};

function Item(props: ItemProps) {
  console.log("Rendering");
  return <li>{props.children}</li>;
}

const MemoizedItem = React.memo(Item);

type ListState = {
  id: number;
  value: number;
};

function List() {
  const [fontSize, setFontSize] = React.useState(16);
  const [array, setArray] = React.useState<ListState[]>([
    {
      id: 1,
      value: 1,
    },
    {
      id: 2,
      value: 2,
    },
    {
      id: 3,
      value: 3,
    },
  ]);

  function handleSquareClick() {
    setArray(
      array.map((x) => {
        return {
          id: 1,
          value: x.value ** 2,
        };
      })
    );
  }

  function handleFontIncrease() {
    setFontSize((prev) => prev + 4);
  }

  return (
    <div>
      <button onClick={handleSquareClick}>^2</button>
      <button onClick={handleFontIncrease}>Increase font size</button>
      <ul style={{ fontSize: `${fontSize}px` }}>
        {array.map((element) => (
          <MemoizedItem key={element.id}>{element.value}</MemoizedItem>
        ))}
      </ul>
    </div>
  );
}

function ReactFiber() {
  return (
    <div>
      <List />
    </div>
  );
}

export default ReactFiber;
