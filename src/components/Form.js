import {useState} from 'react'
import axios from 'axios'

const Form = () => {
    const [tripItinerary, setTripItinerary] = useState([]);
    const [breakfastTime, setBreakfastTime] = useState('08:00:00');
    const [lunchTime, setLunchTime] = useState('11:00:00');
    const [dinnerTime, setDinnerTime] = useState('17:00:00');
    const [budget, setBudget] = useState('00.00');
    const [tripDates, setTripDates] = useState();
    const userId = 2;
    
    const submitHandler = e => {
    e.preventDefault()
  
      axios.post('http://localhost:4042/tripItinerary', { breakfastTime, lunchTime, dinnerTime, budget, userId })
      .then((res) => {
        console.log(res);
        setTripItinerary(res.data);
        })
      .catch((err) => {
        console.log(err);
      });
  };
  return(
<form className='add-trip-details' onSubmit={submitHandler}>
      <input type='date' value={tripDates} onChange={e => setTripDates(e.target.value)}/>

      Breakfast Time: <input type='radio' name='breakfast' value='08:00:00' onChange={e => setBreakfastTime(e.target.value)}/> 8 am 
      <input type='radio' name='breakfast' value='09:00:00' onChange={e => setBreakfastTime(e.target.value)}/> 9 am 
      <input type='radio' name='breakfast' value='10:00:00' onChange={e => setBreakfastTime(e.target.value)}/> 10 am
      <br />{breakfastTime}<br />
      Lunch Time: <input type='radio' name='lunch' value='11:00:00' onChange={e => setLunchTime(e.target.value)}/> 11 am 
      <input type='radio' name='lunch' value='12:00:00' onChange={e => setLunchTime(e.target.value)}/> 12 pm 
      <input type='radio' name='lunch' value='13:00:00' onChange={e => setLunchTime(e.target.value)}/> 1 pm
      <br />{lunchTime}<br/>
      Dinner Time: <input type='radio' name='dinner' value='17:00:00' onChange={e => setDinnerTime(e.target.value)}/> 5 pm 
      <input type='radio' name='dinner' value='18:00:00' onChange={e => setDinnerTime(e.target.value)}/> 6 pm 
      <input type='radio' name='dinner' value='19:00:00' onChange={e => setDinnerTime(e.target.value)}/> 7 pm
      <br />{dinnerTime}<br/>
      
      <br/><br/>
      Budget: <input type='text' placeholder='Budget' value={budget} onChange={e => setBudget(e.target.value)} />
      <br/>
      <button>submit</button>
      </form>)
}

export default Form