import { createAndAppendChild } from '../../../../../utils/createAndAppendChild';
import { data } from '../../data';

export const createGameOptions = (i, parentTag) => {
  const optionsUl = document.querySelector('.options');

  if (optionsUl) {
    parentTag.appendChild(optionsUl);

    console.log('yes');
  } else {
    const optionsUl = createAndAppendChild(parentTag, 'ul', {
      className: 'options'
    });
    console.log('no');

    const buttons = [];

    data.games[i].options.forEach((option) => {
      const li = createAndAppendChild(optionsUl, 'li');
      const button = createAndAppendChild(li, 'button', {
        id: option.id,
        innerText: option.name
      });
      button.dataset.mode = option.mode;

      console.log('option created');

      buttons.push(button);
    });

    return buttons;
  }
};
