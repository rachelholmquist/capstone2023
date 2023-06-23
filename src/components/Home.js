import porch from '../images/porch.jpg';
import islandView from '../images/islandview.jpg'
import balconyView from '../images/balconyview.jpg'
import snorkeling from '../images/snorkeling.jpg'
import spa from '../images/spa.jpg'
import '../App.css';

const Home = () => {
    return (
        <div className="App-main">
        <img src={porch} className="App-image" alt="" />
        <div className="home-block">
          <div className="info"><h1>Our Island</h1>blah blah blahblah</div>
          <img src={islandView} className="block-image" alt="" />
        </div>
        <div className="home-block">
          <img src={balconyView} className="block-image" alt="" />
          <div className="info"><h1>Luxury Villas and Rooms</h1>blah blah blah blah</div>
        </div>
        <div className="home-block">
          <div className="info"><h1>Unlimited Relaxation</h1>blah blah blahblah</div>
          <img src={spa} className="block-image" alt="" />
        </div>
        <div className="home-block">
        <img src={snorkeling} className="block-image" alt="" />
          <div className="info"><h1>Endless Activities</h1>blah blah blahblah</div>
          
        </div>
        
        </div>
    )
}

export default Home