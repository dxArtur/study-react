import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Emotional from './components/Emotional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
        <Emotional />
      </header>
    </div>
  );
}

export default App;
