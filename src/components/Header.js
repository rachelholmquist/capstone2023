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
        className="App-link"
        style={activeLinkStyle} 
        to="activities">
            Activities
        </NavLink>
        <NavLink 
        className="App-link"
        style={activeLinkStyle}
         to="trip-planning">
            Plan Your Trip
        </NavLink>
        <NavLink 
        className="App-link"
        style={activeLinkStyle}
         to="auth">
            Your Account          
        </NavLink>
        <button className="Book">BOOK NOW</button>
      </nav>
    </div>
  );
};

export default Header;
