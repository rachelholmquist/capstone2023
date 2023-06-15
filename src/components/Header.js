import {NavLink} from 'react-router-dom'

const Header = () => {

    const activeLinkStyle = ({ activeLink}) => {
        return {
            color: activeLink ? '#FFFFFF' : ''
        }
    }


    return (
        <div className='App-title'>
        <nav className="App-header">
        <NavLink style={activeLinkStyle} to='/'><a href className='App-link'>Home</a></NavLink>
        <NavLink style={activeLinkStyle} to='accommodation'><a href className='App-link'>Accommodations</a></NavLink>
                <a href className='App-link'>Current Packages</a>
                <a href className='App-link'>Activities & Amenities</a>
                <NavLink style={activeLinkStyle} to='profile'><a href className='App-link'>Your Account</a></NavLink>
                <button className='Book'>BOOK NOW</button>
            
        </nav>
        </div>
    )
}

export default Header