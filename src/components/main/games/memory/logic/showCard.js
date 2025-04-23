import { gameData } from '../memory';

export const showCard = (cardObject) => {
  const { button, card, i } = cardObject;

  console.log(cardObject);

  button.innerText = card.emoji;
  button.classList.add('flipped');

  button.dataset.id = card.id;

  gameData.flippedCards.push(cardObject);
};
