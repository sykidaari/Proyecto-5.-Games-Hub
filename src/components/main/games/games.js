import { createAndAppendChild } from '../../../utils/createAndAppendChild';
import { data } from './data';
import './_games.scss';

export const games = () => {
  const gamesSection = createAndAppendChild('main', 'section', { id: 'games' });
  const gamesUl = createAndAppendChild(gamesSection, 'ul');

  data.games.forEach((game) => {
    const li = createAndAppendChild(gamesUl, 'li');
    const gameDiv = createAndAppendChild(li, 'div', {
      className: 'game-div',
      id: game.id
    });
  });
};
