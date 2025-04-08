import { createAndAppendChild } from '../../../../../utils/createAndAppendChild';
import { gameData } from '../hangman';

export const checkLetter = (input, parts, failedUl) => {
  if (!input.checkValidity()) {
    input.reportValidity();
    return;
  }

  if (gameData.usedLetters.includes(input.value)) {
    return;
  }

  gameData.usedLetters.push(input.value);

  let correct = false;

  gameData.levelLetters.forEach((letter) => {
    if (input.value.toLowerCase() === letter.innerText) {
      console.log(letter);

      correct = true;
      letter.classList.remove('hidden');
    }
  });

  if (!correct && gameData.partIndex < parts.length) {
    parts[gameData.partIndex].classList.remove('hidden');
    gameData.partIndex++;

    const failedLi = createAndAppendChild(failedUl, 'li');
    const failedP = createAndAppendChild(failedLi, 'p', {
      innerText: input.value
    });
    gameData.failedLetters.push(failedLi);
  }

  input.value = '';
};
