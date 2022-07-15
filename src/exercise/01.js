// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)

  // const countReducer = (state, action) => ({
  //   ...state, 
  //   ...(typeof action === 'function' ? action(state) : action )
  // });
    const countReducer = (state, action) => {
      const {type, step} = action;
      if (type === 'INCREMENT') {
        return {
          ...state,
          count: state.count + step,
        };
      } else return "error"
    };

  // const [state, setState] = React.useReducer(countReducer, {
    const [state, dispatch] = React.useReducer(countReducer, {
      count: initialCount,
    });
  const {count} = state;

  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  // const increment = () => setState(currentState => ({count: currentState.count + step}));
  const increment = () => dispatch({type: 'INCREMENT', step});
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App

