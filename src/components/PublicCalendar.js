import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/public-calendar.css";
import "moment/locale/de";

export default function OtherCalendar() {

  const [allEvents, setAllEvents] = useState();

  const localizer = momentLocalizer(moment);
  const navigate = useNavigate();

  const getEvents = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/event`);
      setAllEvents(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnClick = (clickedEvent) => {
    navigate(`/event/${clickedEvent.id}`);
  };

  useEffect(() => {
    getEvents();
  }, []);

  const events =
    allEvents &&
    allEvents.map((event) => (
      {
        title: event.title,
        start: event.startDate,
        end: event.endDate,
        id: event._id
      }
    ));

  return (
    <section className="public-calendar">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Kalender Seite mit 1 Komponente." />
      </Helmet>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor={(event) => {
          return new Date(event.start);
        }}
        endAccessor={(event) => {
          return new Date(event.end);
        }}
        onSelectEvent={event => handleOnClick(event)}
        messages={{
          month: "Monat",
          day: "Tag",
          week: "Woche",
          today: "Heute",
          previous: "Zurück",
          next: "Nächste",
        }}
        culture="de"
      />
    </section>
  );
}
