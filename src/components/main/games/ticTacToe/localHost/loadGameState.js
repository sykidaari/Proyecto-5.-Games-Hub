import { gameData } from '../ticTacToe';

export const loadGameState = (startMenu) => {
  const board = JSON.parse(localStorage.getItem('board'));
  const turn = localStorage.getItem('turn');
  const mode = localStorage.getItem('game-mode');
  const result = localStorage.getItem('result');

  if (!board || !turn) return null;

  startMenu.classList.add('hidden');

  board.forEach((value, i) => {
    const square = gameData.squares[i];
    const button = gameData.buttons[i];

    square.status = value || null;
    button.innerText = value;

    if (value) {
      button.classList.add(value);
      button.disabled = true;
      if (mode === 'two') {
        button.classList.add(mode);
      }
    } else {
      button.disabled = false;
    }
  });

  return { turn, mode, result };
};
