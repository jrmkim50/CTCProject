import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, index) => (
      <Square value = {square} onClick = {() => onClick(index)} key={index} className={square ? "chosenSquare": ""} />
    )) }
  </div>
);

export default Board;
