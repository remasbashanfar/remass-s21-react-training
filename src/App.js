import logo from './logo.svg';
import './App.css';

function App() {
  const variable= "french fries";
  function getsnack(){
    return variable;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {getsnack()}

          Edit <code>src/App.js
          
          </code> and save to reload.
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        hi
        </a>
      </header>
    </div>
  );
}

export default App;
