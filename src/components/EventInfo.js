import "../styles/eventInfo.css";
import { useState } from "react";
import { createEvent } from "../utils/createEvent";

export default function EventInfo({ newEvent }) {
  const [eventName, setEventName] = useState("");

  const formSubmission = {
    eventName,
  };

  //function for handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { post, error } = await createEvent(formSubmission);
      if (error) throw error;
      console.log(post);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="event-info">
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label>
            Event Name:
            <input
              type="text"
              name="event-name"
              placeholder="Event Name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
            ></input>
          </label>
          <label>
            Datum
            <input type="date" name="date" placeholder="Datum" required></input>
          </label>
          <label>
            Wir spielen gegen
            <input
              type="text"
              name="enemy"
              placeholder="Gegen"
              required
            ></input>
          </label>
        </form>
      </fieldset>
    </main>
  );
}
