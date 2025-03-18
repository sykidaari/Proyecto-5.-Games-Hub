import { createAndAppendChild } from '../../utils/createAndAppendChild';
import { games } from './games/games';
import { sidebar } from './sidebar/sidebar';
import './_main.scss';

export const main = () => {
  const main = createAndAppendChild('#app', 'main');
  sidebar();
  games();
};
