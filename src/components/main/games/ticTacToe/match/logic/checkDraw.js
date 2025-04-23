import { gameData } from '../../ticTacToe';
import { endGame } from './endGame';

export const checkDraw = () => {
  console.log(gameData.unplayedSquares.length);

  gameData.unplayedSquares = gameData.squares.filter(
    (square) => square.status === null
  );
  return gameData.unplayedSquares.length === 0;
};
