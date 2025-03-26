import { gameData } from '../../ticTacToe';
import { endGame } from './endGame';

export const checkDraw = () => {
  if (gameData.unplayedSquares.length === 0) {
    return true;
  }
};
