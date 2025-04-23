import { gameData } from '../../ticTacToe';
import { checkWin } from '../logic/checkWin';

export const playerMove = (player, square, button) => {
  square.status = player;
  button.innerText = square.status;
  button.classList.add(square.status);

  button.disabled = true;

  return true;
};
