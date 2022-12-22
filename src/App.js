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
  }

  function displayMark(x, y) {
    if (board[x][y] == "X") {
      return "cross";
    } else if (board[x][y] == "O") {
      return "circle";
    }
  }

  return (
    <div class="board">
      <div onClick={() => addMark(0, 0)}>
        <i class={displayMark(0, 0)}></i>
      </div>
      <div onClick={() => addMark(0, 1)}>
        <i class={displayMark(0, 1)}></i>
      </div>
      <div onClick={() => addMark(0, 2)}>
        <i class={displayMark(0, 2)}></i>
      </div>
      <div onClick={() => addMark(1, 0)}>
        <i class={displayMark(1, 0)}></i>
      </div>
      <div onClick={() => addMark(1, 1)}>
        <i class={displayMark(1, 1)}></i>
      </div>
      <div onClick={() => addMark(1, 2)}>
        <i class={displayMark(1, 2)}></i>
      </div>
      <div onClick={() => addMark(2, 0)}>
        <i class={displayMark(2, 0)}></i>
      </div>
      <div onClick={() => addMark(2, 1)}>
        <i class={displayMark(2, 1)}></i>
      </div>
      <div onClick={() => addMark(2, 2)}>
        <i class={displayMark(2, 2)}></i>
      </div>
    </div>
  );
}

export default App;
