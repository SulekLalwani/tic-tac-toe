import { useState } from "react";
import "./App.css";

let crossTurn = true;
let gameOver = false;

function App() {
  const [board, setMark] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  function addMark(x, y) {
    if (!board[x][y] && !gameOver) {
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

    if (checkWinner("X")) {
      console.log("X Wins!");
      gameOver = true;
    } else if (checkWinner("O")) {
      console.log("O Wins!");
      gameOver = true;
    }
  }

  function displayMark(x, y) {
    if (board[x][y] == "X") {
      return "cross";
    } else if (board[x][y] == "O") {
      return "circle";
    }
  }

  let inRow = false;
  function checkWinner(mark) {
    for (let i = 0; i < board.length; i++) {
      for (let e = 0; e < board[i].length; e++) {
        if (board[i][e] == mark) {
          inRow = true;
        } else {
          inRow = false;
          break;
        }
      }
      if (inRow) {
        return true;
        break;
      }
    }

    for (let i = 0; i < board[0].length; i++) {
      for (let e = 0; e < board[i].length; e++) {
        if (board[e][i] == mark) {
          inRow = true;
        } else {
          inRow = false;
          break;
        }
      }
      if (inRow) {
        return true;
        break;
      }
    }

    for (let i = 0; i < board[0].length; i++) {
      if (board[i][i] == mark) {
        inRow = true;
      } else {
        inRow = false;
        break;
      }
    }
    if (inRow) {
      return true;
    }

    let e = board[0].length;
    for (let i = 0; i < board[0].length; i++) {
      e--;
      if (board[i][e] == mark) {
        inRow = true;
      } else {
        inRow = false;
        break;
      }
    }
    if (inRow) {
      return true;
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
