import { gameData } from './memory';

export const saveGameState = () => {
  localStorage.setItem(
    'flipped-cards',
    JSON.stringify(
      gameData.flippedCards.map((card) => ({
        card: card.card,
        i: card.i
      }))
    )
  );
  localStorage.setItem(
    'matched-cards',
    JSON.stringify(gameData.matchedCards.map((card) => card.card))
  );
};
