import { createAndAppendChild } from '../../../../../utils/createAndAppendChild';
import { game } from '../../utils/getGameDiv';
import { gameData, genData } from '../hangman';

export const visualDiv = () => {
  const visualDiv = createAndAppendChild(game, 'div', { id: 'visual-div' });

  const gallowsIMG = createAndAppendChild(visualDiv, 'img', {
    src: genData.IMGs.gallow.src,
    alt: genData.IMGs.gallow.alt
  });

  const characterDiv = createAndAppendChild(visualDiv, 'div', {
    id: 'character'
  });

  const characterParts = [];

  gameData.characterParts.game.forEach((part, i) => {
    const partDiv = createAndAppendChild(characterDiv, 'div', {
      innerText: part,
      id: `character-part-${i}`,
      className: 'character-part hidden'
    });
    characterParts.push(partDiv);
  });

  return characterParts;
};
