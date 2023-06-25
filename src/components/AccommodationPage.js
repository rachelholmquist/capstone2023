import axios from "axios";
import { useState, useEffect } from "react";
import './AccommodationPage.css'

const AccommodationPage = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4042/room")
      .then((res) => {
        console.log("made it to room page", res.data);
        setRooms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const mappedRooms = rooms.map((room) => {
    return (
      <div key={room.id} className="room-card">
        <div><img src={room.imageurl} alt='' className='room-image'/></div>
        <div className='room-description'>
        <h1>{room.title}</h1>
        <p>{room.description}</p>
        <h2>{room.maxpeople}</h2>
        <h2>{room.price}</h2>
        </div>
        
      </div>
    );
  });
  return (
    <main>
      {mappedRooms}
    </main>
  );
};

export default AccommodationPage;
