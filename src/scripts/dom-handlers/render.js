import createHeader from '../components/headerComponent';
import { deleteProjectModal, addProjectModal } from '../components/modalComponent';
import { addTaskModal, deleteTaskModal } from '../components/taskModalComponent';
import setAttributes from '../setAttributes';
import { projects, addProject } from './addProject';
import { handleUpdateProject } from './editProject';
import { handleDeleteProject } from './deleteProject';
import allProjectsMarkup from './renderProjects';
import { handleAdd } from './addTask';
import { handleUpdateTask } from './editTask';

export default function render() {
  const contentDiv = document.querySelector('#content');
  const header = createHeader();
  const addModal = addProjectModal();
  const delModal = deleteProjectModal();
  const modalAddTask = addTaskModal();
  const modalDeleteTask = deleteTaskModal();

  const wrapperDiv = document.createElement('div');
  setAttributes(wrapperDiv, { class: 'row', id: 'projects-wrapper' });

  contentDiv.append(delModal, header, addModal, modalAddTask, modalDeleteTask, wrapperDiv);
  addProject();
  handleUpdateProject();
  handleDeleteProject();
  handleUpdateTask();
  handleAdd();
  allProjectsMarkup(projects);
}
