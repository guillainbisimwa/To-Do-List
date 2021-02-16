import createModal from './modalAddProject';

function setAttributes(elt, attrs) {
  const props = Object.keys(attrs);
  props.forEach(prop => {
    elt.setAttribute(prop, attrs[prop]);
  });
}

export function createHeader() {
  const wrapperDiv = document.createElement('header');
  const h2 = document.createElement('h2');
  const addProjectButton = document.createElement('button');

  wrapperDiv.setAttribute('class', 'pt-5 d-flex justify-content-between');
  h2.setAttribute('class', 'text-secondary');
  setAttributes(addProjectButton, { class: 'btn btn-primary btn-lg shadow', 'data-bs-toggle': 'modal', 'data-bs-target': '#addProject' });

  h2.textContent = 'TODO List - JavaScript';
  addProjectButton.textContent = 'Add project';

  wrapperDiv.append(h2, addProjectButton);

  return wrapperDiv;
}

export default function displayHeader() {
  const contentDiv = document.querySelector('#content');
  const header = createHeader();
  const modal = createModal();
  contentDiv.append(header, modal);
}
