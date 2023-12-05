import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter();

  return (
    <Card>
      <p style={{ color: "green" }}>Forward Counter</p>
      {counter}
    </Card>
  );
};

export default ForwardCounter;
