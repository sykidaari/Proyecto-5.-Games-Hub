export const createAndAppendChild = (parent, newTag, options = {}) => {
  let parentTag;
  if (parent instanceof Element) {
    parentTag = parent;
  } else {
    parentTag = document.querySelector(parent);
  }
  const newElement = document.createElement(newTag);

  Object.entries(options).forEach(([key, value]) => {
    if (value !== undefined) newElement[key] = value;
  });

  parentTag.appendChild(newElement);

  return newElement;
};
