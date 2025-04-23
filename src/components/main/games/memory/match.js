import { checkMatch } from './logic/checkMatch';
import { endGame } from './logic/endGame';
import { showCard } from './logic/showCard';
import { gameData } from './memory';
import { saveGameState } from './saveGameState';

export const match = (gameEnded) => {
  gameData.cardsInPlay.forEach((card) => {
    card.button.addEventListener('click', () => {
      showCard(card);
      checkMatch();

      saveGameState();

      const allMatched = gameData.cardsInPlay.every((card) => card.matched);

      if (allMatched) {
        gameEnded();
      }
    });
  });
};
