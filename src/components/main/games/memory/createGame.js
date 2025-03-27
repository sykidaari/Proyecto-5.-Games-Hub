import { createAndAppendChild } from '../../../../utils/createAndAppendChild';
import { game } from '../utils/getGameDiv';
import { gameData } from './memory';

export const createGame = (mode) => {
  const cardsDiv = createAndAppendChild(game, 'div', {
    id: 'cards-grid',
    className: mode
  });

  const useHalf = mode === 'easy';

  const cardsPool = useHalf
    ? gameData.cards.slice(0, gameData.cards.length / 2)
    : gameData.cards;

  const cardPairs = [...cardsPool, ...cardsPool];

  const shuffledCards = cardPairs.sort(() => Math.random() - 0.5);

  shuffledCards.forEach((card) => {
    const cardButton = createAndAppendChild(cardsDiv, 'button', {
      className: 'card'
    });

    gameData.cardsInPlay.push({ button: cardButton, card });
  });
};
