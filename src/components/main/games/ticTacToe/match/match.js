import { gameData } from '../ticTacToe';
import { computerMove } from './computerMove';
import { playerMove } from './playerMove';

export const match = (mode) => {
  let currentPlayer = 'X';

  gameData.buttons.forEach((button, i) => {
    const square = gameData.squares[i];

    button.addEventListener(
      'click',
      () => {
        if (mode === 'two') {
          playerMove(currentPlayer, square, button);
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        } else {
          playerMove('X', square, button);
          setTimeout(() => {
            computerMove('O', mode);
          }, 500);
        }
      },
      { once: true }
    );
  });
};
