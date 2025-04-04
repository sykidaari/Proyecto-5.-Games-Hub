import { data } from '../../data';
import { gameData } from '../hangman';

export const checkLose = (parts) => {
  if (gameData.partIndex === parts.length) {
    setTimeout(() => {
      parts[1].innerText = gameData.characterParts.end;
    }, 500);

    const endText = data.games[2].endMenu.loseMessage;

    return endText;
  }
};
