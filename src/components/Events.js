import React, { useEffect, useState } from "react";
import axios from "axios";
import DragMove from "./DragMove";
import "../styles/events.css";

export default function Events() {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });
  const [activePlayer, setActivePlayer] = useState([]);
  const [reservePlayer, setReservePlayer] = useState([]);


  const getPlayer = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/user`);
      setActivePlayer(data.filter(user => user.player === true && user.activePlayer === true));
      setReservePlayer(data.filter(user => user.player === true && user.activePlayer === false));      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {    
    getPlayer();
  }, []);

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
                alt="pictureOfPlayer"
              />
              <span className="name">Max Mustermann</span>
            </div>
          </DragMove>
          {activePlayer && activePlayer.length > 0 ? activePlayer.map(aPlayer =>{return <div className="player">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="pictureOfPlayer"
            />
            <span className="name">{aPlayer.userName}</span>
          </div>}) : <h2>Keine aktiven Spieler</h2>}
        </div>
        <div className="reserve">
          <h2>Reserve</h2>
          
          {reservePlayer && reservePlayer.length > 0 ? reservePlayer.map(resPlayer =>{return <div className="player">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="pictureOfPlayer"
            />
            <span className="name">{resPlayer.userName}</span>
          </div>}) : <h2>Keine Spieler auf der Reserve</h2>}

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
