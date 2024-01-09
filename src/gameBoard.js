/** @format */
import "../src/style.css";
const container = document.createElement("div");
//container.className = "container";

function gameBoard(rows, columns) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", columns);
  for (let c = 0; c < rows * columns; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }

  return container;
}

export default gameBoard;
