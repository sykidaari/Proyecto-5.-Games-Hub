import { gameData } from '../../ticTacToe';

import { findWinningMove } from '../logic/findWinningMove';

export const computerMove = (player, mode) => {
  const { squares, result, buttons } = gameData;
  let { unplayedSquares } = gameData;

  unplayedSquares = squares.filter((square) => square.status === null);

  if (unplayedSquares.length === 0 || result) return false;

  let chosenSquare = null;

  if (mode === 'hard') {
    chosenSquare = findWinningMove('O');

    if (!chosenSquare) {
      chosenSquare = findWinningMove('X');
    }

    if (!chosenSquare && squares[4].status === null) {
      chosenSquare = squares[4];
    }
  }

  if (!chosenSquare) {
    const randomIndex = Math.floor(Math.random() * unplayedSquares.length);
    chosenSquare = unplayedSquares[randomIndex];
  }

  const button = buttons[chosenSquare.number - 1];

  chosenSquare.status = player;
  button.innerText = chosenSquare.status;
  button.classList.add(chosenSquare.status);
  button.disabled = true;

  return true;
};
