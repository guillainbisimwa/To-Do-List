/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
import { projects } from './addProject';
import allProjectsMarkup from './renderProjects';
import setAttributes from '../setAttributes';

const handleEditingProject = (event) => {
  const editElement = event.currentTarget;
  const correspondingIndex = editElement.dataset.index;

  const myModalEl = document.getElementById('addProject');
  const modal = bootstrap.Modal.getInstance(myModalEl);

  // Modify the title as well as the placeholder text
  const header = document.querySelector('#exMl');
  header.innerHTML = 'Edit Project';
  const updateBtn = document.querySelector('#update-btn');
  setAttributes(updateBtn, {
    'data-index': correspondingIndex,
  });
  const saveBtn = document.querySelector('#save-btn');
  saveBtn.classList.add('hide');
  updateBtn.classList.remove('hide');
  const newTitle = document.querySelector('#project-title-input');
  newTitle.value = projects[correspondingIndex].title;

  modal.show();
};

const editProject = () => {
  const editProjectBtn = document.querySelectorAll('.editProject');
  editProjectBtn.forEach(editPrjct => {
    editPrjct.addEventListener('click', handleEditingProject);
  });
};

const handleUpdateProject = () => {
  const updateBtn = document.querySelector('#update-btn');
  updateBtn.addEventListener('click', (event) => {
    const editElement = event.currentTarget;
    const correspondingIndex = editElement.dataset.index;

    const newTitle = document.querySelector('#project-title-input');

    projects[correspondingIndex].title = newTitle.value;
    allProjectsMarkup(projects);

    const myModalEl = document.getElementById('addProject');
    const modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
  });
};

export { editProject, handleUpdateProject };
