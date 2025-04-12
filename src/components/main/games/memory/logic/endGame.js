import { data } from '../../data';
import { gameData } from '../memory';

export const endGame = () => {
  data.games[1].endMenu.winMessage[1] = gameData.movesMade;

  const endText = data.games[1].endMenu.winMessage.join(' ');

  return endText;
};
