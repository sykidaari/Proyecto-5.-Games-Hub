import './_hangman.scss';
import './_mediaqueries.scss';

import { createGameOptions } from '../utils/menus/createGameOptions';
import { createStartMenu } from '../utils/menus/createStartMenu';
import { getGameDiv } from '../utils/getGameDiv';
import { createGame } from './createGame/createGame';
import { data } from '../data';
import { createLevel } from './logic/createLevel';
import { checkLetter } from './logic/checkLetter';
import { checkLose } from './logic/checkLose';
import { checkWin } from './logic/checkWin';
import { createEndMenu } from '../utils/menus/createEndMenu';
import { resetGame } from './resetGame';
import { saveGameStarted } from '../utils/saveGameStarted';
import { loadSaved } from './localHost/loadSaved';
import { loadGameState } from './localHost/loadGameState';

export const gamesIndex = 2;

export const genData = data.games[gamesIndex];
export const gameData = genData.gameData;

export const hangman = () => {
  getGameDiv(gamesIndex);
  const startMenu = createStartMenu(gamesIndex);
  const optionButtons = createGameOptions(gamesIndex, startMenu);

  const { levelElements, characterParts } = createGame();
  const { wordUl, input, tryButton, hintDiv, hintButton, failedUl } =
    levelElements;

  optionButtons.forEach((button) =>
    button.addEventListener('click', () => {
      const gameMode = button.dataset.mode;

      saveGameStarted(gameMode);

      const currentMenu = button.closest('.game-menu');
      currentMenu.classList.add('hidden');

      resetGame(wordUl, input, tryButton, characterParts);

      createLevel(button.dataset.mode, wordUl, hintDiv);
    })
  );

  const gameEnd = (result) => {
    input.disabled = true;
    tryButton.disabled = true;

    const endMenu = createEndMenu(gamesIndex, result);

    endMenu.classList.remove('hidden');

    createGameOptions(gamesIndex, endMenu);
  };

  const saved = loadSaved(startMenu);

  if (saved) {
    const { usedLetters, partIndex } = saved;

    createLevel(null, wordUl, hintDiv);

    if (usedLetters) {
      loadGameState(usedLetters, partIndex);

      const win = checkWin();
      const lose = checkLose(characterParts);

      if (win || lose) {
        gameEnd(win || lose);
      }
    }
  }

  tryButton.addEventListener('click', (e) => {
    e.preventDefault();

    checkLetter(input, characterParts, failedUl);

    const win = checkWin();
    const lose = checkLose(characterParts);

    if (win || lose) {
      gameEnd(win || lose);
    }
  });

  hintButton.addEventListener('click', () => {
    gameData.levelHint.classList.toggle('hidden');
  });
};
