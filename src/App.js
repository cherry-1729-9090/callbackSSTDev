import './App.css';
import { useState,useCallback } from 'react';
import React from 'react';

function App() {
  const [count, setCount] = useState(0);
  const incr = useCallback(() => {
    setCount(count + 1);
  },[count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
    <div>
        <input />
        <button onClick={increment}>Increment</button>
      </div>
      <p>Parent count: {count}</p>
      <ChildCounter count={count} onClick={increment}/>
    </div>
  );
}

export default App;

const ChildCounter = React.memo(function({ count }) {
  console.log('ChildCounter')
  return (
    <div>
      <p>Child counter: {count}</p>
    </div>
  );
});