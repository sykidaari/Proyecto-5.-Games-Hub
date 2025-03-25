import { data } from '../data';

export const resetGame = (i) => {
  const gameData = data.games[i].gameData;

  if (i === 0) {
    gameData.squares.forEach((square) => {
      square.status = null;
    });

    gameData.buttons.forEach((button, i) => {
      button.innerText = null;
      button.className = 'square-button';

      button.disabled = false;

      const newButton = button.cloneNode(true);
      button.parentNode.replaceChild(newButton, button);
      gameData.buttons[i] = newButton;
    });

    gameData.unplayedSquares = gameData.squares.filter(
      (square) => square.status === null
    );

    gameData.winner = '';
  }
};
