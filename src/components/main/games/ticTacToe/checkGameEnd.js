import { gameData } from './ticTacToe';
import { checkDraw } from './match/logic/checkDraw';
import { checkWin } from './match/logic/checkWin';
import { endGame } from './match/logic/endGame';

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
