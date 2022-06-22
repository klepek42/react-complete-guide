import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter();
  console.log("counter", counter);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
