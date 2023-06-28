import { NavLink } from "react-router-dom";
import Button from "../UI/Button";

const Header = () => {
  const activeLinkStyle = ({ activeLink }) => {
    return {
      color: activeLink ? "#192841F" : '#192841F',
    };
  };

  return (
    <div>
      <nav className="App-header" >
        <div className='logo'>
      <h2>BLUE LAGOON</h2>
      <h4>A PRIVATE ISLAND RESORT</h4>
      </div>
        <NavLink 
        style={activeLinkStyle} 
        to="/" className="App-link">
          Our Island
        </NavLink>
        <NavLink
          style={activeLinkStyle}
          to="accommodation"
          className="App-link"
        >
          Accommodations
        </NavLink>
        <NavLink 
        className="App-link"
        style={activeLinkStyle} 
        to="activities">
            Activities
        </NavLink>
        <NavLink 
        className="App-link"
        style={activeLinkStyle}
         to="form">
            Plan Your Trip
        </NavLink>
        <NavLink 
        className="App-link"
        style={activeLinkStyle}
         to="auth">
            Your Account          
        </NavLink>
        <Button className="Book">BOOK NOW</Button>
      </nav>
    </div>
  );
};

export default Header;
