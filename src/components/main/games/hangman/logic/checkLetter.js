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

  let usedLetters = JSON.parse(localStorage.getItem('used-letters')) || [];

  if (usedLetters.includes(input.value)) return;

  gameData.usedLetters.push(input.value);

  let correct = false;

  gameData.levelLetters.forEach((letter) => {
    if (input.value.toLowerCase() === letter.innerText) {
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

  if (!usedLetters.includes(input.value)) {
    usedLetters.push(input.value);
    localStorage.setItem('used-letters', JSON.stringify(usedLetters));
  }

  localStorage.setItem('part-index', gameData.partIndex);

  input.value = '';
};
