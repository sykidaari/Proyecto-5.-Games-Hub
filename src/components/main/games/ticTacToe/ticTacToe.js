import './_ticTacToe.scss';

import { data } from '../data';

import { getGameDiv } from '../utils/getGameDiv';

import { createStartMenu } from '../utils/menus/createStartMenu';
import { createGameOptions } from '../utils/menus/createGameOptions';
import { createGame } from './createGame';
import { match } from './match/match';
import { createEndMenu } from '../utils/menus/createEndMenu';
import { resetGame } from './resetGame';
import { saveGameStarted } from '../utils/saveGameStarted';
import { loadGameState } from './localHost/loadGameState';
import { endGame } from './match/logic/endGame';

export const gamesIndex = 0;

export const genData = data.games[gamesIndex];
export const gameData = genData.gameData;

export const ticTacToe = () => {
  getGameDiv(gamesIndex);
  const startMenu = createStartMenu(gamesIndex);
  const optionButtons = createGameOptions(gamesIndex, startMenu);

  createGame();

  let turn;

  const gameEnded = (endText) => {
    setTimeout(() => {
      const endMenu = createEndMenu(gamesIndex, endText);

      endMenu.classList.remove('hidden');

      createGameOptions(0, endMenu);
    }, 500);
  };

  optionButtons.forEach((button) =>
    button.addEventListener('click', () => {
      const gameMode = button.dataset.mode;

      saveGameStarted(gameMode);

      const currentMenu = button.closest('.game-menu');
      currentMenu.classList.add('hidden');

      turn = 'X';

      resetGame();

      match(gameMode, turn, gameEnded);
    })
  );

  const saved = loadGameState(startMenu);

  if (saved) {
    const { mode, turn, result } = saved;

    if (result) {
      if (result === 'X' || result === 'O') {
        const endText = endGame(result);
        gameEnded(endText);
      } else {
        const endText = endGame();
        gameEnded(endText);
      }
    } else {
      match(mode, turn, gameEnded);
    }

    return;
  }
};
