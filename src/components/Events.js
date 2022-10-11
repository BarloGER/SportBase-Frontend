import React, { useState } from "react";
import DragMove from "./DragMove";
import "../styles/events.css";

export default function Events() {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    });
  };
  return (
    <main className="events">
      <div className="fields">
        {/* <img
          src="https://thumbs.dreamstime.com/b/fu%C3%9Fballplatz-skizze-92868869.jpg"
          alt="Fußballfeld"
        /> */}
      </div>
      <div className="all-players">
        <div className="active-players">
          <h2>Alle verfügbaren Spieler</h2>
          <DragMove onDragMove={handleDragMove}>
            <div
              className="player"
              style={{
                transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
              }}
            >
              <img
                src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
                alt="Spielerbild"
              />
              <span className="name">Max Mustermann</span>
            </div>
          </DragMove>
          <div className="player">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="Spielerbild"
            />
            <span className="name">Max Mustermann</span>
          </div>
          <div className="player">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="Spielerbild"
            />
            <span className="name">Max Mustermann</span>
          </div>
        </div>
        <div className="reserve">
          <h2>Reserve</h2>
          <div className="player">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="Spielerbild"
            />
            <span className="name">Max Mustermann</span>
          </div>
          <div className="player">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="Spielerbild"
            />
            <span className="name">Max Mustermann</span>
          </div>
          <div className="player">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="Spielerbild"
            />
            <span className="name">Max Mustermann</span>
          </div>
          <div className="player">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="Spielerbild"
            />
            <span className="name">Max Mustermann</span>
          </div>
        </div>
      </div>
      <div className="info">
        <fieldset>
          <form>
            <label>
              Event Name:
              <input
                type="text"
                name="event-name"
                placeholder="Event Name"
                required
              ></input>
            </label>
            <label>
              Datum
              <input
                type="date"
                name="date"
                placeholder="Datum"
                required
              ></input>
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
            <div className="terms">
              <label>
                Ich bin sicher dass alle Angaben korrekt sind.
                <input type="checkbox" name="confirm" onChange />
              </label>
            </div>
            <button className="button">Event erstellen</button>
          </form>
          <legend>
            <h1>Infos</h1>
          </legend>
        </fieldset>
      </div>
    </main>
  );
}
