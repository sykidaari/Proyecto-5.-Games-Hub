import { createAndAppendChild } from '../../../../utils/createAndAppendChild';
import { data } from '../data';

export const createGameOptions = (i, parentTag) => {
  const optionsUl = createAndAppendChild(parentTag, 'ul', {
    className: 'options'
  });

  data.games[i].options.forEach((option) => {
    const li = createAndAppendChild(optionsUl, 'li');
    const button = createAndAppendChild(li, 'button', {
      innerText: option.name
    });
  });
};
