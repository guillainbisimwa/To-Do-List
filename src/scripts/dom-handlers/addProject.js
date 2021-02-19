import newProject from '../project';
import allProjectsMarkup from './renderProjects';

const projects = [];

function cleanForm(elts = []) {
  elts.forEach(elt => {
    elt.value = '';
  });
}

function handleGeneratingNewInstance() {
  const projectTitleInput = document.querySelector('#project-title-input');
  if (projectTitleInput.value.length !== 0) {
    const newProjectInstance = newProject(projectTitleInput.value);
    // console.log(newProjectInstance);
    console.log(projects);
    projects.push(newProjectInstance);
    cleanForm([projectTitleInput]);

    var myModalEl = document.getElementById('addProject');
    var modal = bootstrap.Modal.getInstance(myModalEl);
      
    modal.hide();

    allProjectsMarkup(projects);
  }
}

function handleAddingProject() {
  const saveChangesBtn = document.querySelector('#save-btn');
  saveChangesBtn.addEventListener('click', handleGeneratingNewInstance);
}

function addProject() {
  const addProjectBtn = document.querySelector('#add-project-btn');
  addProjectBtn.addEventListener('click', handleAddingProject);
}

export { addProject, projects };
