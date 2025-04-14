import { gameData } from '../ticTacToe';
import { checkDraw } from './logic/checkDraw';
import { checkWin } from './logic/checkWin';
import { endGame } from './logic/endGame';

export const checkGameEnd = () => {
  gameData.unplayedSquares = gameData.squares.filter(
    (square) => square.status === null
  );

  const winner = checkWin('X') ? 'X' : checkWin('O') ? 'O' : null;
  const draw = !winner && checkDraw();

  if (winner || draw) {
    const endText = endGame(winner);
    return endText;
  }

  return null;
};
