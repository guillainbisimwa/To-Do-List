/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
import { projects } from './addProject';
import allProjectsMarkup from './renderProjects';
import setAttributes from '../setAttributes';

const handleDeletingProject = (event) => {
  const deleteElement = event.currentTarget;
  const correspondingIndex = deleteElement.dataset.index;

  const title = document.querySelector('#project-title-confirm');
  title.innerHTML = `Do you want to delete "${projects[correspondingIndex].title}"?`;

  const deleteBtn = document.querySelector('#delBtn');
  setAttributes(deleteBtn, {
    'data-index': correspondingIndex,
  });
};

const deleteProject = () => {
  const deleteProjectBtn = document.querySelectorAll('.deleteProject');
  deleteProjectBtn.forEach(delPrjct => {
    delPrjct.addEventListener('click', handleDeletingProject);
  });
};

const handleDeleteProject = () => {
  const deleteBtn = document.querySelector('#delBtn');
  deleteBtn.addEventListener('click', (event) => {
    const deleteElement = event.currentTarget;
    const correspondingIndex = deleteElement.dataset.index;

    projects.splice(correspondingIndex, 1);
    localStorage.removeItem('projects');
    localStorage.setItem('projects', JSON.stringify(projects));
    allProjectsMarkup(projects);

    const myModalDel = document.getElementById('delProject');
    const modal = bootstrap.Modal.getInstance(myModalDel);
    modal.hide();
  });
};

export { deleteProject, handleDeleteProject };
