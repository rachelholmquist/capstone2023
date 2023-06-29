import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../UI/Card";
import './TripPlanning.css'

const TripPlans = () => {
  const [tripItinerary, setTripItinerary] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4042/tripItinerary")
      .then((res) => {
        setTripItinerary(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteTrip = (id) => {
    axios
      .delete(`http://localhost:4042/tripItinerary/${id}`)
      .then((res) => {
        setTripItinerary(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const mappedTrips = tripItinerary.map((trip) => {
    const d = new Date(trip.tripDates)

    return (
      <Card key={trip.id} className={('trip-display')}>
        <h3>{d.getMonth()}/{d.getDate()}/{d.getFullYear()}</h3>
        <h3>Breakfast: {trip.breakfastTime}</h3>
        <h3>Lunch: {trip.lunchTime}</h3>
        <h3>Dinner: {trip.breakfastTime}</h3>
        <h3>Daily Budget: {trip.budget}</h3>
        <button onClick={() => deleteTrip(trip.id)}>Delete trip</button>
      </Card>
    );
  });

  return <main>{mappedTrips}</main>;
};
export default TripPlans;
