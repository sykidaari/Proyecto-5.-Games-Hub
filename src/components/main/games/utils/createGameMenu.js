import { createAndAppendChild } from '../../../../utils/createAndAppendChild';
import { data } from '../data';
import { createGameOptions } from './createGameOptions';
import { game } from './getGameDiv';

export const createGameMenu = (i) => {
  const menuDiv = createAndAppendChild(game, 'div', {
    className: 'game-menu',
    id: `${game.id}-menu`
  });

  menuDiv.dataset.menu = 'true';

  const title = createAndAppendChild(menuDiv, 'h2', {
    innerText: data.games[i].name
  });

  console.log('menu created');
  createGameOptions(i, menuDiv);
};
