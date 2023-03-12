import logo from './vlogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <b>vikasana</b> <button align="center">+ new project</button>
        <button>**update**</button>
      </header>
    </div>
  );
}

export default App;
