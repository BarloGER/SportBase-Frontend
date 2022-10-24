import React, { useState, useEffect, useRef } from "react";
import { createEvent } from "../utils/createEvent";
import axios from "axios";
import domtoimage from "dom-to-image";
import EventInfoForm from "./EventInfoForm";
import Player from "./Player";
import Reserve from "./Reserve";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DnDField from "./DnDField";
import "../styles/eventMultiForm.css";

export default function EventMultiForm() {
  const [page, setPage] = useState(0);
  const [avaiablePlayers, setAvaiablePlayers] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    startDate: "",
    endDate: "",
    createdAt: "",
    opponent: "",
    activePlayers: [],
    reservePlayers: [],
    lineUp: ''
  });

  const lineupRef = useRef(null);

  const FormTitles = [
    "Event Informationen",
    "Verfügbare Spieler",
    "Verfügbare Reserve",
    "Aufstellung",
  ];

  const pageDisplay = () => {
    if (page === 0) {
      return <EventInfoForm setNewEvent={setNewEvent} />;
    } else if (page === 1) {
      return (
        <Player avaiablePlayers={avaiablePlayers} setNewEvent={setNewEvent} />
      );
    } else if (page === 2) {
      return <Reserve newEvent={newEvent} setNewEvent={setNewEvent} />;
    } else
      return (
        <DndProvider backend={HTML5Backend}>
          <DnDField newEvent={newEvent} lineupRef={lineupRef} />
        </DndProvider>
      );
  };

  const postData = async () => {
    try {
      const { data } = await createEvent(newEvent);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // ---------Download Lineup Pic --------------//
  const handleSubmit = async () => {
    const dataUrl = await domtoimage.toJpeg(lineupRef.current, {
      quality: 0.95,
      style: { margin: 0 },
    });
    const link = document.createElement("a");
    link.download = `event-${Date.now()}.jpeg`;
    link.href = dataUrl;
    link.click();

    // ---------Set newEvent --------------//
    const newEventObj = { ...newEvent };
    newEventObj.startDate = new Date(newEventObj.startDate).toISOString();
    newEventObj.endDate = new Date(newEventObj.endDate).toISOString();
    newEventObj.createdAt = new Date().toISOString();
    // newEventObj.lineUp = dataUrl;

    setNewEvent(newEventObj);

    postData();
  };

  //TODO: Use suitable endpoint: GetallUsersByTeam/GetallPlayersByTeam
  const getAvaiablePlayers = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/user`);
      setAvaiablePlayers(
        data.filter((user) => user.player === true && user.inactive === false)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAvaiablePlayers();
  }, []);

  return (
    <section className="event-form">
      <div className="form-container">
        <div className="title-container">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="content-container">{pageDisplay()}</div>
        <div className="btn-container">
          <button
            className="btn"
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            className="btn"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                handleSubmit();
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </section>
  );
}
