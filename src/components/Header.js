import { NavLink } from "react-router-dom";

const Header = () => {
  const activeLinkStyle = ({ activeLink }) => {
    return {
      color: activeLink ? "#192841F" : '#192841F',
    };
  };

  return (
    <div className="App-title">
      <nav className="App-header">
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
        style={activeLinkStyle} 
        to="activities">
          <a href className="App-link">
            Activities
          </a>
        </NavLink>
        <NavLink 
        style={activeLinkStyle}
         to="current-specials">
          <a href className="App-link">
            Current Specials
          </a>
        </NavLink>
        <NavLink 
        style={activeLinkStyle}
         to="trip-planning">
          <a href className="App-link">
            Plan Your Trip
          </a>
        </NavLink>
        <NavLink 
        // style={activeLinkStyle}
        activeClassName="Active"
         to="profile">
          <a href className="App-link">
            Your Account
          </a>
        </NavLink>
        <button className="Book">BOOK NOW</button>
      </nav>
    </div>
  );
};

export default Header;
