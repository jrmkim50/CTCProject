import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState([null,null,null,null,null,null,null,null,null]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  let winner = calculateWinner(board);
  let nextString = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    if (!winner && !board[i]) {
      let oldBoard = [...board];
      oldBoard[i] = nextString;
      setBoard(oldBoard);
      setStepNumber(stepNumber + 1);
      setXisNext(!xIsNext);
    }
  }

  const jumpToStart = () => {
    setBoard([null,null,null,null,null,null,null,null,null]);
    setStepNumber(0);
    setXisNext(true);
  }

  const result = () => {
    if (!winner) {
      return `Next player: ${nextString}`;
    } else {
      return `${winner}`;
    }
  }
  
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board squares={board} onClick={handleClick}/>
      <div className='info-wrapper'>
        <div>
          <button onClick={jumpToStart}>Go to Start</button>
        </div>
        <h3>{ result() }</h3>
      </div>
      <div>
        {winner ? (<div className="winBanner">
          <h1>{winner}</h1>
          <button onClick={() => {jumpToStart()}}>Play again?</button>
        </div>) : null}
      </div>
    </>
  );
};

export default Game;
