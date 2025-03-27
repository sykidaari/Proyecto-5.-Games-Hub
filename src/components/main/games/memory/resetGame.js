import { gameData } from './memory';

export const resetGame = () => {
  gameData.cardsInPlay = [];
  gameData.movesMade = 0;

  const cardsDiv = document.querySelector('#cards-grid');

  if (cardsDiv) {
    cardsDiv.remove();
  }
};
