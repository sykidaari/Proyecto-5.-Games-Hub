import { gameData } from '../../ticTacToe';
import { endGame } from './endGame';

export const checkWin = (player) => {
  const won = gameData.winningCombinations.some((combination) =>
    combination.every((index) => gameData.squares[index].status === player)
  );

  if (won) {
    return true;
  }
};
