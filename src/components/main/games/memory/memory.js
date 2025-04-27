import './_memory.scss';

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
import { loadGameState } from './loadGameState';

export const gameData = data.games[1].gameData;

export const memory = () => {
  console.log('memory running');

  getGameDiv(1);
  const startMenu = createStartMenu(1);
  const optionButtons = createGameOptions(1, startMenu);

  let mode;

  const gameEnded = () => {
    console.log('gameended running');
    const endText = endGame();
    const endMenu = createEndMenu(1, endText);

    endMenu.classList.remove('hidden');

    createGameOptions(1, endMenu);
  };

  optionButtons.forEach((button) =>
    button.addEventListener('click', () => {
      saveGameStarted(button.dataset.mode);

      const currentMenu = button.parentElement.parentElement.parentElement;

      currentMenu.classList.toggle('hidden');

      resetGame();

      createGame(button.dataset.mode);

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
