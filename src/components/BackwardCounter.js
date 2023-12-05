import Card from "./Card";
import useCounter from "../hooks/use-counter";

const BackwardCounter = () => {
  const counter = useCounter(false);

  return (
    <Card>
      <p style={{ color: "red" }}>Backward Counter</p>
      {counter}
    </Card>
  );
};

export default BackwardCounter;
