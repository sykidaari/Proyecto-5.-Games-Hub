export const toggleMenu = (menu) => {
  console.log('toggling menu');
  const hidden = menu.classList.contains('hidden');

  if (!menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
  } else {
    menu.classList.remove('hidden');
  }
};
