import { createAndAppendChild } from '../../../../../utils/createAndAppendChild';
import { data } from '../../data';

import { game } from '../getGameDiv';

export const createStartMenu = (i) => {
  const startDiv = createAndAppendChild(game, 'div', {
    className: 'start-menu game-menu ',
    id: `${game.id}-start-menu`
  });

  const title = createAndAppendChild(startDiv, 'h2', {
    innerText: data.games[i].name
  });

  return startDiv;
};
