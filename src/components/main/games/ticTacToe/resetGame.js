import { gameData } from './ticTacToe';

export const resetGame = () => {
  gameData.squares.forEach((square) => {
    square.status = null;
  });

  gameData.buttons.forEach((button, i) => {
    const newButton = button.cloneNode(true);

    newButton.innerText = null;
    newButton.className = 'square-button';
    newButton.disabled = false;

    button.replaceWith(newButton);
    gameData.buttons[i] = newButton;
  });

  gameData.result = '';
};
