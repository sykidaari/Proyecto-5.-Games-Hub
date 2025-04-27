import { createAndAppendChild } from '../../../../../utils/createAndAppendChild';
import { gameData } from '../hangman';

export const createLevel = (mode, ul, hintDiv) => {
  let level;

  const savedLevel = localStorage.getItem('level');

  if (savedLevel) {
    level = JSON.parse(savedLevel);
  } else {
    const levels = gameData.levels[mode];
    const randomIndex = Math.floor(Math.random() * levels.length);

    level = levels[randomIndex];

    localStorage.setItem('level', JSON.stringify(level));
  }

  const letters = level.word.split('');

  letters.forEach((letter) => {
    const letterLi = createAndAppendChild(ul, 'li', { className: 'letter' });
    const p = createAndAppendChild(letterLi, 'p', {
      innerText: letter,
      className: 'hidden'
    });
    gameData.levelLetters.push(p);
  });

  const hintText = createAndAppendChild(hintDiv, 'p', {
    id: 'hint-text',
    innerText: level.description,
    className: 'hidden'
  });

  gameData.levelHint = hintText;
};
