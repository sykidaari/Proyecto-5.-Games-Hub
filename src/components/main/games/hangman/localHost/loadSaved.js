export const loadSaved = (startMenu) => {
  const level = JSON.parse(localStorage.getItem('level'));
  const usedLetters = JSON.parse(localStorage.getItem('used-letters'));
  const partIndex = JSON.parse(localStorage.getItem('part-index'));

  if (!level) return null;

  startMenu.classList.add('hidden');

  console.log('game loaded');

  return { level, usedLetters, partIndex };
};
