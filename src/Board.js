import React, { useState } from "react";
import "./Square.css";

function Square(props) {
  return (
    <button onClick={props.onClick} className="sq-btn">
      {props.name}
    </button>
  );
}

function Board() {
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = index => {
    const squares = [...boardSquares];
    if (squares[index]) {
      return;
    } else {
      squares[index] = xIsNext ? "X" : "O";
    }
    setBoardSquares(squares);
    setXIsNext(!xIsNext);
  };
  const renderSquare = index => {
    return (
      <Square onClick={() => handleClick(index)} name={boardSquares[index]} />
    );
  };
  const winner = calculateWinner(boardSquares);
  const status = winner
    ? `Winner is : ${winner}`
    : `Next player : ${xIsNext ? "X" : "O"}`;

  return (
    <div>
      <div>{status}</div>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
  function calculateWinner(squares) {
    let winningRows = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [3, 4, 5],
      [6, 7, 8],
      [2, 4, 6],
      [3, 5, 8]
    ];
    for (let i = 0; i < winningRows.length; i++) {
      let [a, b, c] = winningRows[i];
      if (squares[a] && squares[a] === squares[b] && squares[b] == squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}

export default Board;
