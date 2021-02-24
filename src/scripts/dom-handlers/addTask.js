import { projects } from './addProject';
import allProjectsMarkup from './renderProjects';
import setAttributes from '../setAttributes';

function handleAddingTask(event) {
  const target = event.currentTarget;
  const targetProjectIndex = target.dataset.projectindex;

  // Get values from the modal
  const addTaskBtn = document.querySelector('#add-task-btn');

  setAttributes(addTaskBtn, { 'data-parentindex': targetProjectIndex });

  handleAdd(targetProjectIndex);
}

function addTask() {
  const addTaskBtns = document.querySelectorAll('.add-task');
  addTaskBtns.forEach(btn => {
    btn.addEventListener('click', handleAddingTask);
  });
}

function handleAdd(index) {
  // const addTaskButton = document.querySelector('#add-task-btn');
  const targetProject = projects[index];
  // console.log(addTaskButton);
  // console.log(projects);
  // console.log(targetProject);

  const title = document.querySelector('#task-title');
  const description = document.querySelector('#task-description').value;
  const priority = document.querySelector('#task-priority').value;
  const date = document.querySelector('#task-date').value;
  const addTaskBtn = document.querySelector('#add-task-btn');

  console.log(title);

  addTaskBtn.addEventListener('click', () => {
    const modal = document.querySelector('#addTask');
    const modalInstance = bootstrap.Modal.getInstance(modal);
    targetProject.addTask(title, description, priority, date);

    allProjectsMarkup(projects);

    modalInstance.hide();
  });
}

export { handleAdd, addTask };
