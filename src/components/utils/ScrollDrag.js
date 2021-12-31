import React, { useState, useRef } from "react";

const ScrollDrag = (props) => {
  const ref = useRef();
  const [isScrolling, setIsScrolling] = useState(false);
  const [clientX, setClientX] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  const onMouseDown = (e) => {
    setIsScrolling(true);
    setClientX(e.clientX);
  };

  const onMouseUp = (e) => {
    setIsScrolling(false);
  };

  const onMouseMove = (e) => {
    if (isScrolling) {
      ref.current.scrollLeft = scrollX + e.clientX - clientX;
      // ref.current.scrollLeft = scrollX + e.clientX - clientX;
      // ref.current.scrollRight = scrollX + e.clientX + clientX;
      setScrollX(scrollX + e.clientX - clientX);
      setClientX(e.clientX);
    }
  };

  return (
    <div
      className="scroll-drag"
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {props.children}
    </div>
  );
};

export default ScrollDrag;
