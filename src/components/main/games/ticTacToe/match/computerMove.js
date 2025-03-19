import { gameData } from '../ticTacToe';
import { checkWinOrDraw } from './checkWinOrDraw';
import { endGame } from './endGame';

export const computerMove = (squareStatus, mode) => {
  if (gameData.unplayedSquares.length === 0) return;

  console.log(mode);

  const randomIndex = Math.floor(
    Math.random() * gameData.unplayedSquares.length
  );

  const square = gameData.unplayedSquares[randomIndex];
  const button = gameData.buttons[square.number - 1];

  square.status = squareStatus;
  button.innerText = square.status;
  button.classList.add(square.status);

  button.disabled = true;

  checkWinOrDraw(square.status);
};
