import newProject from '../project';
import allProjectsMarkup from './renderProjects';
//import { editProject } from './editProject';


const projects = [];

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

    var myModalEl = document.getElementById('addProject');
    var modal = bootstrap.Modal.getInstance(myModalEl);

    modal.hide();
    allProjectsMarkup(projects);
    //editProject();
  }
  else{
    projectTitleInput.className = 'form-control is-invalid was-validated';
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
