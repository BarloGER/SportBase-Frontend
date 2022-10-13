import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

export default function DragMove(props) {
  const {
    onPointerDown,
    onPointerUp,
    onPointerMove,
    onDragMove,
    children,
    style,
    className,
    id,
    player: {translate: {x, y}},
    setPlayerId,
    imagePosCheck,
    playerCard,
    setPlayerCard,
  } = props;

  const imgPosition = useRef();

  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setPlayerId(e.target.id);
    // onDragMove(e);

    onPointerDown(e);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    // setPlayerId();
    onPointerUp(e);
  };

  const handlePointerMove = (e) => {
    if (isDragging) onDragMove(e);

    onPointerMove(e);
  };

  useEffect(() => {
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointerup", handlePointerUp);
    };
    // eslint-disable-next-line
  }, []);

 
  // on mount, get the position of the cards where they are on the screen,
  // and attribute that to their element's respective translate.x and translate.y properties

  useEffect(() => {
    const imgPos = imgPosition.current.getBoundingClientRect()
    // Set translate.x and translate.y properties here!
    //setPlayerCard(prev => )
    console.log('imgPos DragMove', imgPos);
  }, [])

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      style={style}
      className={className}
    >
      {/* {children} */}
      <div className="player" key={id}>
        <img
          style={{
          transform: `translateX(${x}px) translateY(${y}px)`,
        }}
          src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
          alt="pictureOfPlayer"
          id={id}
          ref={imgPosition}
          onClick={() => imagePosCheck(imgPosition)}
        />
      </div>
    </div>
  );
}

// eslint-disable-next-line
const { func, element, shape, bool, string } = PropTypes;

DragMove.propTypes = {
  onDragMove: func.isRequired,
  onPointerDown: func,
  onPointerUp: func,
  onPointerMove: func,
  children: element,
  style: shape({}),
  className: string,
  setPlayerId: func,
  player: shape({}),
  id: Number,
  imagePosCheck: func,
  playerCard: shape([]), //check type
  setPlayerCard: func,
};

DragMove.defaultProps = {
  onPointerDown: () => {},
  onPointerUp: () => {},
  onPointerMove: () => {},
};
