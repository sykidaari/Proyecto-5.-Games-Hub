import { createAndAppendChild } from '../../utils/createAndAppendChild';
import { data } from './data';
import './_header.scss';

export const header = () => {
  const header = createAndAppendChild('#app', 'header');
  const navbar = createAndAppendChild(header, 'nav');
  const ul = createAndAppendChild(navbar, 'ul');

  data.navbar.forEach((element) => {
    const li = createAndAppendChild(ul, 'li');
    const a = createAndAppendChild(li, 'a', { innerText: element.innerText });
  });
};
