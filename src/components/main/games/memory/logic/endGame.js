import { data } from '../../data';
import { gameData, genData } from '../memory';

export const endGame = () => {
  const winMessage = genData.endMenu.winMessage;

  winMessage[1] = gameData.movesMade;

  const endText = winMessage.join(' ');

  return endText;
};
