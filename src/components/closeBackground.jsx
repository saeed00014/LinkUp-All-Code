import React from "react";

const CloseBackground = ({ setEvent }) => {
  return (
    <div
      onClick={() => setEvent(false)}
      className="fixed right-0 top-0 left-0 bottom-0 z-40"
    ></div>
  );
};

export default CloseBackground;
