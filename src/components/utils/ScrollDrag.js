import React, { useState, useRef } from "react";

const ScrollDrag = (props) => {
  const ref = useRef();
  const [isScrolling, setIsScrolling] = useState(false);
  const [clientX, setClientX] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  const onMouseDown = (e) => {
    console.log("onMouseDown");
    setIsScrolling(true);
    console.log("e.clientx:", e.clientX);
    setClientX(e.clientX);
  };

  const onMouseUp = (e) => {
    console.log("onMouseUp");
    setIsScrolling(false);
  };

  const onMouseMove = (e) => {
    console.log("onMouseMove");
    if (isScrolling) {
      // console.log("ref.current is:", ref.current);
      console.log("scrollX:", scrollX);
      console.log("e.clientX:", e.clientX);
      console.log("clientX:", clientX);
      ref.current.scrollLeft = scrollX + e.clientX - clientX;
      // ref.current.scrollLeft = scrollX + e.clientX - clientX;
      // ref.current.scrollRight = scrollX + e.clientX + clientX;
      console.log("ref.current.scrollLeft is:", ref.current.scrollLeft);
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
