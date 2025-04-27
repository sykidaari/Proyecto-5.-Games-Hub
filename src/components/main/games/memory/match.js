import { checkMatch } from './logic/checkMatch';
import { endGame } from './logic/endGame';
import { showCard } from './logic/showCard';
import { gameData } from './memory';
import { saveGameState } from './localHost/saveGameState';

export const match = (gameEnded) => {
  const board = JSON.parse(localStorage.getItem('board'));
  const matchedCards = JSON.parse(localStorage.getItem('matched-cards'));

  if (matchedCards && board && matchedCards.length === board.length) {
    gameEnded();
  }

  gameData.cardsInPlay.forEach((card) => {
    card.button.addEventListener('click', () => {
      showCard(card);
      checkMatch();

      saveGameState();

      const matchedCards = JSON.parse(localStorage.getItem('matched-cards'));
      const board = JSON.parse(localStorage.getItem('board'));

      if (matchedCards && board && matchedCards.length === board.length) {
        gameEnded();
      }
    });
  });
};
