import update from "immutability-helper";
import { useState, useCallback, useEffect, useRef } from 'react';
import DnDPlayer from './DnDPlayer';
//import domtoimage from 'dom-to-image';
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes.js";

export default function DnDField({ newEvent, setNewEvent, lineupRef }) {
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

  const onClickHandler = async () => {
    console.log(drop);
    //const dataUrl = await domtoimage.toJpeg(drop.current, { quality: 0.95 });
    //console.log(dataUrl);
    // const link = document.createElement('a');
    // link.download = `my-meme-${Date.now()}.jpeg`;
    // link.href = dataUrl;
    // link.click();
  };

  useEffect(() => {
    setPlayerCard(
      activePlayers.map((player) => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
      })
      )
    );
  }, [activePlayers]);

  return (
    <div className="lineup-container" ref={lineupRef}>
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
            </DnDPlayer>
          );
        })}
      </main>
    </div>
  )
};
