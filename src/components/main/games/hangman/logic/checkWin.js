import { data } from '../../data';
import { gameData } from '../hangman';

export const checkWin = () => {
  if (
    !gameData.levelLetters.some((letter) => letter.classList.contains('hidden'))
  ) {
    const endText = data.games[2].endMenu.winMessage;

    return endText;
  }
};
