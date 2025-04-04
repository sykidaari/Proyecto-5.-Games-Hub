import { gameData } from '../hangman';

export const checkLetter = (input, parts) => {
  console.log(parts[0]);

  if (!input.checkValidity()) {
    input.reportValidity();
    return;
  }

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
  }

  input.value = '';
};
