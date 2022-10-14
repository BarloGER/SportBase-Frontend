import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import DragMove from "./DragMove";
import "../styles/fields.css";

export default function Fields() {
  //not used
  // const [translate, setTranslate] = useState({
  //   x: 0,
  //   y: 0,
  // });

  const [activePlayer, setActivePlayer] = useState([]);
  const [playerCard, setPlayerCard] = useState();
  const [playerId, setPlayerId] = useState();

  const handleDragMove = (e) => {
    //not used
    // setTranslate({
    //   x: translate.x + e.movementX,
    //   y: translate.y + e.movementY,
    // });
    console.log('playerId', playerId);
    const { id } = playerCard.find((player) => player.id == playerId);
    const newArr = [...playerCard];
    newArr[id] = {
      id: id,
      translate: {
        x: playerCard[id].translate.x + e.movementX,
        y: playerCard[id].translate.y + e.movementY,
      },
    };
    setPlayerCard(newArr);
  };
  
  const imagePosCheck = (element) => {
    const imagePos = element.current.getBoundingClientRect()
    console.log(imagePos.top, imagePos.right, imagePos.bottom, imagePos.left)
  }

  // useEffect(() => {
  //   console.log([window.event.clientX, window.event.clientY])    
  // })

  const getPlayer = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/user`);
      console.log(data);
      setActivePlayer(data.filter((user) => user.player === true));
      setPlayerCard(
        data.map((player, index) => ({
          id: index,
          translate: { x: 0, y: 0 },  //don't set zero?
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
      {activePlayer && activePlayer.length > 0 ? (
        playerCard.map((aPlayer, index) => {
          return <DragMove onDragMove={handleDragMove} setPlayerId={setPlayerId} player={aPlayer} id={index} imagePosCheck={imagePosCheck} setPlayerCard={setPlayerCard} playerCard={playerCard}/>
              {/* <div className="player" key={id}>
                <img
                  style={{
                    transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
                  }}
                  src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
                  alt="pictureOfPlayer"
                  id={index}
                />
              </div>
            </DragMove> */}

        })
      ) : (
        <h2>Keine aktiven Spieler</h2>
      )}
    </main>
  );
}
