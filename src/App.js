import { useState } from "react";


// https://react.dev/learn/tutorial-tic-tac-toe
// stopped here You will call calculateWinner(squares) in the Board component’s 

function Square({ value, onSquareClick }) { //value is the prop here 
  return <button className="square" onClick={onSquareClick}>
    {value}
  </button>
}

//shift + option + 'f' to format

//default means its the main function in the file
export default function Board() { //Board is the component
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice() //we create a copy here because immutability
    /*
    Immutability makes complex features easier to implement 
    By default all child components re-render automatically when the 
    state of the paretn component change, including child components

    */
    if (xIsNext) {
      nextSquares[i] = "X"
    } else {
      nextSquares[i] = "O"
    }

    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  }

  // JSX is a combination of JavaScript code and html tags that describe what you'd like to display
  // (<> and </>) are fragments and u use it to wrap multiple adjacent JSX elements
  return (
    <>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />

      </div>
    </>
  )
}


