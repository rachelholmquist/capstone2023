
import './App.css';
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home';
import Auth from './components/Auth';
import Activities from './components/Activities';
import AccommodationPage from './components/AccommodationPage';
import Form from './components/Form';
import TripPlanning from './components/TripPlanning';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='auth' element={<Auth/>}/>
      <Route path='accommodation' element={<AccommodationPage/>}/>
      <Route path='activities' element={<Activities/>}/>
      <Route path='trip-planning' element={<TripPlanning/>}/>
      <Route path='form' element={<Form/>}/>
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
