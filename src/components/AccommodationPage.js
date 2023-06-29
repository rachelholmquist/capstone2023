import axios from "axios";
import { useState, useEffect } from "react";
import './AccommodationPage.css'
import Card from "../UI/Card";
import Button from "../UI/Button";

const AccommodationPage = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4042/room")
      .then((res) => {
        setRooms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const mappedRooms = rooms.map((room) => {
    return (
      <Card key={room.id} className="room-card">
        <div><img src={room.imageurl} alt='' className='room-image'/></div>
        <div className='room-description'>
        <h1>{room.title}</h1>
        <p>{room.description}</p>
        <h2>MAX ADULTS:{room.maxpeople}</h2>
        <h2>PRICE PER NIGHT:${room.price}</h2>
        <Button className="Book">BOOK NOW</Button>
        </div>
        
      </Card>
    );
  });
  return (
    <main>
      {mappedRooms}
    </main>
  );
};

export default AccommodationPage;
