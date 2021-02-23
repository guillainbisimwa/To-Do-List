import newProject from '../project';
import { projects } from './addProject';
import allProjectsMarkup from './renderProjects';
import setAttributes from '../setAttributes';

function handleEditingProject(event) {
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

}

export default function editProject() {
  const editProjectBtn = document.querySelectorAll('.editProject');
  editProjectBtn.forEach(editPrjct => {
    editPrjct.addEventListener('click', handleEditingProject);
  });
}

export function handleUpdateProject(){
  const updateBtn = document.querySelector('#update-btn');
  updateBtn.addEventListener('click', (event) => {
    const editElement = event.currentTarget;
    const correspondingIndex = editElement.dataset.index;

    const newTitle = document.querySelector('#project-title-input');
  
    projects[correspondingIndex].title = newTitle.value;
    allProjectsMarkup(projects);
    console.log(correspondingIndex);

    console.log(projects);
    const myModalEl = document.getElementById('addProject');
    const modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
  });
}
