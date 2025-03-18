import { gameData } from '../ticTacToe';
import { computerMove } from './computerMove';
import { playerMove } from './playerMove';

export const match = () => {
  gameData.buttons.forEach((button, i) => {
    const square = gameData.squares[i];

    button.addEventListener(
      'click',
      () => {
        playerMove(square, button);
        setTimeout(() => {
          computerMove();
        }, 500);
      },
      { once: true }
    );
  });
};
