import { data } from '../data';
import { createGameMenu } from '../utils/createGameMenu';
import { getGameDiv } from '../utils/getGameDiv';
import './_ticTacToe.scss';
import { createGame } from './createGame/createGame';

export const gameData = data.games[0].gameData;

export const ticTacToe = () => {
  getGameDiv(0);
  createGameMenu(0);
  createGame();
};
