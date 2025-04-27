import { gameData } from '../memory';

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

  const matchedCards = JSON.parse(localStorage.getItem('matched-cards')) || [];

  const newMatchedCards = gameData.matchedCards.map((card) => card.card);

  newMatchedCards.forEach((newCard) => {
    const count = matchedCards.filter(
      (card) => card.emoji === newCard.emoji
    ).length;

    if (count < 2) {
      matchedCards.push(newCard);
    }
  });

  localStorage.setItem('matched-cards', JSON.stringify(matchedCards));

  localStorage.setItem('moves-made', gameData.movesMade);
};
