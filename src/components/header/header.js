import './_header.scss';

import { createAndAppendChild } from '../../utils/createAndAppendChild';

export const header = () => {
  const header = createAndAppendChild('#app', 'header');
  const navbar = createAndAppendChild(header, 'nav');
  const ul = createAndAppendChild(navbar, 'ul');
  const li = createAndAppendChild(ul, 'li');
  const a = createAndAppendChild(li, 'a', { innerText: 'Games Hub' });
};
