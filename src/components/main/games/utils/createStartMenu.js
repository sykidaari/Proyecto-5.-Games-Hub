import { createAndAppendChild } from '../../../../utils/createAndAppendChild';
import { data } from '../data';

import { game } from './getGameDiv';

export const createStartMenu = (i) => {
  const menuDiv = createAndAppendChild(game, 'div', {
    className: 'game-menu',
    id: `${game.id}-menu`
  });

  const title = createAndAppendChild(menuDiv, 'h2', {
    innerText: data.games[i].name
  });

  console.log('menu created');

  return menuDiv;
};
