import mainBalconyView from './images/balconyview.jpg';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-main">
        <img src={mainBalconyView} className="App-image" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </div>
    </div>
  );
}

export default App;
