export const saveGameStarted = (mode) => {
  localStorage.clear();
  localStorage.setItem('game-mode', mode);
};
