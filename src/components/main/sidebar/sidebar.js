import './_sidebar.scss';
import './_mediaqueries.scss';

import { createAndAppendChild } from '../../../utils/createAndAppendChild';

import { data as gamesData } from '../games/data';

export const sidebar = () => {
  const sidebar = createAndAppendChild('main', 'div', { id: 'sidebar' });

  const title = createAndAppendChild(sidebar, 'h3', { innerText: 'Menu' });

  const nav = createAndAppendChild(sidebar, 'nav', { className: 'hidden2' });

  title.addEventListener('click', () => {
    nav.classList.toggle('hidden2');
  });

  const ul = createAndAppendChild(nav, 'ul');

  const sideBarAnchors = [];

  gamesData.games.forEach((game) => {
    const li = createAndAppendChild(ul, 'li');
    const a = createAndAppendChild(li, 'a', {
      innerText: game.name,
      href: game.id
    });
    a.dataset.fn = game.function;

    sideBarAnchors.push(a);
  });

  return sideBarAnchors;
};
