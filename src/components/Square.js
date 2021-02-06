import React from "react";

const Square = ({ value, onClick, className }) => {
  return (
    <button className={`squares ${className}`} onClick={onClick}>
      { value }
    </button>
  );
};

export default Square;
