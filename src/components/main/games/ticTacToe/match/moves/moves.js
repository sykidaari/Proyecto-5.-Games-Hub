import { gameData } from '../../ticTacToe';
import { saveGameState } from '../../saveGameState';
import { computerMove } from './computerMove';
import { playerMove } from './playerMove';

export const moves = (mode, turn, onMove) => {
  let currentPlayer = turn || 'X';

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

            saveGameState(currentPlayer);
          }
        } else {
          moveMade = playerMove('X', square, button);

          if (moveMade) {
            onMove('X');

            saveGameState('X');
          }

          setTimeout(() => {
            moveMade = computerMove('O', mode);
            if (moveMade) {
              onMove('O');

              saveGameState('O');
            }
          }, 500);
        }
      },
      { once: true }
    );
  });
};
