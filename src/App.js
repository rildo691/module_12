import './App.css';
import { useCount } from './useCount';
import { useToggle } from './useToggle';

function App() {
  //const [isVisible, toggle] = useToggle()
  
  const {count, increase, decrease, restart} = useCount()

  return (
    <div className="App">
      {count}
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={restart}>Restart</button>
    </div>
  );
}

export default App;


/**
 * Previous example
 * 
 * //const {state: isVisible, toggle} = useToggle()
 * 
 * <button onClick={toggle}>
      {isVisible ? "Hide" : "Show"}
    </button>
    {isVisible && <h1>Hidden Text</h1>}
 * 
 */