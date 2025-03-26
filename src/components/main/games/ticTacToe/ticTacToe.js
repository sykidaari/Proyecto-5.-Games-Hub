import { data } from '../data';

import { getGameDiv } from '../utils/getGameDiv';
import { createStartMenu } from '../utils/createStartMenu';
import { createGameOptions } from '../utils/createGameOptions';
import { createGame } from './createGame';

import './_ticTacToe.scss';
import { match } from './match/match';

export const gameData = data.games[0].gameData;

export const ticTacToe = () => {
  getGameDiv(0);
  const startMenu = createStartMenu(0);

  console.log(startMenu);
  const optionButtons = createGameOptions(0, startMenu);
  createGame();

  optionButtons.forEach((button) =>
    button.addEventListener('click', () => {
      startMenu.classList.add('hidden');

      match(button.dataset.mode);
    })
  );
};
