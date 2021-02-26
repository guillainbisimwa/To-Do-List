/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
import { projects } from './addProject';
import allProjectsMarkup from './renderProjects';
import setAttributes from '../setAttributes';

const handleDeletingTask = (event) => {
  const deleteElement = event.currentTarget;
  const correspondingIndex = deleteElement.dataset.index;
  const correspondPrjctIndex = deleteElement.dataset.indexProject;

  const title = document.querySelector('#task-title-confirm');

  title.innerHTML = `Do you want to delete "${projects[correspondPrjctIndex].tasksList[correspondingIndex].title}"?`;

  const deleteBtn = document.querySelector('#delBtnTask');
  setAttributes(deleteBtn, {
    'data-index': correspondingIndex, 'data-index-project': correspondPrjctIndex,
  });
};

const deleteTask = () => {
  const deleteTaskBtn = document.querySelectorAll('.deleteTask');
  deleteTaskBtn.forEach(delTask => {
    delTask.addEventListener('click', handleDeletingTask);
  });
};

const handleDeleteTask = () => {
  const deleteBtn = document.querySelector('#delBtnTask');
  deleteBtn.addEventListener('click', (event) => {
    const deleteElement = event.currentTarget;
    const correspondingIndex = deleteElement.dataset.index;
    const correspondPrjctIndex = deleteElement.dataset.indexProject;

    // projects[correspondPrjctIndex].tasksList.splice(correspondingIndex, 1);
    projects[correspondPrjctIndex].deleteTask(correspondingIndex);

    allProjectsMarkup(projects);

    const myModalDel = document.getElementById('delTask');
    const modal = bootstrap.Modal.getInstance(myModalDel);
    modal.hide();
  });
};

export { deleteTask, handleDeleteTask };
