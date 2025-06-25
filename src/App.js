import { useState } from "react";


// https://react.dev/learn/tutorial-tic-tac-toe
// stopped here You will call calculateWinner(squares) in the Board component’s 
//Implementing time travel 
function Square({ value, onSquareClick }) { //value is the prop here 
  return <button className="square" onClick={onSquareClick}>
    {value}
  </button>
}

//shift + option + 'f' to format

//default means its the main function in the file
function Board({ xIsNext, squares, onPlay }) { //Board is the component

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
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

    onPlay(nextSquares)
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

  const winner = calculateWinner(squares)
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O")
  }
  // JSX is a combination of JavaScript code and html tags that describe what you'd like to display
  // (<> and </>) are fragments and u use it to wrap multiple adjacent JSX elements
  return (
    <>
      <div className="status">{status}</div>
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

/* default export is the convention if you want ot export only one object
   there could be only one default export per file

*/
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    // TODO
    setHistory([...history, nextSquares]);
    /*
    enumerate all the items in history

    The spread (...) syntax allows an interable, such as an array or 
    string to be expanded in places where zero or more arguments 
    (for function calls) or elements (for array literals) are expected
    */
    setXIsNext(!xIsNext)
  }

  function jumpTo(nextMove) {
    // TODO
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move; 
    } else {
      description = 'Go to game start';
    }
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}


