import newProject from '../project';
import allProjectsMarkup from './renderProjects';

const projects = [];

function cleanForm(elts = []) {
  elts.forEach(elt => {
    elt.value = '';
  });
}

function editProject() {
    const editProjectBtn = document.querySelectorAll('.editProject');
    editProjectBtn.forEach(editPrjct => {
    console.log(editPrjct);
    editPrjct.addEventListener('click', handleEditingProject);
  });
}

function handleEditingProject(event) {
  const editElement = event.currentTarget;
  const correspondingIndex = editElement.dataset.index;

  // Bring the modal
  // Get the content
  // Access the project[correspondingIndex].title
  const myModalEl = document.getElementById('addProject');
  const modal = bootstrap.Modal.getInstance(myModalEl);
  modal.show();

}


export { projects, editProject };
