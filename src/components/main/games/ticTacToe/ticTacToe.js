import { data } from '../data';
import { getGameDiv } from '../utils/getGameDiv';
import './_ticTacToe.scss';
import { createGame } from './createGame/createGame';
import { gameMenu } from './gameMenu/gameMenu';
import { match } from './match/match';

export const gameData = data.games[0].gameData;

export const ticTacToe = () => {
  getGameDiv(0);
  gameMenu();
  createGame();
  match();
};
