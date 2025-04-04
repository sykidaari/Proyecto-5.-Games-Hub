import { createAndAppendChild } from '../../../../../utils/createAndAppendChild';
import { game } from '../../utils/getGameDiv';

export const playDiv = () => {
  const playDiv = createAndAppendChild(game, 'div', { id: 'play-div' });
  const title = createAndAppendChild(playDiv, 'h3', {
    innerText: 'Guess the word!'
  });

  const wordUl = createAndAppendChild(playDiv, 'ul', { id: 'word' });

  const form = createAndAppendChild(playDiv, 'form');

  const label = createAndAppendChild(form, 'label', {
    for: 'letter-input',
    innerText: 'Enter a letter'
  });
  const input = createAndAppendChild(form, 'input', {
    id: 'letter-input',
    type: 'text',
    pattern: '[A-Za-z]',
    required: true,
    autocomplete: 'off'
  });

  input.maxLength = 1;

  const tryButton = createAndAppendChild(form, 'button', {
    type: 'submit',
    innerText: 'Try',
    id: 'try-button'
  });

  const hintDiv = createAndAppendChild(playDiv, 'div', { id: 'hint-div' });
  const hintButton = createAndAppendChild(hintDiv, 'button', {
    innerText: 'Hint',
    id: 'hint-button'
  });

  return { wordUl, input, tryButton, hintDiv, hintButton };
};
