import { createGameOptions } from '../utils/createGameOptions';
import { createStartMenu } from '../utils/createStartMenu';
import { getGameDiv } from '../utils/getGameDiv';

export const memory = () => {
  console.log('hihi mem');

  getGameDiv(1);
  const startMenu = createStartMenu(1);

  const optionButtons = createGameOptions(1, startMenu);
};
