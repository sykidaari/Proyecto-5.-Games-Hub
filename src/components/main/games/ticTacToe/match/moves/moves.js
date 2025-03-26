import { gameData } from '../../ticTacToe';
import { computerMove } from './computerMove';
import { playerMove } from './playerMove';

export const moves = (mode, onMove) => {
  let currentPlayer = 'X';

  gameData.buttons.forEach((button, i) => {
    const square = gameData.squares[i];

    button.addEventListener(
      'click',
      () => {
        let moveMade = false;

        if (mode === 'two') {
          button.classList.add(mode);

          moveMade = playerMove(currentPlayer, square, button);

          if (moveMade) {
            onMove(currentPlayer);
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          }
        } else {
          moveMade = playerMove('X', square, button);

          if (moveMade) {
            onMove('X');
          }

          setTimeout(() => {
            moveMade = computerMove('O', mode);
            if (moveMade) {
              onMove('O');
            }
          }, 500);
        }
      },
      { once: true }
    );
  });
};
