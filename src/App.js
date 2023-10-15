import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Emotional from './components/Emotional';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
        <Emotional />
        <Form />
      </header>
    </div>
  );
}

export default App;
