import { createAndAppendChild } from '../../../../utils/createAndAppendChild';
import { data } from '../data';
import { createGameOptions } from './createGameOptions';
import { game } from './getGameDiv';

export const createEndMenu = (i, parentTag, player) => {
  const oldMenu = document.querySelector('.end-menu');
  if (oldMenu) oldMenu.remove();

  const endDiv = createAndAppendChild(parentTag, 'div', {
    className: 'end-menu',
    id: `${game.id}-end-menu`
  });

  endDiv.dataset.menu = 'true';

  const endData = data.games[i].endMenu;

  if (player) {
    endData.winMessage[0] = player;

    const endMessage = createAndAppendChild(endDiv, 'p', {
      innerText: data.games[i].endMenu.winMessage.join(' ')
    });
  } else {
    const endMessage = createAndAppendChild(endDiv, 'p', {
      innerText: data.games[i].endMenu.drawMessage
    });
  }
  const subMessage = createAndAppendChild(endDiv, 'p', {
    innerText: data.games[i].endMenu.subMessage
  });

  createGameOptions(i, endDiv);

  console.log('end created');
};
