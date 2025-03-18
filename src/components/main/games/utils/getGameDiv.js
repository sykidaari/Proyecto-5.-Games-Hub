import { data } from '../data';

export let game;

export const getGameDiv = (i) =>
  (game = document.getElementById(data.games[i].id));
