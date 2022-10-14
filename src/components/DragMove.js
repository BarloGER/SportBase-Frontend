import React, { useEffect, useState } from "react";
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
    setPlayerId,
  } = props;

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

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      style={style}
      className={className}
    >
      {children}
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
  id: Number,
  setPlayerId: func,
};

DragMove.defaultProps = {
  onPointerDown: () => { },
  onPointerUp: () => { },
  onPointerMove: () => { },
};