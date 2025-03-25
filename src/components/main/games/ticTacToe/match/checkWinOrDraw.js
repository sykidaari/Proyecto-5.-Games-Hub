import { gameData } from '../ticTacToe';
import { endGame } from './endGame';

export const checkWinOrDraw = (player) => {
  if (
    gameData.winningCombinations.some((combination) =>
      combination.every((index) => gameData.squares[index].status === player)
    )
  ) {
    endGame(player);
  } else if (gameData.unplayedSquares.length === 0) {
    endGame();
  }
};
