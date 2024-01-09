/** @format */

import "./style.css";
import gameBoard from "./gameBoard";

const gameGrid = gameBoard(10, 10);
console.log(gameGrid);

function displayBoard() {
  document.body.appendChild(gameGrid);
}

displayBoard();
