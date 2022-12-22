import { useState } from "react";
import "./App.css";

let crossTurn = true;

function App() {
  const [board, setMark] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  function addMark(x, y) {
    if (!board[x][y]) {
      if (crossTurn) {
        const newBoard = [...board];
        newBoard[x][y] = "X";
        setMark(newBoard);
      } else {
        const newBoard = [...board];
        newBoard[x][y] = "O";
        setMark(newBoard);
      }
      crossTurn = crossTurn ? false : true;
    }
    console.log(board);
  }

  return (
    <div class="board">
      <div onClick={() => addMark(0, 0)}>
        <i></i>
      </div>
      <div onClick={() => addMark(0, 1)}>
        <i></i>
      </div>
      <div onClick={() => addMark(0, 2)}>
        <i></i>
      </div>
      <div onClick={() => addMark(1, 0)}>
        <i></i>
      </div>
      <div onClick={() => addMark(1, 1)}>
        <i></i>
      </div>
      <div onClick={() => addMark(1, 2)}>
        <i></i>
      </div>
      <div onClick={() => addMark(2, 0)}>
        <i></i>
      </div>
      <div onClick={() => addMark(2, 1)}>
        <i></i>
      </div>
      <div onClick={() => addMark(2, 2)}>
        <i></i>
      </div>
    </div>
  );
}

export default App;
