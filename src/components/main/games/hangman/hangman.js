import './_hangman.scss';

import { createGameOptions } from '../utils/createGameOptions';
import { createStartMenu } from '../utils/createStartMenu';
import { getGameDiv } from '../utils/getGameDiv';
import { createGame } from './createGame';
import { data } from '../data';

export const gameData = data.games[2].gameData;

export const hangman = () => {
  getGameDiv(2);
  const startMenu = createStartMenu(2);
  const optionButtons = createGameOptions(2, startMenu);

  createGame();

  optionButtons.forEach((button) =>
    button.addEventListener('click', () => {
      const currentMenu = button.parentElement.parentElement.parentElement;

      currentMenu.classList.contains('hidden')
        ? currentMenu.classList.remove('hidden')
        : currentMenu.classList.add('hidden');
    })
  );
};
