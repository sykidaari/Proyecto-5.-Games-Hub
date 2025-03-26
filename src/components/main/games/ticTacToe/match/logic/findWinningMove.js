import { gameData } from '../../ticTacToe';

export const findWinningMove = (player) => {
  for (const combination of gameData.winningCombinations) {
    const [a, b, c] = combination;
    const squares = [
      gameData.squares[a],
      gameData.squares[b],
      gameData.squares[c]
    ];

    if (
      squares.filter((square) => square.status === player).length === 2 &&
      squares.some((square) => square.status === null)
    ) {
      return squares.find((square) => square.status === null);
    }
  }
  return null;
};
