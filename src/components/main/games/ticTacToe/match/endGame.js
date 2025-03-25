import { createEndMenu } from '../../utils/createEndMenu';
import { game } from '../../utils/getGameDiv';
import { gameData } from '../ticTacToe';

export const endGame = (player) => {
  if (player) {
    console.log(player + ' wins');
    gameData.winner = player;

    setTimeout(() => {
      createEndMenu(0, game, player);
    }, 500);
  } else {
    console.log('draw');
    setTimeout(() => {
      createEndMenu(0, game);
    }, 500);
  }

  gameData.buttons.forEach((button) => (button.disabled = true));
};
