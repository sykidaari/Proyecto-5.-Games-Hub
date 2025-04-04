import { moves } from './moves/moves';
import { checkWin } from './logic/checkWin.js';
import { checkDraw } from './logic/checkDraw.js';
import { endGame } from './logic/endGame.js';

export const match = (mode, gameEnded) => {
  moves(mode, (player) => {
    const win = checkWin(player);
    const draw = !win && checkDraw();

    if (win || draw) {
      const result = win ? player : null;
      const endText = endGame(result);
      gameEnded(endText);
    }
  });
};
