import { projects, cleanForm } from './addProject';
import allProjectsMarkup from './renderProjects';
import setAttributes from '../setAttributes';

function handleAddingTask(event) {
  const target = event.currentTarget;
  const targetProjectIndex = target.dataset.projectindex;

  const title = document.querySelector('#task-title-input');
  const description = document.querySelector('#task-textarea');
  const priority = document.querySelector('#task-select');
  const date = document.querySelector('#task-date-input');

  cleanForm([title, description, priority, date]);

  // Get values from the modal
  const addTaskBtn = document.querySelector('#save-btn-task');
  setAttributes(addTaskBtn, { 'data-parentindex': targetProjectIndex });
}

function addTask() {
  const addTaskBtns = document.querySelectorAll('.add-task');
  addTaskBtns.forEach(btn => {
    btn.addEventListener('click', handleAddingTask);
  });
}

function taskPriority(priorityLevel) {
  if (priorityLevel === '1') { return 'Low'; }
  if (priorityLevel === '2') { return 'Medium'; }
  if (priorityLevel === '3') { return 'High'; }
  return priorityLevel;
}

function handleAdd() {
  const addTaskBtn = document.querySelector('#save-btn-task');

  addTaskBtn.addEventListener('click', () => {
    const title = document.querySelector('#task-title-input').value;
    const description = document.querySelector('#task-textarea').value;
    const priority = taskPriority(document.querySelector('#task-select').value);
    const date = document.querySelector('#task-date-input').value;

    const modal = document.querySelector('#addTask');
    const modalInstance = bootstrap.Modal.getInstance(modal);
    const targetProject = projects[addTaskBtn.dataset.parentindex];

    targetProject.addTask(title, description, priority, date);

    allProjectsMarkup(projects);

    modalInstance.hide();
  });
}

export { handleAdd, addTask };
