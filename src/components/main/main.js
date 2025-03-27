import { createAndAppendChild } from '../../utils/createAndAppendChild';
import { games } from './games/games';
import { sidebar } from './sidebar/sidebar';
import './_main.scss';
import { gameFunctions } from './games/gameFunctions';

export const main = () => {
  const main = createAndAppendChild('#app', 'main');
  const sideBarAnchors = sidebar();
  games();

  sideBarAnchors.forEach((a) => {
    a.addEventListener('click', () => {
      const gameDivs = document.querySelectorAll('.game-div');

      gameDivs.forEach((div) => (div.innerHTML = ''));

      const fn = gameFunctions[a.dataset.fn];
      fn();
    });
  });
};
