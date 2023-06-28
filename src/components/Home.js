import porch from '../images/porch.jpg';
import islandView from '../images/islandview.jpg'
import balconyView from '../images/balconyview.jpg'
import snorkeling from '../images/snorkeling.jpg'
import spa from '../images/spa.jpg'
import Footer from './Footer'
import '../App.css';

const Home = () => {
    return (
        <div className="App-main">
        <img src={islandView} className="App-image" alt="" />
        <div className="home-block">
          <div className="info"><h2>Our Island</h2>blah blah blahblah</div>
          <img src={porch} className="block-image" alt="" />
        </div>
        <div className="home-block">
          <img src={balconyView} className="block-image" alt="" />
          <div className="info"><h2>Luxury Villas and Rooms</h2>blah blah blah blah</div>
        </div>
        <div className="home-block">
          <div className="info"><h2>Unlimited Relaxation</h2>blah blah blahblah</div>
          <img src={spa} className="block-image" alt="" />
        </div>
        <div className="home-block">
        <img src={snorkeling} className="block-image" alt="" />
          <div className="info"><h2>Endless Activities</h2>blah blah blahblah</div>
          
        </div>
        {Footer}
        </div>
    )
}

export default Home