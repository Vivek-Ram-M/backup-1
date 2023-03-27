// import redux from ""
function reducerFunction(state = { count: 0 }, action) {
  if (action.type === "increment") {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      count: state.count - 1,
    };
  }
  return { count };
}

const store = redux.createStore(reducerFunction);

const subscriber = () => {
  store.getState();
};

store.subscribe(subscriber);
