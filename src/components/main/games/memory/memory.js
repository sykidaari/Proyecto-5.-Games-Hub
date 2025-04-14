import './_memory.scss';

import { data } from '../data';
import { createGameOptions } from '../utils/createGameOptions';
import { createStartMenu } from '../utils/createStartMenu';
import { getGameDiv } from '../utils/getGameDiv';
import { createGame } from './createGame';
import { showCard } from './logic/showCard';
import { checkMatch } from './logic/checkMatch';
import { endGame } from './logic/endGame';
import { createEndMenu } from '../utils/createEndMenu';
import { resetGame } from './resetGame';
import { saveGameStarted } from '../utils/saveGameStarted';

export const gameData = data.games[1].gameData;

export const memory = () => {
  getGameDiv(1);
  const startMenu = createStartMenu(1);
  const optionButtons = createGameOptions(1, startMenu);

  optionButtons.forEach((button) =>
    button.addEventListener('click', () => {
      saveGameStarted(button.dataset.mode);

      const currentMenu = button.parentElement.parentElement.parentElement;

      currentMenu.classList.toggle('hidden');

      resetGame();

      createGame(button.dataset.mode);

      gameData.cardsInPlay.forEach((card) => {
        card.button.addEventListener('click', () => {
          showCard(card);
          checkMatch();

          const allMatched = gameData.cardsInPlay.every((card) => card.matched);

          if (allMatched) {
            const endText = endGame();
            const endMenu = createEndMenu(1, endText);

            endMenu.classList.remove('hidden');

            createGameOptions(1, endMenu);
          }
        });
      });
    })
  );
};
