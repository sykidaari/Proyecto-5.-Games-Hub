export const saveGameStarted = (mode) => {
  const lastGame = localStorage.getItem('last-game');

  localStorage.clear();
  localStorage.setItem('last-game', lastGame);
  localStorage.setItem('game-mode', mode);
};
