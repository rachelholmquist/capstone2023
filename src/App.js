
import './App.css';
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home';
import Profile from './components/Profile';
import Activities from './components/Activities';
import AccommodationPage from './components/AccommodationPage';

import TripPlanning from './components/TripPlanning';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='accommodation' element={<AccommodationPage/>}/>
      <Route path='activities' element={<Activities/>}/>
      <Route path='trip-planning' element={<TripPlanning/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
