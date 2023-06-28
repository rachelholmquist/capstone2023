import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import "./Form.css";
import Card from "../UI/Card";

const Form = () => {
  const navigate = useNavigate();

  const [breakfastTime, setBreakfastTime] = useState("08:00:00");
  const [lunchTime, setLunchTime] = useState("11:00:00");
  const [dinnerTime, setDinnerTime] = useState("17:00:00");
  const [budget, setBudget] = useState("00.00");
  const [tripDates, setTripDates] = useState();
  const [interestedIn, setInterestedIn] = useState();
  const userId = 2;

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4042/tripItinerary", {
        breakfastTime,
        lunchTime,
        dinnerTime,
        budget,
        interestedIn,
        userId,
      })
      .then(() => {
        navigate("/trip-planning");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main>
    <form className="add-trip-details" onSubmit={submitHandler}>
      <Card className={"date"}>
        <h3>Date of Itinerary:</h3>
        <input
        className='date-input'
          type="date"
          value={tripDates}
          onChange={(e) => setTripDates(e.target.value)}
        />
        <br />
      </Card>
      <Card className={"time"}>
        <h3>Breakfast Time:</h3>
        <input
          className="radio"
          type="radio"
          name="breakfast"
          value="08:00:00"
          onChange={(e) => setBreakfastTime(e.target.value)}
        />{" "}
        8 am
        <input
          className="radio"
          type="radio"
          name="breakfast"
          value="09:00:00"
          onChange={(e) => setBreakfastTime(e.target.value)}
        />{" "}
        9 am
        <input
          className="radio"
          type="radio"
          name="breakfast"
          value="10:00:00"
          onChange={(e) => setBreakfastTime(e.target.value)}
        />{" "}
        10 am
        <br />
        <h3>Lunch Time:</h3>
        <input
          className="radio"
          type="radio"
          name="lunch"
          value="11:00:00"
          onChange={(e) => setLunchTime(e.target.value)}
        />{" "}
        11 am
        <input
          className="radio"
          type="radio"
          name="lunch"
          value="12:00:00"
          onChange={(e) => setLunchTime(e.target.value)}
        />{" "}
        12 pm
        <input
          className="radio"
          type="radio"
          name="lunch"
          value="13:00:00"
          onChange={(e) => setLunchTime(e.target.value)}
        />{" "}
        1 pm
        <br />
        <h3>Dinner Time:</h3>
        <input
          className="radio"
          type="radio"
          name="dinner"
          value="17:00:00"
          onChange={(e) => setDinnerTime(e.target.value)}
        />{" "}
        5 pm
        <input
          className="radio"
          type="radio"
          name="dinner"
          value="18:00:00"
          onChange={(e) => setDinnerTime(e.target.value)}
        />{" "}
        6 pm
        <input
          className="radio"
          type="radio"
          name="dinner"
          value="19:00:00"
          onChange={(e) => setDinnerTime(e.target.value)}
        />{" "}
        7 pm
        <br />
      </Card>
      <Card className={"activities"}>
        <h3>Activities I'm interested in:</h3>
        <input
        className='activity-text'
          type="text"
          name="interested-activities"
          placeholder='type here...'
          value={interestedIn}
          onChange={(e) => setInterestedIn(e.target.value)}
        />
      </Card>
      <Card className={"budget"}>
        <h3>Budget:</h3>
        $
        <input
          type="text"
          className="budget-input"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <br />
      </Card>

      <Button className={('submit')}>Submit</Button>
    </form>
    </main>
  );
};

export default Form;
