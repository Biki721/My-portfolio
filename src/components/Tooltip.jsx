import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="relative inline-block"
    >
      {children}
      {show && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-sm rounded shadow-lg">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
