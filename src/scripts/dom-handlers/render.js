import createHeader from '../components/headerComponent';
import createModal from '../components/modalComponent';
import setAttributes from '../setAttributes';
import { projects, addProject } from './addProject';
import { editProject, updateProject } from './editProject';
import allProjectsMarkup from './renderProjects';

export default function render() {
  const contentDiv = document.querySelector('#content');
  const header = createHeader();
  const modal = createModal();

  const wrapperDiv = document.createElement('div');
  setAttributes(wrapperDiv, { class: 'row', id: 'projects-wrapper' });

  contentDiv.append(header, modal, wrapperDiv);
  addProject();
  updateProject();
  allProjectsMarkup(projects);
}
