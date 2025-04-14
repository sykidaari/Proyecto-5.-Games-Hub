import { gameData } from '../ticTacToe';

export const saveGameState = (player) => {
  const board = gameData.squares.map((square) => square.status || '');

  localStorage.setItem('ttt-board', JSON.stringify(board));
  localStorage.setItem('ttt-turn', player);
};
