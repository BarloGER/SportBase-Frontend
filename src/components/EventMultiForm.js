import React, { useState } from "react";
import EventInfo from "./EventInfo";
import Player from "./Player";
import Reserve from "./Reserve";
import Fields from "./Fields";
import "../styles/eventMultiForm.css";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DnDField from './DnDField';

export default function EventMultiForm() {
  const [page, setPage] = useState(0);
  const [newEvent, setNewEvent] = useState({
    eventName: '',
    date: '',
    createdAt: '',
    opponent: ''
  });

  const FormTitles = [
    "Event Informationen",
    "Spieler",
    "Reserve",
    "Aufstellung",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <EventInfo setNewEvent={setNewEvent} />;
    } else if (page === 1) {
      return <Player />;
    } else if (page === 2) {
      return <Reserve />;
    } else return <DndProvider backend={HTML5Backend}><DnDField /></DndProvider>;
  };

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
          <div className="body">{PageDisplay()}</div>
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
