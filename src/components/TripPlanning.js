import axios from "axios";
import { useState, useEffect } from "react";
import Button from "../UI/Button";

const TripPlans = () => {
  const [tripItinerary, setTripItinerary] = useState([]);

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

const deleteTrip = id => {
  axios
  .delete(`http://localhost:4042/tripItinerary/${id}`)
  .then((res) => {
    setTripItinerary(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
}

const mappedTrips = tripItinerary.map((trip => {
  return (<div key={trip.id}>
    <h3>{trip.budget}</h3>
    <Button onClick={() => deleteTrip(trip.id)}>delete trip</Button>
  </div>)
}));

return (
  <main>
    {mappedTrips}
  </main>
)


}
export default TripPlans