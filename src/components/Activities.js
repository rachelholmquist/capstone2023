import axios from "axios";
import { useState, useEffect } from "react";
import './Activities.css'

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
            
            <div key={activity.id} className='activity-card'>
                <h1>{activity.name}</h1>
                <p>{activity.description}</p>
                <p><h3>Skill Level:</h3>{activity.skilllevel} </p><p>  <h3>Estimated Time:</h3>{activity.estimatedtime}</p><p>
               <h3> Price:</h3>{activity.price}  </p><p>  <h3>location:</h3> {activity.location}</p>
            </div>
        )
    }));
    return (
        <main>
          {mappedActivities}
        </main>
      );
}

export default Activities