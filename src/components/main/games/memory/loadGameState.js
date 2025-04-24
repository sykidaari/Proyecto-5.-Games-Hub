import { createAndAppendChild } from '../../../../utils/createAndAppendChild';
import { game } from '../utils/getGameDiv';
import { gameData } from './memory';

export const loadGameState = (startMenu) => {
  const board = JSON.parse(localStorage.getItem('board'));
  const mode = localStorage.getItem('game-mode');
  const matchedCards = JSON.parse(localStorage.getItem('matched-cards'));
  const flippedCards = JSON.parse(localStorage.getItem('flipped-cards'));
  const movesMade = localStorage.getItem('moves-made');

  console.log(gameData.matchedCards);

  if (!board || !matchedCards || !flippedCards) return null;

  startMenu.classList.add('hidden');

  const cardsDiv = createAndAppendChild(game, 'div', {
    id: 'cards-grid',
    className: mode
  });

  board.forEach((value, i) => {
    const cardButton = createAndAppendChild(cardsDiv, 'button', {
      className: 'card'
    });

    gameData.cardsInPlay.push({
      button: cardButton,
      card: value,
      i
    });

    const isMatched = matchedCards.some((card) => card.emoji === value.emoji);

    const isFlipped = flippedCards.some((card) => card.i === i);

    if (isMatched) {
      cardButton.innerText = value.emoji;
      cardButton.classList.add('flipped');
      cardButton.disabled = true;
    }

    if (isFlipped) {
      cardButton.innerText = value.emoji;
      cardButton.classList.add('flipped');

      gameData.flippedCards.push({
        button: cardButton,
        card: value,
        i
      });
    }
  });

  gameData.movesMade = +movesMade;

  return true;
};
