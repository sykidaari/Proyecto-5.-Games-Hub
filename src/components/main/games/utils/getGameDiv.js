import { data } from '../data';

export let game;

export const getGameDiv = (i) => {
  const gameDivs = document.querySelectorAll('.game-div');
  gameDivs.forEach((div) => {
    div.classList.remove('selected');
  });

  game = document.getElementById(data.games[i].id);
  game.classList.add('selected');
};
