import porch from "../images/porch.jpg";
import islandView from "../images/islandview.jpg";
import balconyView from "../images/balconyview.jpg";
import snorkeling from "../images/snorkeling.jpg";
import spa from "../images/spa.jpg";
import "../App.css";

const Home = () => {
  return (
    <div className="App-main">
      <img src={islandView} className="App-image" alt="" />
      <div className="home-block">
        <div className="info">
          <h3>Our Island</h3>
          Situated in the southern Pacific Ocean we have sweeping views of pure aqua waters. Our island is privately owned and only available for guests staying at our resort.
          Stay and relax or stay and play, there is something for everyone here.
        </div>
        <img src={porch} className="block-image" alt="" />
      </div>
      <div className="home-block">
        <img src={balconyView} className="block-image" alt="" />
        <div className="info">
          <h3>Luxury Villas and Rooms</h3>
          Our luxury king and queen bed villas have ocean views from the main living area as well as the bedrooms. Private deck areas will be the prime spot for your relaxation. Our villas also feature an outdoor shower.
        </div>
      </div>
      <div className="home-block">
        <div className="info">
          <h3>Unlimited Relaxation</h3>Blue Lagoon Waterfront Spa has various treatments and massages available while you listen to the ocean waves crashing against the shore.
          Please call front desk for a menu of our current services.
        </div>
        <img src={spa} className="block-image" alt="" />
      </div>
      <div className="home-block">
        <img src={snorkeling} className="block-image" alt="" />
        <div className="info">
          <h3>Endless Activities</h3>Some days are for lounging on the beach and others require a little more. See our activity page to check out exciting things to fill your days during your stay.
        </div>
      </div>
      
    </div>
  );
};

export default Home;
