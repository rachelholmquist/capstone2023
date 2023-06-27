import axios from "axios";
import { useState, useEffect } from "react";

const TripPlans = () => {
    const [tripItinerary, setTripItinerary] = useState([]);
    const [breakfastTime, setBreakfastTime] = useState('08:00:00');
    const [lunchTime, setLunchTime] = useState('11:00:00');
    const [dinnerTime, setDinnerTime] = useState('17:00:00');
    const [interestedIn, setInterestedIn] = useState([]);
    
    useEffect(() => {
        axios
        .get("http://localhost:4042/tripItinerary")
        .then((res) => {
          console.log("made it to trips page", res.data);
          setTripItinerary(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    const mappedTripItinerary = tripItinerary.map((tripItinerary => {
        return (
            <div className='background-style'>
            <div key={tripItinerary.id} className='activity-card'>
                <h1>{tripItinerary.name}</h1>
                <p>{tripItinerary.description}</p>
            </div></div>
        )
    }));
    return (
        <div>
        <form className='add-trip-details'>
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
        <div className='interested-in-activities'>
            <input type='checkbox' value='Snorkeling' onChange={e => setInterestedIn(e.target.value)} /> Snorkeling <br/>
            <input type='checkbox' value='SUP/Kayaking' onChange={e => setInterestedIn(e.target.value)} /> SUP/Kayaking <br/>
            <input type='checkbox' value='Hiking' onChange={e => setInterestedIn(e.target.value)} /> Hiking <br/>
            <input type='checkbox' value='Yoga' onChange={e => setInterestedIn(e.target.value)} /> Yoga <br/>
            <input type='checkbox' value='Scuba Diving' onChange={e => setInterestedIn(e.target.value)} /> Scuba Diving <br />
            <input type='checkbox' value='Tennis' onChange={e => setInterestedIn(e.target.value)} /> Tennis <br />
            <input type='checkbox' value='Surfing' onChange={e => setInterestedIn(e.target.value)} /> Surfing <br/>
        </div>
        {interestedIn}
        </form>
    
        <main>
          {mappedTripItinerary}
        </main></div>
      );
}

export default TripPlans