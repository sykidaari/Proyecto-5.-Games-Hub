import { gameData, genData } from '../../ticTacToe';

export const endGame = (result) => {
  const { endMenu } = genData;

  gameData.buttons.forEach((button) => (button.disabled = true));

  if (result) {
    gameData.result = `${result}-wins`;

    endMenu.winMessage[0] = result;
    const endText = endMenu.winMessage.join(' ');

    return endText;
  } else {
    gameData.result = result;

    const endText = endMenu.drawMessage;

    return endText;
  }
};
