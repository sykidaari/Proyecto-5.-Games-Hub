import { gameData } from '../../ticTacToe';
import { endGame } from './endGame';

export const checkDraw = () => {
  let { unplayedSquares } = gameData;
  const { squares } = gameData;

  unplayedSquares = squares.filter((square) => square.status === null);

  return unplayedSquares.length === 0;
};
