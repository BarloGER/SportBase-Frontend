import React, { useState } from "react";
import DragMove from "./DragMove";
import "../styles/fields.css";

export default function Fields() {
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
    <main className="fields2">
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
        </div>
      </DragMove>
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
        </div>
      </DragMove>
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
        </div>
      </DragMove>
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
        </div>
      </DragMove>
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
        </div>
      </DragMove>
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
        </div>
      </DragMove>
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
        </div>
      </DragMove>
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
        </div>
      </DragMove>
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
        </div>
      </DragMove>
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
        </div>
      </DragMove>
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
        </div>
      </DragMove>
    </main>
  );
}
