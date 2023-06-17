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
        <NavLink style={activeLinkStyle} to='/' className='App-link'>Our Island</NavLink>
        <NavLink style={activeLinkStyle} to='accommodation' className='App-link'>Accommodations</NavLink>
                <a href className='App-link'>Activities</a>
                <a href className='App-link'>Current Specials</a>
                <a href className='App-link'>Plan Your Trip</a>
                <NavLink style={activeLinkStyle} to='profile'><a href className='App-link'>Your Account</a></NavLink>
                <button className='Book'>BOOK NOW</button>
            
        </nav>
        </div>
    )
}

export default Header