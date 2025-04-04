import { createAndAppendChild } from '../../../../../utils/createAndAppendChild';
import { data } from '../../data';
import { game } from '../../utils/getGameDiv';
import { gameData } from '../hangman';
import { playDiv } from './playDiv';
import { visualDiv } from './visualDiv';

export const createGame = (mode) => {
  const characterParts = visualDiv();
  const levelElements = playDiv();

  return { levelElements, characterParts };
};
