import update from "immutability-helper";
import { useState, useCallback, useEffect } from 'react';
import DnDPlayer from './DnDPlayer';
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes.js";

export default function DnDField({ newEvent, setNewEvent }) {
  const [activePlayers, setActivePlayers] = useState(newEvent.activePlayers);
  const [playerCard, setPlayerCard] = useState();

  const movePlayer = useCallback(
    (id, left, top) => {
      setPlayerCard(
        update(playerCard, {
          [id]: {
            $merge: { left, top }
          }
        })
      );
    },
    [playerCard, setPlayerCard]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.PLAYER,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        movePlayer(item.id, left, top);
        return undefined;
      }
    }),
    [movePlayer]
  );

  useEffect(() => {
    setPlayerCard(
      activePlayers.map((player) => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
      })
      )
    )
  }, [activePlayers]);

  return (
    <main className="DnDfield" ref={drop}>
      {playerCard && Object.keys(playerCard).map((key) => {
        const { left, top } = playerCard[key];
        return (
          <DnDPlayer
            key={key}
            id={key}
            left={left}
            top={top}
          >
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="pictureOfPlayer"
            />
            {/* </div> */}
          </DnDPlayer>
        );
      })}
    </main>
  )
}
