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
    checkWinner();
  }

  function displayMark(x, y) {
    if (board[x][y] == "X") {
      return "cross";
    } else if (board[x][y] == "O") {
      return "circle";
    }
  }

  let inRow = false;
  function checkWinner() {
    for (let i = 0; i < board.length; i++) {
      for (let e = 0; e < board[i].length; e++) {
        if (board[i][e] == "X") {
          inRow = true;
        } else {
          inRow = false;
          break;
        }
      }
      if (inRow) {
        console.log("X Won");
        break;
      }
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
