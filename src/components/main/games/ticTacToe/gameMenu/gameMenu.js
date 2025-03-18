import { createAndAppendChild } from '../../../../../utils/createAndAppendChild';
import { game } from '../../utils/getGameDiv';

export const gameMenu = () => {
  const menuDiv = createAndAppendChild(game, 'div', { className: 'game-menu' });
};
