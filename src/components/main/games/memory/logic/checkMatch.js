import { gameData } from '../memory';

export const checkMatch = () => {
  if (gameData.flippedCards.length === 2) {
    const [card1, card2] = gameData.flippedCards;

    if (card1.card.id === card2.card.id && card1.button !== card2.button) {
      card1.matched = card2.matched = true;
      card1.button.disabled = true;
      card2.button.disabled = true;
    } else {
      setTimeout(() => {
        card1.button.innerText = '';
        card2.button.innerText = '';
        card1.button.classList.remove('flipped');
        card2.button.classList.remove('flipped');
      }, 500);
    }
    gameData.flippedCards = [];
  }
};
