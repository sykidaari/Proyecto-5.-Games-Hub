import { createAndAppendChild } from '../../../../../utils/createAndAppendChild';
import { game } from '../../utils/getGameDiv';

export const playDiv = () => {
  const playDiv = createAndAppendChild(game, 'div', { id: 'play-div' });
  const title = createAndAppendChild(playDiv, 'h3', {
    innerText: 'Guess the word!'
  });

  const wordUl = createAndAppendChild(playDiv, 'ul', { id: 'word' });

  const form = createAndAppendChild(playDiv, 'form');

  const hintButton = createAndAppendChild(form, 'button', {
    innerText: 'Hint',
    id: 'hint-button'
  });
  const tryButton = createAndAppendChild(form, 'button', {
    type: 'submit',
    innerText: 'Try',
    id: 'try-button'
  });

  return { wordUl, hintButton, tryButton };
};
