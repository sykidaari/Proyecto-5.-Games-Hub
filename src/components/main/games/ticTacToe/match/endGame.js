import { gameData } from '../ticTacToe';

export const endGame = (player) => {
  if (player) {
    console.log(player + ' wins');
  } else {
    console.log('draw');
  }

  gameData.buttons.forEach((button) => (button.disabled = true));
};
