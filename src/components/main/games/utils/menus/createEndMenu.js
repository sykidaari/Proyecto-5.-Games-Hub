import { createAndAppendChild } from '../../../../../utils/createAndAppendChild';
import { data } from '../../data';

import { game } from '../getGameDiv';

export const createEndMenu = (i, endText) => {
  let endDiv = document.querySelector('.end-menu');

  if (!endDiv) {
    endDiv = createAndAppendChild(game, 'div', {
      className: 'end-menu game-menu',
      id: `${game.id}-end-menu`
    });

    createAndAppendChild(endDiv, 'p', {
      innerText: endText
    });

    createAndAppendChild(endDiv, 'p', {
      innerText: data.games[i].endMenu.subMessage
    });
  } else {
    const paragraphs = endDiv.querySelectorAll('p');
    paragraphs[0].innerText = endText;
    paragraphs[1].innerText = data.games[i].endMenu.subMessage;
  }

  return endDiv;
};
