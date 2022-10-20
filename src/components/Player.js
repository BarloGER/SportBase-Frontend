import { useState, useEffect } from "react";
import "../styles/player.css";

export default function Player({ avaiablePlayers, setNewEvent }) {

  const [activePlayers, setActivePlayers] = useState([]);
  const [reservePlayers, setReservePlayers] = useState(avaiablePlayers);

  const handleChange = (e, player) => {
    const newActivePlayers = [...activePlayers];
    const newReservePlayers = [...reservePlayers];

    if (e.target.checked) {

      const index = newReservePlayers.findIndex(pl => pl._id === player._id);
      if (index > -1) {
        newReservePlayers.splice(index, 1);
        newActivePlayers.push(player);
      }
      setActivePlayers(newActivePlayers);
      setReservePlayers(newReservePlayers);

    } else {

      const index = newActivePlayers.findIndex(pl => pl._id === player._id);
      if (index > -1) {
        newActivePlayers.splice(index, 1);
        newReservePlayers.push(player);
      }
      setActivePlayers(newActivePlayers);
      setReservePlayers(newReservePlayers);
    };
  };

  useEffect(() => {
    setNewEvent((prev) => (
      {
        ...prev,
        activePlayers: [...activePlayers],
        reservePlayers: [...reservePlayers]
      }));
  }, [activePlayers, reservePlayers]);


  //TODO: function to Check if there are alredy activ players to set checkbox checked
  return (
    <main className="select-player">
      {avaiablePlayers && avaiablePlayers.length > 0 ? (
        avaiablePlayers.map((player) => {
          return (
            <div className="player">
              <input type="checkbox" name="select" onChange={(e) => { handleChange(e, player) }} />
              {/* <input type="checkbox" name="select" checked={true} onChange={(e) => { handleChange(e, player) }} /> */}
              <img
                src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
                alt="pictureOfPlayer"
              />
              <span className="name">{player.firstname} {player.lastname}</span>
            </div>
          );
        })
      ) : (
        <h2>Keine aktiven Spieler</h2>
      )}
    </main>
  );
}
