import { data } from '../../../data';
import { gameData } from '../../ticTacToe';

export const endGame = (result) => {
  gameData.buttons.forEach((button) => (button.disabled = true));

  if (result) {
    gameData.result = `${result}-wins`;

    data.games[0].endMenu.winMessage[0] = result;
    const endText = data.games[0].endMenu.winMessage.join(' ');

    return endText;
  } else {
    gameData.result = result;

    const endText = data.games[0].endMenu.drawMessage;

    return endText;
  }
};
