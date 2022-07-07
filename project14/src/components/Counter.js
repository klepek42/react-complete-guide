import classes from "./Counter.module.css";

const Counter = () => {
  const toggleCounterHandler = () => {
    store.dispatch({ type: "increment" });
    // store.dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
