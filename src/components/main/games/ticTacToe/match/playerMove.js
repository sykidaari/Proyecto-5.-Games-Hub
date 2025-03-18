import { gameData } from '../ticTacToe';
import { checkWinOrDraw } from './checkWinOrDraw';
import { endGame } from './endGame';

export const playerMove = (square, button) => {
  square.status = 'X';
  button.innerText = square.status;
  button.classList.add(square.status);

  button.disabled = true;

  gameData.unplayedSquares = gameData.squares.filter(
    (square) => square.status === null
  );

  checkWinOrDraw('X');
};
