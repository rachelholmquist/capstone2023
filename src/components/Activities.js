import axios from "axios";
import { useState, useEffect } from "react";
import './Activities.css'
import Card from '../UI/Card'

const Activities = () => {
    const [activities, setActivities] = useState([]);
    
    useEffect(() => {
        axios
        .get("http://localhost:4042/activities")
        .then((res) => {
          console.log("made it to activities page", res.data);
          setActivities(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    const mappedActivities = activities.map((activity => {
        return (
            
            <Card key={activity.id} className='activity-card'>
                <h1>{activity.name}</h1>
                <p>{activity.description}</p>
                <p><b>Skill Level:</b>{activity.skilllevel}   <b>Estimated Time:</b>{activity.estimatedtime}
               <b> Price:</b>{activity.price} <b>location:</b> {activity.location}</p>
            </Card>
        )
    }));
    return (
        <main>
          {mappedActivities}
        </main>
      );
}

export default Activities