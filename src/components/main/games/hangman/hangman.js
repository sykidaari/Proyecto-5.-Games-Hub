import './_hangman.scss';

import { createGameOptions } from '../utils/createGameOptions';
import { createStartMenu } from '../utils/createStartMenu';
import { getGameDiv } from '../utils/getGameDiv';
import { createGame } from './createGame/createGame';
import { data } from '../data';
import { level } from './logic/level';
import { checkLetter } from './logic/checkLetter';
import { checkLose } from './logic/checkLose';
import { checkWin } from './logic/checkWin';
import { createEndMenu } from '../utils/createEndMenu';
import { resetGame } from './logic/resetGame';

export const gameData = data.games[2].gameData;

export const hangman = () => {
  getGameDiv(2);
  const startMenu = createStartMenu(2);
  const optionButtons = createGameOptions(2, startMenu);

  const { levelElements, characterParts } = createGame();

  optionButtons.forEach((button) =>
    button.addEventListener('click', () => {
      const currentMenu = button.parentElement.parentElement.parentElement;

      currentMenu.classList.toggle('hidden');

      resetGame(
        levelElements.wordUl,
        levelElements.input,
        levelElements.tryButton,
        characterParts
      );

      level(button.dataset.mode, levelElements.wordUl, levelElements.hintDiv);
    })
  );

  levelElements.tryButton.addEventListener('click', (e) => {
    e.preventDefault();

    checkLetter(levelElements.input, characterParts, levelElements.failedUl);

    const win = checkWin();
    const lose = checkLose(characterParts);

    if (win || lose) {
      levelElements.input.disabled = true;
      levelElements.tryButton.disabled = true;

      const endMenu = createEndMenu(2, win || lose);

      endMenu.classList.remove('hidden');

      createGameOptions(2, endMenu);
    }
  });

  levelElements.hintButton.addEventListener('click', () => {
    gameData.levelHint.classList.toggle('hidden');
  });
};
