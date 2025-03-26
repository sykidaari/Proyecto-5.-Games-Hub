import { gameData } from '../../ticTacToe';

export const endGame = (result) => {
  gameData.buttons.forEach((button) => (button.disabled = true));

  gameData.result = result ? `${result}-wins` : 'draw';

  console.log(gameData.result);
};
