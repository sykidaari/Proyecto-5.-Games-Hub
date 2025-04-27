import './_memory.scss';
import './_mediaqueries.scss';

import { data } from '../data';
import { createGameOptions } from '../utils/menus/createGameOptions';
import { createStartMenu } from '../utils/menus/createStartMenu';
import { createEndMenu } from '../utils/menus/createEndMenu';
import { getGameDiv } from '../utils/getGameDiv';
import { createGame } from './createGame';

import { resetGame } from './resetGame';
import { saveGameStarted } from '../utils/saveGameStarted';

import { match } from './match';
import { endGame } from './logic/endGame';
import { loadGameState } from './localHost/loadGameState';

export const gamesIndex = 1;

export const genData = data.games[gamesIndex];
export const gameData = genData.gameData;

export const memory = () => {
  getGameDiv(gamesIndex);
  const startMenu = createStartMenu(gamesIndex);
  const optionButtons = createGameOptions(gamesIndex, startMenu);

  const gameEnded = () => {
    const endText = endGame();
    const endMenu = createEndMenu(gamesIndex, endText);

    endMenu.classList.remove('hidden');

    createGameOptions(gamesIndex, endMenu);
  };

  optionButtons.forEach((button) =>
    button.addEventListener('click', () => {
      const gameMode = button.dataset.mode;

      saveGameStarted(gameMode);

      const currentMenu = button.closest('.game-menu');
      currentMenu.classList.add('hidden');

      resetGame();

      createGame(gameMode);

      localStorage.setItem(
        'board',
        JSON.stringify(gameData.cardsInPlay.map((card) => card.card))
      );

      match(gameEnded);
    })
  );

  const saved = loadGameState(startMenu);

  if (saved) {
    match(gameEnded);
  }
};
