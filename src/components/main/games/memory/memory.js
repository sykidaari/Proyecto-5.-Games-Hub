// import './_memory.scss';

import { data } from '../data';
import { createGameOptions } from '../utils/createGameOptions';
import { createStartMenu } from '../utils/createStartMenu';
import { getGameDiv } from '../utils/getGameDiv';
import { createGame } from './createGame';

export const gameData = data.games[1].gameData;

export const memory = () => {
  getGameDiv(1);
  const startMenu = createStartMenu(1);

  const optionButtons = createGameOptions(1, startMenu);

  optionButtons.forEach((button) =>
    button.addEventListener('click', () => {
      const currentMenu = button.parentElement.parentElement.parentElement;

      currentMenu.classList.contains('hidden')
        ? currentMenu.classList.remove('hidden')
        : currentMenu.classList.add('hidden');

      createGame(button.dataset.mode);
    })
  );
};
