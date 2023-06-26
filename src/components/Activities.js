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
            <div className='background-style'>
            <div key={activity.id} className='activity-card'>
                <h1>{activity.name}</h1>
                <p>{activity.description}</p>
                <p>Skill Level:{activity.skilllevel}</p>
                <p>Estimated Time:{activity.estimatedtime}</p>
                <p>Price:{activity.price}</p>
                <p>location: {activity.location}</p>

            </div></div>
        )
    }));
    return (
        <main>
          {mappedActivities}
        </main>
      );
}

export default Activities