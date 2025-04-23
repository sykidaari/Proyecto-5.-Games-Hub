import { gameData } from './memory';

export const saveGameState = () => {
  localStorage.setItem(
    'm-flipped-cards',
    JSON.stringify(gameData.flippedCards.map((card) => card.card))
  );
  localStorage.setItem(
    'm-matched-cards',
    JSON.stringify(gameData.matchedCards.map((card) => card.card))
  );
};
