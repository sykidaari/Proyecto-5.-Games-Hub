import { gameData } from '../../ticTacToe';
import { endGame } from './endGame';

export const checkWin = (player) => {
  const { winningCombinations, squares } = gameData;

  const won = winningCombinations.some((combination) =>
    combination.every((index) => squares[index].status === player)
  );

  if (won) {
    return true;
  }
};
