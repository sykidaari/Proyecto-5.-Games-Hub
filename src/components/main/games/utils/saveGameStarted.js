export const saveGameStarted = (mode) => {
  localStorage.setItem('game-mode', mode);
  localStorage.setItem('status', 'playing');
};
