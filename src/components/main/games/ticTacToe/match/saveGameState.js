import { gameData } from '../ticTacToe';

export const saveGameState = (player) => {
  const board = gameData.squares.map((square) => square.innerText || '');

  localStorage.setItem('board', JSON.stringify(board));
  localStorage.setItem('turn', player);
};
