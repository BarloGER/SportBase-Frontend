import React, { useState, useEffect } from "react";
import axios from "axios";
import EventInfo from "./EventInfo";
import Player from "./Player";
import Reserve from "./Reserve";
import Fields from "./Fields";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DnDField from './DnDField';
import "../styles/eventMultiForm.css";

export default function EventMultiForm() {
  const [page, setPage] = useState(0);
  const [avaiablePlayers, setAvaiablePlayers] = useState([]);
  const [newEvent, setNewEvent] = useState({
    eventName: '',
    date: '',
    createdAt: '',
    opponent: '',
    activePlayers: [],
    reservePlayers: []
  });

  const FormTitles = [
    "Event Informationen",
    "Spieler",
    "Reserve",
    "Aufstellung",
  ];

  const pageDisplay = () => {
    if (page === 0) {
      return <EventInfo setNewEvent={setNewEvent} />;
    } else if (page === 1) {
      return <Player avaiablePlayers={avaiablePlayers} setNewEvent={setNewEvent} />;
    } else if (page === 2) {
      return <Reserve />;
    } else return <DndProvider backend={HTML5Backend}><DnDField /></DndProvider>;
  };

  //TODO: Use suitable endpoint: GetallUsersByTeam/GetallPlayersByTeam 
  const getAvaiablePlayers = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/user`);
      setAvaiablePlayers(data.filter((user) => user.player === true && user.inactive === false));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAvaiablePlayers();
  }, []);

  return (
    <main className="event-form">
      <div className="form">
        <div className="progressbar">
          <div
            style={{
              width:
                page === 0
                  ? "25%"
                  : page == 1
                    ? "50%"
                    : page == 2
                      ? "75%"
                      : "100%",
            }}
          ></div>
        </div>
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">{pageDisplay()}</div>
          <div className="footer">
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
