import { useState } from "react";


// https://react.dev/learn/tutorial-tic-tac-toe

function Square({ value }) { //value is the prop here 
  //set value is a function that can be used to change the value 
  const [value, setValue] = useState(null)

  function handleClick() {
    console.log('clicked!')
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

//shift + option + 'f' to format

//default means its the main function in the file
export default function Board() { //Board is the component

  // JSX is a combination of JavaScript code and html tags that describe what you'd like to display
  // (<> and </>) are fragments and u use it to wrap multiple adjacent JSX elements
  return (
    <>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}


