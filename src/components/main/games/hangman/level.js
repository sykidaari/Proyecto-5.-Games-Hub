import { createAndAppendChild } from '../../../../utils/createAndAppendChild';
import { gameData } from './hangman';

export const level = (mode, ul) => {
  console.log('level running in' + mode);

  const levels = gameData.levels[mode];
  const randomIndex = Math.floor(Math.random() * levels.length);

  const level = levels[randomIndex];
  console.log(level);

  const letters = level.word.split('');

  letters.forEach((letter) => {
    const letterLi = createAndAppendChild(ul, 'li', { className: 'letter' });
    const p = createAndAppendChild(letterLi, 'p', {
      innerText: letter,
      className: 'hidden'
    });
  });
};
