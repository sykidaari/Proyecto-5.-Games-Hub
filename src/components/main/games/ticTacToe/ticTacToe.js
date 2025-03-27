import { data } from '../data';

import { getGameDiv } from '../utils/getGameDiv';
import { createStartMenu } from '../utils/createStartMenu';
import { createGameOptions } from '../utils/createGameOptions';
import { createGame } from './createGame';

import './_ticTacToe.scss';
import { match } from './match/match';
import { createEndMenu } from '../utils/createEndMenu';
import { resetGame } from './resetGame';

export const gameData = data.games[0].gameData;

export const ticTacToe = () => {
  getGameDiv(0);
  const startMenu = createStartMenu(0);

  const optionButtons = createGameOptions(0, startMenu);

  createGame();

  const gameEnded = (endText) => {
    setTimeout(() => {
      const endMenu = createEndMenu(0, endText);

      if (endMenu.classList.contains('hidden')) {
        endMenu.classList.remove('hidden');
      }

      createGameOptions(0, endMenu);
    }, 500);
    return true;
  };

  optionButtons.forEach((button) =>
    button.addEventListener('click', () => {
      const currentMenu = button.parentElement.parentElement.parentElement;

      currentMenu.classList.contains('hidden')
        ? currentMenu.classList.remove('hidden')
        : currentMenu.classList.add('hidden');

      resetGame();

      match(button.dataset.mode, gameEnded);
    })
  );
};
