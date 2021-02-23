import createHeader from '../components/headerComponent';
import { deleteProjectModal, addProjectModal } from '../components/modalComponent';
import setAttributes from '../setAttributes';
import { projects, addProject } from './addProject';
import { handleUpdateProject } from './editProject';
import { handleDeleteProject } from './deleteProject';
import allProjectsMarkup from './renderProjects';

export default function render() {
  const contentDiv = document.querySelector('#content');
  const header = createHeader();
  const addModal = addProjectModal();
  const delModal = deleteProjectModal();

  const wrapperDiv = document.createElement('div');
  setAttributes(wrapperDiv, { class: 'row', id: 'projects-wrapper' });

  contentDiv.append(delModal, header, addModal, wrapperDiv );
  addProject();
  handleUpdateProject();
  handleDeleteProject();
  allProjectsMarkup(projects);
}
