import { createAndAppendChild } from '../../../../utils/createAndAppendChild';
import { data } from '../data';
import { game } from '../utils/getGameDiv';
import { gameData } from './hangman';

export const createGame = (mode) => {
  const visualDiv = createAndAppendChild(game, 'div', { id: 'visual-div' });

  const gallowsIMG = createAndAppendChild(visualDiv, 'img', {
    src: data.games[2].IMGs.gallow.src,
    alt: data.games[2].IMGs.gallow.alt
  });

  const characterDiv = createAndAppendChild(visualDiv, 'div', {
    id: 'character'
  });

  gameData.characterParts.game.forEach((part, i) => {
    const partDiv = createAndAppendChild(characterDiv, 'div', {
      innerText: part,
      id: `character-part-${i}`,
      className: 'character-part hidden'
    });
  });
};
