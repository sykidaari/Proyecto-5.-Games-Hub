import { gameData } from '../../ticTacToe';

import { findWinningMove } from '../logic/findWinningMove';

export const computerMove = (player, mode) => {
  gameData.unplayedSquares = gameData.squares.filter(
    (square) => square.status === null
  );

  if (gameData.unplayedSquares.length === 0 || gameData.result) return false;

  let chosenSquare = null;

  if (mode === 'hard') {
    chosenSquare = findWinningMove('O');

    if (!chosenSquare) {
      chosenSquare = findWinningMove('X');
    }

    if (!chosenSquare && gameData.squares[4].status === null) {
      chosenSquare = gameData.squares[4];
    }
  }

  if (!chosenSquare) {
    const randomIndex = Math.floor(
      Math.random() * gameData.unplayedSquares.length
    );
    chosenSquare = gameData.unplayedSquares[randomIndex];
  }

  const button = gameData.buttons[chosenSquare.number - 1];

  chosenSquare.status = player;
  button.innerText = chosenSquare.status;
  button.classList.add(chosenSquare.status);
  button.disabled = true;

  return true;
};
