import { gameData } from '../hangman';

export const checkLetter = (input) => {
  console.log(gameData.levelLetters);

  if (!input.checkValidity()) {
    input.reportValidity();
    return;
  }

  gameData.levelLetters.forEach((letter) => {
    if (input.value.toLowerCase() === letter.innerText) {
      console.log(letter);
      letter.classList.remove('hidden');
    } else {
    }
  });

  input.value = '';
};
