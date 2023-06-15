import porch from '../images/porch.jpg';
import '../App.css';

const Home = () => {
    return (
        <div className="App-main">
        <img src={porch} className="App-image" alt="" />
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
    )
}

export default Home