import newProject from '../project';
import { projects } from './addProject';
import allProjectsMarkup from './renderProjects';

function handleEditingProject(event) {
  const editElement = event.currentTarget;
  const correspondingIndex = editElement.dataset.index;

  const myModalEl = document.getElementById('addProject');
  const modal = bootstrap.Modal.getInstance(myModalEl);

  // Modify the title as well as the placeholder text
  const header = document.querySelector('#exMl');
  header.innerHTML = 'Edit Project';
  const updateBtn = document.querySelector('#update-btn');
  const saveBtn = document.querySelector('#save-btn');
  saveBtn.classList.add('hide');
  updateBtn.classList.remove('hide');
  const newTitle = document.querySelector('#project-title-input');
  newTitle.value = projects[correspondingIndex].title;

  modal.show();

  updateBtn.addEventListener('click', () => {
    // console.log('====== before =====');
    // console.log(projects);
    // projects[correspondingIndex].title = newTitle.nodeValue;
    // console.log(newTitle.value);
    // console.log(typeof (newTitle));
    console.log(projects[correspondingIndex].title);
    console.log(correspondingIndex);
    projects[correspondingIndex].title = newTitle.value;
    // console.log('====== after =====');
    // console.log(projects);
    allProjectsMarkup(projects);
  });

  //  Display projects all over again
}

export default function editProject() {
  const editProjectBtn = document.querySelectorAll('.editProject');
  editProjectBtn.forEach(editPrjct => {
    // console.log(editPrjct);
    editPrjct.addEventListener('click', handleEditingProject);
  });
}
