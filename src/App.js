import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div>
        <input />
        <button onClick={increment}>Increment</button>
      </div>
      <p>Parent count: {count}</p>
      <ChildCounter count={count} />
    </div>
  );
}

export default App;

const ChildCounter = React.memo(function({ count }) {
  return (
    <div>
      <p>Child counter: {count}</p>
    </div>
  );
});