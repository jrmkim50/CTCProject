export function calculateWinner(squares) {
  const indicesToCheck = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for (let i = 0; i < indicesToCheck.length; i++) {
    let toCheck = indicesToCheck[i];
    if (squares[toCheck[0]] === "X" && squares[toCheck[1]] === "X" && squares[toCheck[2]] === "X") {
      return "X has won!";
    } else if (squares[toCheck[0]] === 'O' && squares[toCheck[1]] === 'O' && squares[toCheck[2]] === 'O') {
      return "O has won!";
    }
  }
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) {
      return null;
    }
  }
  return "Tie game!";
}
