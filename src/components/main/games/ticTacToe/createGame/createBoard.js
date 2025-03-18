import { createAndAppendChild } from '../../../../../utils/createAndAppendChild';
import { game } from '../../utils/getGameDiv';
import { gameData } from '../ticTacToe';

export const createBoard = () => {
  const gridDiv = createAndAppendChild(game, 'div', { id: 'squares-grid' });

  for (let i = 1; i <= 9; i++) {
    gameData.squares.push({ number: i, status: null });
  }
  gameData.squares.forEach((square) => {
    const button = createAndAppendChild(gridDiv, 'button', {
      className: 'square-button',
      id: `square-${square.number}`
    });

    gameData.buttons.push(button);
  });
};
