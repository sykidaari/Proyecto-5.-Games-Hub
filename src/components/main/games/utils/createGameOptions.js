import { createAndAppendChild } from '../../../../utils/createAndAppendChild';
import { data } from '../data';
import { match } from '../ticTacToe/match/match';

export const createGameOptions = (i, parentTag) => {
  const optionsUl = createAndAppendChild(parentTag, 'ul', {
    className: 'options'
  });

  const functionMap = { match: match };

  data.games[i].options.forEach((option) => {
    const li = createAndAppendChild(optionsUl, 'li');
    const button = createAndAppendChild(li, 'button', {
      innerText: option.name
    });

    console.log('options created');
    button.addEventListener('click', () => {
      if (parentTag.dataset.menu) {
        parentTag.classList.add('hidden');
      }

      functionMap[option.function](option.param);
    });
  });
};
