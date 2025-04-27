import { createAndAppendChild } from '../../utils/createAndAppendChild';
import { games } from './games/games';
import { sidebar } from './sidebar/sidebar';
import './_main.scss';
import './_mediaqueries.scss';
import { gameFunctions } from './games/gameFunctions';

export const main = () => {
  const main = createAndAppendChild('#app', 'main');
  const sideBarAnchors = sidebar();
  games();

  sideBarAnchors.forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();

      const gameDivs = document.querySelectorAll('.game-div');

      gameDivs.forEach((div) => (div.innerHTML = ''));

      const fnName = a.dataset.fn;
      const fn = gameFunctions[fnName];
      fn();

      localStorage.setItem('last-game', fnName);
    });
  });

  const lastGame = localStorage.getItem('last-game');
  if (lastGame) {
    gameFunctions[lastGame]();
  } else {
    const firstGame = Object.keys(gameFunctions)[0];
    gameFunctions[firstGame]();
  }
};
