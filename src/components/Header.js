// import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <div className='App-title'>
        <nav className="App-header">
            
                <a href className='App-link'>Home</a>
                <a href className='App-link'>Accomodations</a>
                <a href className='App-link'>Current Packages</a>
                <a href className='App-link'>Activities & Amenities</a>
                <a href className='App-link'>Your Account</a>
                <button className='Book'>BOOK NOW</button>
            
        </nav>
        </div>
    )
}

export default Header