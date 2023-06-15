
import './App.css';
// import AccomodationPage from './components/AccomodationPage';
import Header from './components/Header'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './components/Home'
import Profile from './components/Profile'
import Form from './components/Form'
import AccommodationPage from './components/AccommodationPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='accommodation' element={<AccommodationPage/>}/>
      {/* <Route path='' element={}/> */}
      </Routes>
    </div>
  );
}

export default App;
