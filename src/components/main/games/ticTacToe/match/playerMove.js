import { gameData } from '../ticTacToe';
import { checkWinOrDraw } from './checkWinOrDraw';
import { endGame } from './endGame';

export const playerMove = (squareStatus, square, button) => {
  square.status = squareStatus;
  button.innerText = square.status;
  button.classList.add(square.status);

  button.disabled = true;

  gameData.unplayedSquares = gameData.squares.filter(
    (square) => square.status === null
  );

  checkWinOrDraw(square.status);
};
