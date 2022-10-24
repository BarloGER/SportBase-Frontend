import { useState, useEffect } from "react";

export default function Reserve({ newEvent, setNewEvent }) {
  const [avaiableForReserve, setAvaiableForReserve] = useState(
    newEvent.reservePlayers
  );
  const [reservePlayers, setReservePlayers] = useState([]);

  const handleChange = (e, player) => {
    const newReservePlayers = [...reservePlayers];

    if (e.target.checked) {
      newReservePlayers.push(player);
      setReservePlayers(newReservePlayers);
    } else {
      const index = newReservePlayers.findIndex((pl) => pl._id === player._id);
      if (index > -1) {
        newReservePlayers.splice(index, 1);
      }

      setReservePlayers(newReservePlayers);
    }
  };

  useEffect(() => {
    setNewEvent((prev) => ({
      ...prev,
      reservePlayers: [...reservePlayers],
    }));
  }, [reservePlayers]);

  return (
    <section className="select">
      {avaiableForReserve && avaiableForReserve.length > 0 ? (
        avaiableForReserve.map((player) => {
          return (
            <div className="player">
              <input
                type="checkbox"
                name="select"
                onChange={(e) => {
                  handleChange(e, player);
                }}
              />

              <img
                src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
                alt="pictureOfPlayer"
              />
              <span className="name">
                {player.firstname} {player.lastname}
              </span>
            </div>
          );
        })
      ) : (
        <h2>Keine Spieler auf der Bank</h2>
      )}
    </section>
  );
}
