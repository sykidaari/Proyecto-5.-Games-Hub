import { gameData } from './hangman';

export const resetGame = (wordUl, input, tryButton, characterParts) => {
  wordUl.innerHTML = '';
  characterParts.forEach((part) => {
    part.classList.add('hidden');
  });

  gameData.partIndex = 0;
  gameData.levelLetters = [];
  gameData.usedLetters = [];

  characterParts[1].innerText = gameData.characterParts.game[1];

  input.disabled = false;
  tryButton.disabled = false;

  if (gameData.levelHint instanceof Element) {
    gameData.levelHint.remove();
  }

  gameData.failedLetters.forEach((letter) => {
    letter.remove();
  });
};
