import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/public-calendar.css";
import "moment/locale/de";

export default function OtherCalendar() {
  const localizer = momentLocalizer(moment);

  const [allEvents, setAllEvents] = useState([]);

  const getEvents = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/event`);
      setAllEvents(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const events = allEvents.map((e) => ({
    title: e.title,
    start: e.startDate,
    end: e.endDate,
  }));

  return (
    <section className="public-calendar">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kalender</title>
        <meta name="description" content="Kalender Seite mit 1 Komponente." />
      </Helmet>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor={(event) => {
          return new Date(event.start);
        }}
        // startAccessor="start"
        endAccessor={(event) => {
          return new Date(event.end);
        }}
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
