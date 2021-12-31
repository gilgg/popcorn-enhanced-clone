import { produceWithPatches } from "immer";
import React, { useRef, useState, useEffect } from "react";

// const quickAndDirtyStyle = {
//   width: "200px",
//   height: "200px",
//   background: "#FF9900",
//   color: "#FFFFFF",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

const DraggableComponent = (props) => {
  const [pressed, setPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef();

  // Monitor changes to position state and update DOM
  useEffect(() => {
    if (ref.current) {
      console.log(ref.current);
      // ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
      ref.current.style.transform = `translate(${position.x}px)`;
    }
  }, [position]);

  // Update the current position if mouse is down
  const onMouseMove = (event) => {
    if (pressed) {
      console.log("position.x:", position.x);
      console.log("event.movementX:", event.movementX);
      setPosition({
        x: position.x + event.movementX,
        y: position.y + event.movementY,
      });
    }
  };

  return (
    <div
      ref={ref}
      // style={quickAndDirtyStyle}
      onMouseMove={onMouseMove}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      <p>{pressed ? "Dragging..." : "Press to drag"}</p>
      {props.children}
    </div>
  );
};

export default DraggableComponent;