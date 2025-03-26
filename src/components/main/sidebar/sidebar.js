import { createAndAppendChild } from '../../../utils/createAndAppendChild';
import { data as gamesData } from '../games/data';
import './_sidebar.scss';

export const sidebar = () => {
  const sidebar = createAndAppendChild('main', 'div', { id: 'sidebar' });

  const title = createAndAppendChild(sidebar, 'h3', { innerText: 'Menu' });
  const nav = createAndAppendChild(sidebar, 'nav');
  const ul = createAndAppendChild(nav, 'ul');

  gamesData.games.forEach((game) => {
    const li = createAndAppendChild(ul, 'li');
    const a = createAndAppendChild(li, 'a', {
      innerText: game.name
    });
  });
};
