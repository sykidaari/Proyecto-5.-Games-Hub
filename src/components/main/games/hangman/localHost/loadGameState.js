import { createAndAppendChild } from '../../../../../utils/createAndAppendChild';
import { gameData } from '../hangman';

export const loadGameState = (letters, partIndex) => {
  gameData.failedLetters = [];

  letters.forEach((letter) => {
    let correct = false;

    gameData.levelLetters.forEach((p) => {
      if (p.innerText === letter) {
        p.classList.remove('hidden');

        correct = true;
      }
    });

    if (!correct) {
      const alreadyFailed = gameData.failedLetters.some(
        (li) => li.querySelector('p').innerText === letter
      );

      if (!alreadyFailed) {
        const failedLi = createAndAppendChild('#failed', 'li');
        const failedP = createAndAppendChild(failedLi, 'p', {
          innerText: letter
        });
        gameData.failedLetters.push(failedLi);
      }
    }
  });

  gameData.partIndex = partIndex;

  document.querySelectorAll('.character-part').forEach((part, index) => {
    if (index < gameData.partIndex) {
      part.classList.remove('hidden');
    }
  });
};
