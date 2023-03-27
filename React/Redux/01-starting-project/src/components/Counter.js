import classes from "./Counter.module.css";
import { useSelector, useDispatch, useStore, connect } from "react-redux";
import { counterActions } from "../store/counter";
// import { Component } from "react";5

const Counter = () => {
  const counter = useSelector((state) => {
    console.log(state);
    return state.counter.counter;
  });
  const toggleCounterHandler = () => {
    // dispatch({ type: "toggleCounter" });
    dispatch(counterActions.toggleCounter());
  };
  const showCounter = useSelector((state) => state.counter.showCounter);
  const store = useStore();
  const dispatch = useDispatch();
  console.log(dispatch);
  console.log(store, store.getState());
  function incrementHandler() {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  }
  function decrementHandler() {
    // dispatch({ type: "decrement" });

    dispatch(counterActions.decrement());
  }

  function increaseHandler() {
    // dispatch({ type: "increase", value: 5 });
    dispatch(counterActions.increase(5));
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment </button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler = () => {
//     console.log(this);
//     this.props.increment();
//   };
//   decrementHandler = () => {
//     this.props.decrement();
//   };
//   increaseHandler = () => {
//     this.props.increase();
//   };
//   toggleCounterHandler = () => {
//     this.props.toggleCounter();
//   };
//   render() {
//     console.log(this.props, this.state);
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         {this.props.showCounter && (
//           <div className={classes.value}>{this.props.counter}</div>
//         )}
//         <div>
//           <button onClick={this.incrementHandler}>Increment </button>
//           <button onClick={this.decrementHandler}>Decrement</button>
//           <button onClick={this.increaseHandler}>Increase by 5</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// function mapStateToProps(state) {
//   return { counter: state.counter, showCounter: state.showCounter };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//     increase: () => dispatch({ type: "increase", value: 5 }),
//     toggleCounter: () => dispatch({ type: "toggleCounter" }),
//   };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
