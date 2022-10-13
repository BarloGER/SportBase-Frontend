import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import DragMove from "./DragMove";
import UseDrag from "./UseDrag";
import "../styles/fields.css";

export default function Fields() {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });

  const [playerCard, setPlayerCard] = useState();
  const [playerId, setPlayerId] = useState();

  const handleDragMove = (e) => {
    // setTranslate({
    //   x: translate.x + e.movementX,
    //   y: translate.y + e.movementY,
    // });
    console.log(playerId);
    const { id } = playerCard.find((player) => player.id == playerId);
    console.log(id);
    const newArr = [...playerCard];
    newArr[id] = {
      id: id,
      translate: {
        x: translate.x + e.movementX,
        y: translate.y + e.movementY,
      },
    };
    console.log(newArr[id]);

    // setPlayerCard(newArr);
    // setPlayerCard(prev => [...prev, [id]: {
    //   id: getCardId.id,
    //   translate: {
    //     x: translate.x + e.movementX,
    //     y: translate.y + e.movementY,
    //   }
    // }]);
  };

  const [activePlayer, setActivePlayer] = useState([]);

  const getPlayer = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/user`);
      console.log(data);
      setActivePlayer(data.filter((user) => user.player === true));
      setPlayerCard(
        data.map((player, index) => ({
          id: index,
          translate: { x: 0, y: 0 },
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.clear();
    getPlayer();
  }, []);

  // const divRef = useRef();

  // const [translate, setTranslate] = useState({ x: 0, y: 0 });

  // const handleDrag = (e) => {
  //   // if (activePlayer.length =)
  //   setTranslate({
  //     x: translate.x + e.movementX,
  //     y: translate.y + e.movementY,
  //   });
  // };

  // const drag = UseDrag(divRef, [translate], {
  //   onDrag: handleDrag,
  // });

  return (
    <main className="fields2">
      {/* {console.log(playerId)} */}
      {activePlayer && activePlayer.length > 0 ? (
        activePlayer.map((aPlayer, index) => {
          return (
            <DragMove onDragMove={handleDragMove} setPlayerId={setPlayerId}>
              <div className="player" key={crypto.randomUUID()}>
                <img
                  style={{
                    transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
                  }}
                  src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
                  alt="pictureOfPlayer"
                  id={index}
                />
              </div>
            </DragMove>
          );
        })
      ) : (
        <h2>Keine aktiven Spieler</h2>
      )}

      {/* {activePlayer && activePlayer.length > 0 ? (
        activePlayer.map((aPlayer) => {
          return (
            <div
              key={crypto.randomUUID()}
              className="player"
              ref={divRef}
              style={{
                transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
              }}
            >
              <img
                src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
                alt="pictureOfPlayer"
              />
            </div>
          );
        })
      ) : (
        <h2>Keine aktiven Spieler</h2>
      )} */}
    </main>
  );
}
