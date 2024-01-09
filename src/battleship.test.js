/** @format */
import gameBoard from "./gameBoard";

test("tests gameboard", () => {
  const gameGrid = gameBoard(2, 2);
  expect(gameGrid.outerHTML).toContain('<div style="--grid-rows: 2; --grid-cols: 2;"><div class="grid-item"></div><div class="grid-item"></div><div class="grid-item"></div><div class="grid-item"></div></div>');
});
