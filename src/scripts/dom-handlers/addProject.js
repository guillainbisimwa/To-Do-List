import newProject from '../project';
import allProjectsMarkup from './renderProjects';

const projects = [newProject('Default Project')];

function cleanForm(elts = []) {
  elts.forEach(elt => {
    elt.value = '';
  });
}

function handleGeneratingNewInstance() {
  const projectTitleInput = document.querySelector('#project-title-input');
  if (projectTitleInput.value.trim().length > 1) {
    const newProjectInstance = newProject(projectTitleInput.value);
    projects.push(newProjectInstance);
    cleanForm([projectTitleInput]);

    const myModalEl = document.getElementById('addProject');
    const modal = bootstrap.Modal.getInstance(myModalEl);

    modal.hide();
    allProjectsMarkup(projects);
    // editProject();
    // render();
  } else {
    projectTitleInput.className = 'form-control is-invalid was-validated';
  }
}

function handleAddingProject() {
  const updateBtn = document.querySelector('#update-btn');
  const saveBtn = document.querySelector('#save-btn');
  updateBtn.classList.add('hide');
  saveBtn.classList.remove('hide');
  const newTitle = document.querySelector('#project-title-input');
  newTitle.value = '';

  const header = document.querySelector('#exMl');
  header.innerHTML = 'Add Project';
  const saveChangesBtn = document.querySelector('#save-btn');
  saveChangesBtn.addEventListener('click', handleGeneratingNewInstance);
}

function addProject() {
  const addProjectBtn = document.querySelector('#add-project-btn');
  addProjectBtn.addEventListener('click', handleAddingProject);
}

export { addProject, projects, cleanForm };
