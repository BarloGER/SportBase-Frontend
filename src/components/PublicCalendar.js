import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import axios from "axios";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { de } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/public-calendar.css";

export default function PublicCalendar() {
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

  const locales = { de };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const events = allEvents.map((e) => ({
    title: e.title,
    start: e.startDate,
    end: e.endDate,
  }));

  return (
    <main className="public-calendar">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%", margin: "5rem" }}
      />
    </main>
  );
}
