import createHeader from './header';
import createModal from './modalAddProject';
import displayProject from './projectMarkup';
import displayTask from './taskMarkup';

export default function displayHeader() {
  const contentDiv = document.querySelector('#content');
  const header = createHeader();
  const modal = createModal();
  
  const project1 = displayProject('1', "Project 1");

  const wrapperDiv = document.createElement('div');
  wrapperDiv.className = 'row';
  wrapperDiv.append(project1);
  
  contentDiv.append(header, modal,wrapperDiv );

}
