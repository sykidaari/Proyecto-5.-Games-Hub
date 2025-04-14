import './_ticTacToe.scss';

import { data } from '../data';

import { getGameDiv } from '../utils/getGameDiv';

import { createStartMenu } from '../utils/createStartMenu';
import { createGameOptions } from '../utils/createGameOptions';
import { createGame } from './createGame';
import { match } from './match/match';
import { createEndMenu } from '../utils/createEndMenu';
import { resetGame } from './resetGame';
import { saveGameStarted } from '../utils/saveGameStarted';
import { loadGameState } from './loadGameState';
import { checkGameEnd } from './match/checkGameEnd';

export const gameData = data.games[0].gameData;

export const ticTacToe = () => {
  getGameDiv(0);
  const startMenu = createStartMenu(0);
  const optionButtons = createGameOptions(0, startMenu);

  createGame();

  let mode;
  let turn;

  const gameEnded = (endText) => {
    setTimeout(() => {
      const endMenu = createEndMenu(0, endText);

      endMenu.classList.remove('hidden');

      createGameOptions(0, endMenu);
    }, 500);
  };

  optionButtons.forEach((button) =>
    button.addEventListener('click', () => {
      saveGameStarted(button.dataset.mode);

      const currentMenu = button.parentElement.parentElement.parentElement;

      currentMenu.classList.toggle('hidden');

      localStorage.removeItem('ttt-turn');

      turn = 'X';

      resetGame();

      match(button.dataset.mode, turn, gameEnded);
    })
  );

  const saved = loadGameState(startMenu);

  if (saved) {
    mode = saved.mode;
    turn = saved.turn;

    const endText = checkGameEnd();
    if (endText) {
      gameEnded(endText);
    } else {
      match(mode, turn, gameEnded);
    }

    return;
  }
};
